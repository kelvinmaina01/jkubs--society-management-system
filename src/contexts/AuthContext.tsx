import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { User } from '../types';
import { loginUser as mockLoginUser, logoutUser as mockLogoutUser, currentUser as mockCurrentUser } from '../mockData';
import { Permission, RolePermissions } from '../utils/permissions';
import { useNotification } from './NotificationContext';

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<User | null>;
    logout: () => void;
    hasPermission: (permission: Permission) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const { success, error } = useNotification();

    // Initialize user from mock data (or local storage in a real app)
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else if (mockCurrentUser) {
            // For demo purposes, we can start with a logged in user or null
            // setUser(mockCurrentUser); 
        }
    }, []);

    const login = async (email: string, password: string): Promise<User | null> => {
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            const loggedInUser = mockLoginUser(email, password);

            let userToLogin = loggedInUser;

            // FALLBACK FOR TESTING: If no user found, create a dummy test user
            if (!userToLogin) {
                userToLogin = {
                    id: `test-${Date.now()}`,
                    email: email,
                    fullName: 'Test User',
                    studentId: 'TEST/001',
                    department: 'Testing',
                    yearOfStudy: 1,
                    role: 'member',
                    joinedAt: new Date().toISOString(),
                    verified: true,
                    status: 'active',
                    profile: {
                        userId: `test-${Date.now()}`,
                        bio: 'Auto-generated test account',
                        photoUrl: `https://ui-avatars.com/api/?name=Test+User&background=random`,
                        duesStatus: 'none',
                        location: 'Test Lab'
                    }
                };
            }

            // At this point userToLogin is guaranteed to be a User object
            const finalUser = userToLogin as User;

            if (finalUser.status !== 'active') {
                error('Login Failed', 'Your account is pending approval or suspended.');
                return null;
            }

            setUser(finalUser);
            localStorage.setItem('user', JSON.stringify(finalUser));
            success('Welcome back!', `Logged in as ${finalUser.fullName}`);
            return finalUser;
        } catch (err) {
            error('Login Error', 'An unexpected error occurred');
            return null;
        }
    };

    const logout = () => {
        mockLogoutUser();
        setUser(null);
        localStorage.removeItem('user');
        success('Logged Out', 'See you soon!');
    };

    const hasPermission = (permission: Permission): boolean => {
        if (!user) return false;

        const userPermissions = RolePermissions[user.role] || [];

        // Check for wildcard permission
        if (userPermissions.includes(Permission.MANAGE_USERS)) { // Admin usually has this, effectively a wildcard for many things, but let's stick to explicit checks or a true wildcard if we had one.
            // Actually, let's just check if the permission is in the list.
        }

        return userPermissions.includes(permission);
    };

    const value: AuthContextType = {
        user,
        isAuthenticated: !!user,
        login,
        logout,
        hasPermission,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

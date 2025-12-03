import type { UserRole } from '../types';
import type { User } from '../types';

export const Permission = {
    // User Management
    MANAGE_USERS: 'MANAGE_USERS',
    MANAGE_ROLES: 'MANAGE_ROLES',
    APPROVE_MEMBERS: 'APPROVE_MEMBERS',
    VIEW_MEMBERS: 'VIEW_MEMBERS',

    // Content Management
    CREATE_ANNOUNCEMENT: 'CREATE_ANNOUNCEMENT',
    MANAGE_ANNOUNCEMENTS: 'MANAGE_ANNOUNCEMENTS',

    // Event Management
    CREATE_EVENT: 'CREATE_EVENT',
    MANAGE_EVENTS: 'MANAGE_EVENTS',
    MANAGE_ALL_EVENTS: 'MANAGE_ALL_EVENTS',
    VIEW_EVENTS: 'VIEW_EVENTS',

    // Track Management
    MANAGE_TRACK: 'MANAGE_TRACK',
    MANAGE_ALL_TRACKS: 'MANAGE_ALL_TRACKS',
    CREATE_TRACK_CONTENT: 'CREATE_TRACK_CONTENT',
    APPROVE_TRACK_MEMBERS: 'APPROVE_TRACK_MEMBERS',
    VIEW_TRACKS: 'VIEW_TRACKS',

    // Financials
    VIEW_FINANCIALS: 'VIEW_FINANCIALS',
    MANAGE_FINANCIALS: 'MANAGE_FINANCIALS',

    // System
    VIEW_DASHBOARD: 'VIEW_DASHBOARD',
    MANAGE_SETTINGS: 'MANAGE_SETTINGS',
    MANAGE_WEBSITE: 'MANAGE_WEBSITE',
    VIEW_ANALYTICS: 'VIEW_ANALYTICS',
} as const;

export type Permission = typeof Permission[keyof typeof Permission];

// New role-based permissions for three-tier system
export const RolePermissions: Record<UserRole, Permission[]> = {
    super_admin: Object.values(Permission), // Full access to everything

    executive_admin: [
        Permission.VIEW_DASHBOARD,
        Permission.VIEW_MEMBERS,
        Permission.APPROVE_MEMBERS,
        Permission.VIEW_EVENTS,
        Permission.CREATE_EVENT,
        Permission.MANAGE_ALL_EVENTS,
        Permission.VIEW_TRACKS,
        Permission.MANAGE_ALL_TRACKS,
        Permission.CREATE_ANNOUNCEMENT,
        Permission.MANAGE_ANNOUNCEMENTS,
        Permission.VIEW_FINANCIALS,
        Permission.MANAGE_FINANCIALS,
        Permission.VIEW_ANALYTICS,
        // Cannot manage system settings, website, or roles (Super Admin only)
    ],

    track_lead: [
        Permission.VIEW_DASHBOARD,
        Permission.VIEW_MEMBERS,
        Permission.VIEW_EVENTS,
        Permission.CREATE_EVENT, // Limited to track-specific events
        Permission.VIEW_TRACKS,
        Permission.MANAGE_TRACK, // Only their assigned track
        Permission.CREATE_TRACK_CONTENT,
        Permission.APPROVE_TRACK_MEMBERS,
        // Cannot access financials, system settings, or other tracks
    ],

    event_coordinator: [
        Permission.VIEW_DASHBOARD,
        Permission.VIEW_MEMBERS,
        Permission.VIEW_EVENTS,
        Permission.CREATE_EVENT,
        Permission.MANAGE_EVENTS, // All events
        Permission.VIEW_TRACKS,
        // Cannot manage tracks, users, or financials
    ],

    member: [
        Permission.VIEW_DASHBOARD,
        Permission.VIEW_EVENTS,
        Permission.VIEW_TRACKS,
        Permission.VIEW_MEMBERS, // Limited view (public profiles only)
        // Members have NO admin console access
    ],
};

export const hasPermission = (user: User | null, permission: Permission): boolean => {
    if (!user) return false;

    // Pending users have NO permissions regardless of role
    if (user.status !== 'active') return false;

    const userPermissions = RolePermissions[user.role] || [];
    return userPermissions.includes(permission);
};

export const canManageUser = (currentUser: User, targetUser: User): boolean => {
    if (!hasPermission(currentUser, Permission.MANAGE_USERS)) return false;

    // Only Super Admin can manage other admins
    if (targetUser.role === 'super_admin' && currentUser.role !== 'super_admin') return false;
    if (targetUser.role === 'executive_admin' && currentUser.role !== 'super_admin') return false;

    return true;
};

export const canAccessTrack = (user: User, trackId: string): boolean => {
    if (!user) return false;

    // Super Admin and Executive Admin can access all tracks
    if (user.role === 'super_admin' || user.role === 'executive_admin') {
        return true;
    }

    // Track Leads can only access their assigned track
    if (user.role === 'track_lead') {
        // Check if user is assigned to this track
        // In a real app, this would check user.assignedTrackId or similar
        return user.profile?.track === trackId || false;
    }

    // Members and Event Coordinators can view but not manage
    return hasPermission(user, Permission.VIEW_TRACKS);
};

export const canAccessAdminPortal = (user: User | null): boolean => {
    if (!user || user.status !== 'active') return false;

    // Only admin roles can access admin portal
    const adminRoles: UserRole[] = ['super_admin', 'executive_admin', 'track_lead', 'event_coordinator'];
    return adminRoles.includes(user.role);
};

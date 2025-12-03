import { useState } from 'react';
import type { User, UserRole } from '../../types';
import { mockUsers } from '../../mockData';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { Search, Filter, Trash2, Edit } from 'lucide-react';
import { useNotification } from '../../contexts/NotificationContext';
import AddUserModal from './AddUserModal';

const UserManagement = () => {
    const { success } = useNotification();
    const [users, setUsers] = useState<User[]>(mockUsers);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

    const handleAddUser = (userData: any) => {
        const newUser: User = {
            id: Date.now().toString(),
            email: userData.email,
            fullName: userData.fullName,
            role: userData.role,
            studentId: 'NEW/000', // Mock ID
            department: 'Assigned',
            yearOfStudy: 1,
            joinedAt: new Date().toISOString(),
            verified: true,
            status: 'active',
            profile: {
                userId: Date.now().toString(),
                bio: `Role: ${userData.role}`,
                photoUrl: `https://ui-avatars.com/api/?name=${userData.fullName.replace(' ', '+')}&background=random`,
                duesStatus: 'current',
                track: userData.trackId || undefined
            }
        };

        setUsers([newUser, ...users]);
        success('User Created', `Successfully added ${newUser.fullName} as ${newUser.role}`);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ position: 'relative', flex: 1, minWidth: '300px' }}>
                    <Search size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }} />
                    <input
                        type="text"
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '10px 10px 10px 40px',
                            borderRadius: '8px',
                            border: '1px solid var(--color-border)',
                            background: 'var(--color-surface)',
                            color: 'var(--color-text-primary)'
                        }}
                    />
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                    <select
                        value={roleFilter}
                        onChange={(e) => setRoleFilter(e.target.value)}
                        style={{
                            padding: '10px',
                            borderRadius: '8px',
                            border: '1px solid var(--color-border)',
                            background: 'var(--color-surface)',
                            color: 'var(--color-text-primary)'
                        }}
                    >
                        <option value="all">All Roles</option>
                        <option value="member">Members</option>
                        <option value="admin">Admins</option>
                        <option value="committee">Committee</option>
                        <option value="research_lead">Track Leads</option>
                    </select>

                    <Button onClick={() => setIsAddUserModalOpen(true)}>
                        + Add User
                    </Button>
                </div>
            </div>

            <Card noPadding>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg-secondary)' }}>
                                <th style={{ padding: '16px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>User</th>
                                <th style={{ padding: '16px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Role</th>
                                <th style={{ padding: '16px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Status</th>
                                <th style={{ padding: '16px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Joined</th>
                                <th style={{ padding: '16px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map(user => (
                                <tr key={user.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                    <td style={{ padding: '16px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                backgroundImage: `url(${user.profile?.photoUrl})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundColor: 'var(--color-bg-secondary)'
                                            }} />
                                            <div>
                                                <div style={{ fontWeight: 500 }}>{user.fullName}</div>
                                                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ padding: '16px' }}>
                                        <Badge variant={getRoleBadgeVariant(user.role)}>
                                            {user.role.replace('_', ' ')}
                                        </Badge>
                                    </td>
                                    <td style={{ padding: '16px' }}>
                                        <Badge variant={user.status === 'active' ? 'success' : 'warning'}>
                                            {user.status}
                                        </Badge>
                                    </td>
                                    <td style={{ padding: '16px', color: 'var(--color-text-secondary)' }}>
                                        {new Date(user.joinedAt).toLocaleDateString()}
                                    </td>
                                    <td style={{ padding: '16px' }}>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <Button size="sm" variant="ghost" style={{ padding: '8px' }}>
                                                <Edit size={16} />
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                style={{ padding: '8px', color: '#EF4444' }}
                                                onClick={() => handleDelete(user.id)}
                                            >
                                                <Trash2 size={16} />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            <AddUserModal
                isOpen={isAddUserModalOpen}
                onClose={() => setIsAddUserModalOpen(false)}
                onAddUser={handleAddUser}
            />
        </div>
    );
};

export default UserManagement;

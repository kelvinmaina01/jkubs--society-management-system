import { useState } from 'react';
import { motion } from 'framer-motion';
import type { User, UserRole } from '../../types';
import { mockUsers } from '../../mockData';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Modal from '../ui/Modal';
import { Check, X, Shield, User as UserIcon } from 'lucide-react';
import { useNotification } from '../../contexts/NotificationContext';

const MemberApprovalQueue = () => {
    const { addNotification } = useNotification();
    const [pendingUsers, setPendingUsers] = useState<User[]>([
        // Mock pending users for demonstration
        {
            id: 'p1',
            email: 'new.student@student.jkuat.ac.ke',
            fullName: 'New Student',
            studentId: 'SCT221-0999/2023',
            department: 'Biochemistry',
            yearOfStudy: 1,
            role: 'member',
            joinedAt: new Date().toISOString(),
            verified: false,
            status: 'pending',
            profile: { userId: 'p1', duesStatus: 'none' }
        },
        {
            id: 'p2',
            email: 'researcher@jkuat.ac.ke',
            fullName: 'Jane Researcher',
            studentId: 'PG/001/2023',
            department: 'Biochemistry',
            yearOfStudy: 1,
            role: 'member',
            joinedAt: new Date().toISOString(),
            verified: false,
            status: 'pending',
            profile: { userId: 'p2', duesStatus: 'none' }
        }
    ]);

    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [assignRole, setAssignRole] = useState<UserRole>('member');

    const handleApproveClick = (user: User) => {
        setSelectedUser(user);
        setAssignRole('member'); // Default
        setIsModalOpen(true);
    };

    const confirmApproval = () => {
        if (!selectedUser) return;

        // In a real app, this would make an API call
        setPendingUsers(prev => prev.filter(u => u.id !== selectedUser.id));
        addNotification('success', `${selectedUser.fullName} approved as ${assignRole}`);
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    const handleReject = (userId: string) => {
        setPendingUsers(prev => prev.filter(u => u.id !== userId));
        addNotification('info', 'Member request rejected');
    };

    if (pendingUsers.length === 0) {
        return (
            <Card>
                <div style={{ textAlign: 'center', padding: '40px', color: 'var(--color-text-secondary)' }}>
                    <Check size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
                    <h3>All caught up!</h3>
                    <p>No pending member requests.</p>
                </div>
            </Card>
        );
    }

    return (
        <>
            <Card>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: 700 }}>Member Approval Queue</h2>
                    <Badge variant="warning">{pendingUsers.length} Pending</Badge>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {pendingUsers.map(user => (
                        <motion.div
                            key={user.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '16px',
                                background: 'var(--color-bg-secondary)',
                                borderRadius: '12px',
                                border: '1px solid var(--color-border)'
                            }}
                        >
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    background: 'var(--color-primary-blue)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700
                                }}>
                                    {user.fullName.charAt(0)}
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, fontWeight: 600 }}>{user.fullName}</h4>
                                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                                        {user.studentId} • {user.department}
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '8px' }}>
                                <Button
                                    size="sm"
                                    variant="danger"
                                    onClick={() => handleReject(user.id)}
                                    leftIcon={<X size={16} />}
                                >
                                    Reject
                                </Button>
                                <Button
                                    size="sm"
                                    variant="primary"
                                    onClick={() => handleApproveClick(user)}
                                    leftIcon={<Check size={16} />}
                                >
                                    Approve
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Card>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Approve Member & Assign Role"
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <p>
                        You are approving <strong>{selectedUser?.fullName}</strong>. Please assign a role to this user.
                    </p>

                    <div style={{ display: 'grid', gap: '12px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: '1px solid var(--color-border)', borderRadius: '8px', cursor: 'pointer' }}>
                            <input
                                type="radio"
                                name="role"
                                value="member"
                                checked={assignRole === 'member'}
                                onChange={() => setAssignRole('member')}
                            />
                            <UserIcon size={20} />
                            <div>
                                <div style={{ fontWeight: 600 }}>Regular Member</div>
                                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Standard access to events and resources</div>
                            </div>
                        </label>

                        <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: '1px solid var(--color-border)', borderRadius: '8px', cursor: 'pointer' }}>
                            <input
                                type="radio"
                                name="role"
                                value="committee"
                                checked={assignRole === 'committee'}
                                onChange={() => setAssignRole('committee')}
                            />
                            <Shield size={20} />
                            <div>
                                <div style={{ fontWeight: 600 }}>Committee Member</div>
                                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Access to committee resources</div>
                            </div>
                        </label>

                        <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: '1px solid var(--color-border)', borderRadius: '8px', cursor: 'pointer' }}>
                            <input
                                type="radio"
                                name="role"
                                value="research_lead"
                                checked={assignRole === 'research_lead'}
                                onChange={() => setAssignRole('research_lead')}
                            />
                            <Shield size={20} color="var(--color-primary-blue)" />
                            <div>
                                <div style={{ fontWeight: 600 }}>Track Lead</div>
                                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Manage track resources and members</div>
                            </div>
                        </label>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '12px' }}>
                        <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        <Button variant="primary" onClick={confirmApproval}>Confirm Approval</Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default MemberApprovalQueue;

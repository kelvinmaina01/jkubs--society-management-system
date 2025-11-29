import { mockCommittees, mockUsers } from '../mockData';

const CommitteeList = () => {
    const getChairName = (chairId: string) => {
        const user = mockUsers.find(u => u.id === chairId);
        return user?.fullName || 'Unknown';
    };

    return (
        <div className="container" style={{ padding: 'var(--space-8) var(--space-4)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-8)' }}>
                <div>
                    <h1 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-2)' }}>
                        👔 Committees
                    </h1>
                    <p style={{ color: '#6B7280' }}>
                        Society committees and leadership
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2">
                {mockCommittees.map(committee => (
                    <div key={committee.id} className="card" style={{ cursor: 'pointer' }}>
                        <div style={{
                            height: '100px',
                            background: 'linear-gradient(135deg, var(--color-primary-blue) 0%, var(--color-secondary-blue) 100%)',
                            borderRadius: 'var(--radius-md)',
                            marginBottom: 'var(--space-4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '48px',
                        }}>
                            👔
                        </div>

                        <h3 style={{ fontSize: 'var(--font-size-h2)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-3)' }}>
                            {committee.name}
                        </h3>

                        <p style={{ fontSize: 'var(--font-size-body)', color: '#6B7280', lineHeight: 1.6, marginBottom: 'var(--space-4)' }}>
                            {committee.description}
                        </p>

                        <div style={{
                            padding: 'var(--space-4)',
                            background: 'var(--color-light-gray)',
                            borderRadius: 'var(--radius-md)',
                            marginBottom: 'var(--space-4)'
                        }}>
                            <div style={{ marginBottom: 'var(--space-2)' }}>
                                <span style={{ fontSize: 'var(--font-size-small)', color: '#6B7280' }}>Chair:</span>
                                <span style={{ fontSize: 'var(--font-size-small)', fontWeight: 'var(--font-weight-bold)', marginLeft: 'var(--space-2)' }}>
                                    {getChairName(committee.chairId)}
                                </span>
                            </div>
                            <div>
                                <span style={{ fontSize: 'var(--font-size-small)', color: '#6B7280' }}>Members:</span>
                                <span style={{ fontSize: 'var(--font-size-small)', fontWeight: 'var(--font-weight-bold)', marginLeft: 'var(--space-2)' }}>
                                    {committee.memberCount}
                                </span>
                            </div>
                        </div>

                        <button className="btn btn-outline" style={{ width: '100%' }}>
                            View Committee
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommitteeList;

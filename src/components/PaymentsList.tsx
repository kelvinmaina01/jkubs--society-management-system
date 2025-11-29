import { mockPayments, mockUsers } from '../mockData';

const PaymentsList = () => {
    const getUserName = (userId: string) => {
        const user = mockUsers.find(u => u.id === userId);
        return user?.fullName || 'Unknown';
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <div className="container" style={{ padding: 'var(--space-8) var(--space-4)' }}>
            <div style={{ marginBottom: 'var(--space-8)' }}>
                <h1 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-2)' }}>
                    💰 Payments & Dues
                </h1>
                <p style={{ color: '#6B7280' }}>
                    Track membership dues and payments
                </p>
            </div>

            <div className="card table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Member</th>
                            <th>Amount</th>
                            <th>Method</th>
                            <th>Reference</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockPayments.map(payment => (
                            <tr key={payment.id}>
                                <td style={{ fontWeight: 'var(--font-weight-medium)' }}>
                                    {getUserName(payment.userId)}
                                </td>
                                <td style={{ fontWeight: 'var(--font-weight-bold)', color: 'var(--color-primary-blue)' }}>
                                    {payment.currency} {payment.amount.toLocaleString()}
                                </td>
                                <td>
                                    <span className="badge badge-info" style={{ textTransform: 'uppercase' }}>
                                        {payment.method}
                                    </span>
                                </td>
                                <td style={{ fontFamily: 'monospace', fontSize: 'var(--font-size-small)', color: '#6B7280' }}>
                                    {payment.reference}
                                </td>
                                <td style={{ color: '#6B7280' }}>
                                    {formatDate(payment.createdAt)}
                                </td>
                                <td>
                                    <span className={`badge badge-${payment.status === 'completed' ? 'success' : payment.status === 'pending' ? 'warning' : 'error'}`}>
                                        {payment.status === 'completed' ? '✓ Completed' :
                                            payment.status === 'pending' ? '⏳ Pending' :
                                                '✕ Failed'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{ marginTop: 'var(--space-8)', padding: 'var(--space-6)', background: 'var(--color-light-gray)', borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ fontSize: 'var(--font-size-h3)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-4)' }}>
                    💳 Pay Your Dues
                </h3>
                <p style={{ marginBottom: 'var(--space-4)', color: '#6B7280' }}>
                    Semester membership dues: <strong>KES 500</strong>
                </p>
                <button className="btn btn-primary btn-lg">
                    Pay via M-PESA
                </button>
            </div>
        </div>
    );
};

export default PaymentsList;

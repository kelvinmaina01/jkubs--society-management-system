import { useState } from 'react';
import './index.css';
import { currentUser, mockEvents, mockAnnouncements, mockDashboardStats } from './mockData';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import EventList from './components/EventList';
import MemberDirectory from './components/MemberDirectory';
import PaymentsList from './components/PaymentsList';
import AnnouncementList from './components/AnnouncementList';
import CommitteeList from './components/CommitteeList';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';

type Page = 'landing' | 'login' | 'dashboard' | 'events' | 'members' | 'payments' | 'announcements' | 'committees';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentPage, setCurrentPage] = useState<Page>('landing');

    const handleLogin = () => {
        setIsLoggedIn(true);
        setCurrentPage('dashboard');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setCurrentPage('landing');
    };

    if (!isLoggedIn) {
        if (currentPage === 'login') {
            return <LoginPage onLogin={handleLogin} />;
        }
        return <LandingPage onLoginClick={() => setCurrentPage('login')} />;
    }

    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard':
                return <Dashboard stats={mockDashboardStats} events={mockEvents} announcements={mockAnnouncements} user={currentUser} />;
            case 'events':
                return <EventList />;
            case 'members':
                return <MemberDirectory />;
            case 'payments':
                return <PaymentsList />;
            case 'announcements':
                return <AnnouncementList />;
            case 'committees':
                return <CommitteeList />;
            default:
                return <Dashboard stats={mockDashboardStats} events={mockEvents} announcements={mockAnnouncements} user={currentUser} />;
        }
    };

    return (
        <div className="app">
            <Navbar
                user={currentUser}
                currentPage={currentPage}
                onNavigate={(page) => setCurrentPage(page as Page)}
                onLogout={handleLogout}
            />
            <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
                {renderPage()}
            </main>
        </div>
    );
}

export default App;

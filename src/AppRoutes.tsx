import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from './contexts';
import { canAccessAdminPortal } from './utils/permissions';
import { mockEvents, mockAnnouncements, mockDashboardStats } from './mockData';

// Components
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import EventList from './components/EventList';
import MemberDirectory from './components/MemberDirectory';
import PaymentsList from './components/PaymentsList';
import AnnouncementList from './components/AnnouncementList';
import CommitteeList from './components/CommitteeList';
import LoginPage from './components/LoginPage';
import AdminLoginPage from './components/AdminLoginPage';
import LandingPage from './components/LandingPage';
import PublicEventsPage from './components/public/PublicEventsPage';
import TracksOverview from './components/public/TracksOverview';
import TrackDetailPage from './components/public/TrackDetailPage';
import TeamPage from './components/public/TeamPage';
import MemberProfile from './components/members/MemberProfile';
import MemberTracks from './components/members/MemberTracks';

// Route Guard Components
interface PrivateRouteProps {
    children: React.ReactNode;
}

// Member Route Guard - requires authentication
const MemberRoute = ({ children }: PrivateRouteProps) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

// Admin Route Guard - requires authentication AND admin role
const AdminRoute = ({ children }: PrivateRouteProps) => {
    const { isAuthenticated, user } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (!canAccessAdminPortal(user)) {
        // Non-admin users trying to access admin portal get redirected to member dashboard
        return <Navigate to="/members/dashboard" replace />;
    }

    return <>{children}</>;
};

// Page Wrapper with Animation
interface PageWrapperProps {
    children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            {children}
        </motion.div>
    );
};

function AppContent() {
    const { isAuthenticated, user, logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    // Determine if we're in admin portal based on route
    const isAdminPortal = location.pathname.startsWith('/admin');
    const isMemberPortal = location.pathname.startsWith('/members');


    // Get current page ID from path
    const getCurrentPage = () => {
        const path = location.pathname;

        if (path.startsWith('/admin/')) {
            return path.substring(7); // Remove '/admin/'
        }
        if (path.startsWith('/members/')) {
            return path.substring(9); // Remove '/members/'
        }

        const simple = path.substring(1); // remove leading slash
        if (simple === '' || simple === 'login') return 'dashboard';
        return simple;
    };

    const handleNavigate = (pageId: string) => {
        // Smart navigation based on current context
        if (isAdminPortal) {
            navigate(`/admin/${pageId}`);
        } else if (isMemberPortal) {
            navigate(`/members/${pageId}`);
        } else {
            navigate(`/${pageId}`);
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    // Show Navbar only when authenticated and in member/admin portals
    const showNavbar = isAuthenticated && user && (isMemberPortal || isAdminPortal);

    return (
        <div className="app">
            {showNavbar && (
                <Navbar
                    user={user!}
                    currentPage={getCurrentPage()}
                    onNavigate={handleNavigate}
                    onLogout={handleLogout}
                />
            )}

            <main style={{
                paddingTop: showNavbar ? '80px' : '0',
                minHeight: '100vh'
            }}>
                <AnimatePresence mode="wait">
                    <Routes>
                        {/* ========== PUBLIC ROUTES ========== */}
                        <Route
                            path="/"
                            element={
                                <PageWrapper>
                                    <LandingPage onLoginClick={() => navigate('/login')} />
                                </PageWrapper>
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <PageWrapper>
                                    <LoginPage onLogin={() => { }} />
                                </PageWrapper>
                            }
                        />
                        <Route
                            path="/events"
                            element={
                                <PageWrapper>
                                    <div className="pt-20">
                                        <Navbar user={null} currentPage="events" onNavigate={handleNavigate} onLogout={() => { }} />
                                        <PublicEventsPage />
                                    </div>
                                </PageWrapper>
                            }
                        />
                        <Route
                            path="/tracks"
                            element={
                                <PageWrapper>
                                    <div className="pt-20">
                                        <Navbar user={null} currentPage="tracks" onNavigate={handleNavigate} onLogout={() => { }} />
                                        <TracksOverview />
                                    </div>
                                </PageWrapper>
                            }
                        />
                        <Route
                            path="/tracks/:trackId"
                            element={
                                <PageWrapper>
                                    <div className="pt-20">
                                        <Navbar user={null} currentPage="tracks" onNavigate={handleNavigate} onLogout={() => { }} />
                                        <TrackDetailPage />
                                    </div>
                                </PageWrapper>
                            }
                        />
                        <Route
                            path="/team"
                            element={
                                <PageWrapper>
                                    <div className="pt-20">
                                        <Navbar user={null} currentPage="team" onNavigate={handleNavigate} onLogout={() => { }} />
                                        <TeamPage />
                                    </div>
                                </PageWrapper>
                            }
                        />

                        {/* ========== MEMBER DASHBOARD ROUTES (/members/*) ========== */}
                        <Route
                            path="/members/dashboard"
                            element={
                                <MemberRoute>
                                    <PageWrapper>
                                        <Dashboard
                                            stats={mockDashboardStats}
                                            events={mockEvents}
                                            announcements={mockAnnouncements}
                                            user={user!}
                                        />
                                    </PageWrapper>
                                </MemberRoute>
                            }
                        />
                        <Route
                            path="/members/events"
                            element={
                                <MemberRoute>
                                    <PageWrapper>
                                        <EventList />
                                    </PageWrapper>
                                </MemberRoute>
                            }
                        />
                        <Route
                            path="/members/announcements"
                            element={
                                <MemberRoute>
                                    <PageWrapper>
                                        <AnnouncementList />
                                    </PageWrapper>
                                </MemberRoute>
                            }
                        />
                        <Route
                            path="/members/profile"
                            element={
                                <MemberRoute>
                                    <PageWrapper>
                                        <MemberProfile />
                                    </PageWrapper>
                                </MemberRoute>
                            }
                        />
                        <Route
                            path="/members/tracks"
                            element={
                                <MemberRoute>
                                    <PageWrapper>
                                        <MemberTracks />
                                    </PageWrapper>
                                </MemberRoute>
                            }
                        />
                        <Route
                            path="/members/tracks/:trackId"
                            element={
                                <MemberRoute>
                                    <PageWrapper>
                                        <div className="pt-20">
                                            <TrackDetailPage />
                                        </div>
                                    </PageWrapper>
                                </MemberRoute>
                            }
                        />

                        {/* ========== ADMIN PORTAL ROUTES (/admin/*) ========== */}
                        <Route path="/admin/login" element={<AdminLoginPage />} />

                        <Route
                            path="/admin/dashboard"
                            element={
                                <AdminRoute>
                                    <PageWrapper>
                                        <Dashboard
                                            stats={mockDashboardStats}
                                            events={mockEvents}
                                            announcements={mockAnnouncements}
                                            user={user!}
                                        />
                                    </PageWrapper>
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/admin/events"
                            element={
                                <AdminRoute>
                                    <PageWrapper>
                                        <EventList />
                                    </PageWrapper>
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/admin/members"
                            element={
                                <AdminRoute>
                                    <PageWrapper>
                                        <MemberDirectory />
                                    </PageWrapper>
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/admin/payments"
                            element={
                                <AdminRoute>
                                    <PageWrapper>
                                        <PaymentsList />
                                    </PageWrapper>
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/admin/announcements"
                            element={
                                <AdminRoute>
                                    <PageWrapper>
                                        <AnnouncementList />
                                    </PageWrapper>
                                </AdminRoute>
                            }
                        />
                        <Route
                            path="/admin/committees"
                            element={
                                <AdminRoute>
                                    <PageWrapper>
                                        <CommitteeList />
                                    </PageWrapper>
                                </AdminRoute>
                            }
                        />

                        {/* ========== CATCH ALL & REDIRECTS ========== */}
                        {/* Redirect authenticated users based on their role */}
                        <Route
                            path="*"
                            element={
                                isAuthenticated && user ? (
                                    canAccessAdminPortal(user) ? (
                                        <Navigate to="/admin/dashboard" replace />
                                    ) : (
                                        <Navigate to="/members/dashboard" replace />
                                    )
                                ) : (
                                    <Navigate to="/" replace />
                                )
                            }
                        />
                    </Routes>
                </AnimatePresence>
            </main>
        </div>
    );
}

function AppRoutes() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default AppRoutes;

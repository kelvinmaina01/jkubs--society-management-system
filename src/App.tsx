import { AuthProvider, ThemeProvider, NotificationProvider } from './contexts';
import './index.css';
import './animations.css';
import AppRoutes from './AppRoutes';

function App() {
    return (
        <NotificationProvider>
            <ThemeProvider>
                <AuthProvider>
                    <AppRoutes />
                </AuthProvider>
            </ThemeProvider>
        </NotificationProvider>
    );
}

export default App;

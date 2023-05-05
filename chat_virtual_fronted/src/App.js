import { Chat } from './components/Chat/Chat';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesManager from './routes/RoutesManager.js';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <RoutesManager />
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;

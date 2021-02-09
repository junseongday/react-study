import ErrorBoundary from './ErrorBoundary';
import './styles.css';
import User from './User';

export default function App() {
  return (
    <ErrorBoundary>
      <User />
    </ErrorBoundary>
  );
}

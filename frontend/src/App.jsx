import { useState, useContext, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import RecipeInputForm from './components/RecipeInputForm';
import RecipeResult from './components/RecipeResult';
import ComparisonView from './components/ComparisonView';
import LoadingSpinner from './components/LoadingSpinner';
import { mockRecipe } from './data/mockRecipe';
import './App.css';

const AppContent = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [theme]);

  const handleSetRecipe = (data) => {
    setRecipe(data);
  };

  return (
    <div className="app-container min-vh-100">
      {/* Modern Navigation Header */}
      <nav className="navbar navbar-expand-lg sticky-top mb-4">
        <Container>
          <div className="navbar-brand fw-bold d-flex align-items-center">
            <i className="bi bi-heart-pulse me-2 text-primary fs-3"></i>
            <span className="fs-4">Recipe Transformer</span>
          </div>
          <Button
            onClick={toggleTheme}
            variant="outline-primary"
            className="theme-toggle-btn d-flex align-items-center"
            size="sm"
          >
            <i className={`bi ${theme === 'dark' ? 'bi-sun' : 'bi-moon'} me-1`}></i>
            {theme === 'dark' ? 'Light' : 'Dark'}
          </Button>
        </Container>
      </nav>

      <Container fluid className="px-3">
        <RecipeInputForm setRecipe={handleSetRecipe} setLoading={setLoading} />
        {loading && <LoadingSpinner />}
        {recipe && (
          <>
            <RecipeResult recipe={recipe} />
            <ComparisonView recipe={recipe} />
          </>
        )}
      </Container>

      {/* Footer */}
      <footer className="mt-5 py-4 text-center text-muted">
        <Container>
          <small>Transform your recipes into healthier versions with AI</small>
        </Container>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;

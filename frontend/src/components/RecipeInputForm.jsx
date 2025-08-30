import { useState, useContext } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { ThemeContext } from '../contexts/ThemeContext';

const RecipeInputForm = ({ setRecipe, setLoading }) => {
  const [recipeText, setRecipeText] = useState('');
  const [allergies, setAllergies] = useState([]);
  const { theme } = useContext(ThemeContext);

  const handleAllergyChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setAllergies([...allergies, value]);
    } else {
      setAllergies(allergies.filter((allergy) => allergy !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Hardcoded response for now
    const mockData = {
      original: {
        analysis: 'This is the original recipe analysis.',
        ingredients: ['- 1 cup flour', '- 1 cup sugar', '- 1 egg'],
        instructions: ['1. Mix all ingredients.', '2. Bake at 350 degrees.'],
        prepTime: '10 mins',
        cookTime: '20 mins',
      },
      healthy: {
        ingredients: ['- 1 cup almond flour', '- 1/2 cup maple syrup', '- 1 flax egg'],
        instructions: ['1. Mix all ingredients.', '2. Bake at 350 degrees.'],
        prepTime: '15 mins',
        cookTime: '25 mins',
        substitutions: [
          { original: '1 cup flour', replacement: '1 cup almond flour', reason: 'Gluten-free and lower in carbs.' },
          { original: '1 cup sugar', replacement: '1/2 cup maple syrup', reason: 'Natural sweetener with a lower glycemic index.' },
        ],
        sweetenerOptions: ['- Honey', '- Coconut Sugar'],
      },
    };
    setRecipe(mockData);
    setLoading(false);
  };

  return (
    <section className="hero-section">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} xl={6}>
          {/* Hero Content */}
          <div className="text-center mb-5">
            <div className="hero-icon mb-4">
              <i className="bi bi-magic fs-1 text-primary"></i>
            </div>
            <h1 className="display-4 mb-3">Healthy Recipe Transformer</h1>
            <p className="lead mb-4">
              Transform your favorite recipes into healthier versions with AI-powered suggestions
            </p>
            <div className="hero-stats d-flex justify-content-center gap-4 mb-4">
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Recipes Transformed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Main Form Card */}
          <Card className="p-4 card-transparent main-form-card">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="recipeText" className="mb-4">
                <Form.Label className="d-flex align-items-center">
                  <i className="bi bi-journal-text me-2"></i>
                  Enter your recipe or food name
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  value={recipeText}
                  onChange={(e) => setRecipeText(e.target.value)}
                  placeholder="Try: 'Chicken Alfredo' or paste your full recipe with ingredients and instructions..."
                  className="modern-textarea"
                  required
                />
                <div className="form-text mt-2">
                  <i className="bi bi-info-circle me-1"></i>
                  The more details you provide, the better the transformation will be!
                </div>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="d-flex align-items-center mb-3">
                  <i className="bi bi-shield-exclamation me-2"></i>
                  Dietary Restrictions & Allergies
                </Form.Label>
                <div className="allergy-grid">
                  {[
                    { value: 'nuts', label: 'Nuts' },
                    { value: 'dairy', label: 'Dairy' },
                    { value: 'gluten', label: 'Gluten' },
                    { value: 'eggs', label: 'Eggs' },
                    { value: 'fish', label: 'Fish' },
                    { value: 'shellfish', label: 'Shellfish' },
                    { value: 'soy', label: 'Soy' }
                  ].map((allergy) => (
                    <div key={allergy.value} className="allergy-option">
                      <Form.Check
                        type="checkbox"
                        id={allergy.value}
                        value={allergy.value}
                        checked={allergies.includes(allergy.value)}
                        onChange={handleAllergyChange}
                        className="visually-hidden"
                      />
                      <Form.Label
                        htmlFor={allergy.value}
                        className={`allergy-label d-flex align-items-center ${
                          allergies.includes(allergy.value) ? 'active' : ''
                        }`}
                      >
                        {allergy.label}
                      </Form.Label>
                    </div>
                  ))}
                </div>
              </Form.Group>

              <div className="d-grid">
                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  className="transform-btn"
                  disabled={!recipeText.trim()}
                >
                  <i className="bi bi-sparkles me-2"></i>
                  Transform Recipe
                  <i className="bi bi-arrow-right ms-2"></i>
                </Button>
              </div>
            </Form>
          </Card>

          {/* Feature Cards */}
          <Row className="mt-5">
            <Col md={4} className="mb-3">
              <div className="feature-card text-center p-3">
                <i className="bi bi-heart-pulse text-success fs-3 mb-2"></i>
                <h6 className="fw-bold">Healthier Ingredients</h6>
                <small className="text-muted">Smart substitutions for better nutrition</small>
              </div>
            </Col>
            <Col md={4} className="mb-3">
              <div className="feature-card text-center p-3">
                <i className="bi bi-clock text-warning fs-3 mb-2"></i>
                <h6 className="fw-bold">Time Efficient</h6>
                <small className="text-muted">Quick transformations in seconds</small>
              </div>
            </Col>
            <Col md={4} className="mb-3">
              <div className="feature-card text-center p-3">
                <i className="bi bi-award text-primary fs-3 mb-2"></i>
                <h6 className="fw-bold">AI Powered</h6>
                <small className="text-muted">Advanced recipe analysis</small>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default RecipeInputForm;
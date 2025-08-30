import { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ThemeContext } from '../contexts/ThemeContext';

const ComparisonView = ({ recipe }) => {
  const { theme } = useContext(ThemeContext);

  if (!recipe) {
    return null;
  }

  return (
    <section className="comparison-section my-5">
      {/* Section Header */}
      <div className="text-center mb-5">
        <div className="comparison-icon mb-3">
          <i className="bi bi-arrow-left-right text-primary fs-1"></i>
        </div>
        <h2 className="display-5 mb-3">Side-by-Side Comparison</h2>
        <p className="lead text-muted">See the transformation at a glance</p>
      </div>

      <Row className="justify-content-center">
        {/* Original Recipe Card */}
        <Col md={6} lg={5} xl={5} className="mb-4">
          <Card className="h-100 comparison-card original-card">
            <div className="card-header-custom">
              <div className="d-flex align-items-center">
                <i className="bi bi-journal text-secondary me-2"></i>
                <h3 className="mb-0">Original Recipe</h3>
              </div>
              <span className="recipe-label original-label">Before</span>
            </div>
            <Card.Body className="p-4">
              {/* Ingredients */}
              <div className="recipe-section mb-4">
                <h5 className="section-title d-flex align-items-center mb-3">
                  <i className="bi bi-basket me-2"></i>
                  Ingredients
                </h5>
                <div className="ingredients-list">
                  {recipe.original.ingredients.map((ingredient, index) => (
                    <div key={index} className="ingredient-item original">
                      <i className="bi bi-circle text-secondary me-2"></i>
                      <span>{ingredient.replace(/^- /, '')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructions */}
              <div className="recipe-section mb-4">
                <h5 className="section-title d-flex align-items-center mb-3">
                  <i className="bi bi-list-ol me-2"></i>
                  Instructions
                </h5>
                <ol className="instructions-list compact">
                  {recipe.original.instructions.map((instruction, index) => (
                    <li key={index} className="instruction-item-compact mb-2">
                      <span className="step-number-small">{index + 1}</span>
                      <span className="step-text">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Time Info */}
              <div className="time-info-compact d-flex justify-content-between">
                <div className="time-item-small">
                  <i className="bi bi-clock text-secondary"></i>
                  <span className="ms-1">{recipe.original.prepTime}</span>
                </div>
                <div className="time-item-small">
                  <i className="bi bi-fire text-secondary"></i>
                  <span className="ms-1">{recipe.original.cookTime}</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Transformation Arrow - Hidden on mobile */}
        <Col xs={12} md={12} lg={2} xl={2} className="d-none d-lg-flex align-items-center justify-content-center mb-4">
          <div className="transformation-arrow">
            <div className="arrow-container">
              <i className="bi bi-arrow-right fs-1 text-primary"></i>
              <div className="arrow-label">Transformed</div>
            </div>
          </div>
        </Col>

        {/* Healthy Recipe Card */}
        <Col md={6} lg={5} xl={5} className="mb-4">
          <Card className="h-100 comparison-card healthy-card">
            <div className="card-header-custom">
              <div className="d-flex align-items-center">
                <i className="bi bi-heart-pulse text-success me-2"></i>
                <h3 className="mb-0">Healthy Recipe</h3>
              </div>
              <span className="recipe-label healthy-label">After</span>
            </div>
            <Card.Body className="p-4">
              {/* Ingredients */}
              <div className="recipe-section mb-4">
                <h5 className="section-title d-flex align-items-center mb-3">
                  <i className="bi bi-basket me-2"></i>
                  Ingredients
                </h5>
                <div className="ingredients-list">
                  {recipe.healthy.ingredients.map((ingredient, index) => (
                    <div key={index} className="ingredient-item healthy">
                      <i className="bi bi-check-circle text-success me-2"></i>
                      <span>{ingredient.replace(/^- /, '')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructions */}
              <div className="recipe-section mb-4">
                <h5 className="section-title d-flex align-items-center mb-3">
                  <i className="bi bi-list-ol me-2"></i>
                  Instructions
                </h5>
                <ol className="instructions-list compact">
                  {recipe.healthy.instructions.map((instruction, index) => (
                    <li key={index} className="instruction-item-compact mb-2">
                      <span className="step-number-small success">{index + 1}</span>
                      <span className="step-text">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Time Info */}
              <div className="time-info-compact d-flex justify-content-between">
                <div className="time-item-small">
                  <i className="bi bi-clock text-success"></i>
                  <span className="ms-1">{recipe.healthy.prepTime}</span>
                </div>
                <div className="time-item-small">
                  <i className="bi bi-fire text-success"></i>
                  <span className="ms-1">{recipe.healthy.cookTime}</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Mobile Transformation Indicator */}
      <div className="d-lg-none text-center mt-3">
        <div className="mobile-transformation-indicator">
          <i className="bi bi-arrow-down text-primary fs-3"></i>
          <div className="small text-muted">Transformed with AI</div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonView;
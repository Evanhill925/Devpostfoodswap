import { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ThemeContext } from '../contexts/ThemeContext';

const RecipeResult = ({ recipe }) => {
  const { theme } = useContext(ThemeContext);

  if (!recipe) {
    return null;
  }

  return (
    <section className="results-section my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} xl={6}>
          {/* Results Header */}
          <div className="text-center mb-5">
            <div className="success-icon mb-3">
              <i className="bi bi-check-circle-fill text-success fs-1"></i>
            </div>
            <h2 className="display-5 mb-3">Transformation Complete!</h2>
            <p className="lead text-muted">Your recipe has been successfully transformed</p>
          </div>

          {/* Original Analysis Card */}
          <Card className="p-4 mb-4 card-transparent analysis-card">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-clipboard-data text-info me-3 fs-4"></i>
                <Card.Title as="h3" className="mb-0">Original Recipe Analysis</Card.Title>
              </div>
              <div className="analysis-content">
                <Card.Text className="fs-6 lh-base">{recipe.original.analysis}</Card.Text>
              </div>
            </Card.Body>
          </Card>

          {/* Healthy Recipe Card */}
          <Card className="p-4 mb-4 card-transparent recipe-card">
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <i className="bi bi-heart-pulse text-success me-3 fs-4"></i>
                  <Card.Title as="h3" className="mb-0">Healthy Transformed Recipe</Card.Title>
                </div>
                <div className="recipe-badge">
                  <span className="badge bg-success">Healthier</span>
                </div>
              </div>

              {/* Ingredients Section */}
              <div className="recipe-section mb-4">
                <h5 className="section-title d-flex align-items-center mb-3">
                  <i className="bi bi-basket me-2"></i>
                  Ingredients
                </h5>
                <div className="ingredients-grid">
                  {recipe.healthy.ingredients.map((ingredient, index) => (
                    <div key={index} className="ingredient-item">
                      <i className="bi bi-check-square text-success me-2"></i>
                      <span>{ingredient.replace(/^- /, '')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructions Section */}
              <div className="recipe-section mb-4">
                <h5 className="section-title d-flex align-items-center mb-3">
                  <i className="bi bi-list-ol me-2"></i>
                  Instructions
                </h5>
                <ol className="instructions-list">
                  {recipe.healthy.instructions.map((instruction, index) => (
                    <li key={index} className="instruction-item mb-3">
                      <div className="step-number">{index + 1}</div>
                      <div className="step-content">{instruction}</div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Time Info */}
              <div className="time-info d-flex justify-content-center gap-4 mt-4">
                <div className="time-item text-center">
                  <i className="bi bi-clock text-primary fs-4 mb-2"></i>
                  <div className="time-label">Prep Time</div>
                  <div className="time-value">{recipe.healthy.prepTime}</div>
                </div>
                <div className="time-item text-center">
                  <i className="bi bi-fire text-warning fs-4 mb-2"></i>
                  <div className="time-label">Cook Time</div>
                  <div className="time-value">{recipe.healthy.cookTime}</div>
                </div>
              </div>
            </Card.Body>
          </Card>

          {/* Substitutions Card */}
          <Card className="p-4 mb-4 card-transparent substitutions-card">
            <Card.Body>
              <div className="d-flex align-items-center mb-4">
                <i className="bi bi-arrow-left-right text-warning me-3 fs-4"></i>
                <Card.Title as="h3" className="mb-0">Key Substitutions</Card.Title>
              </div>
              <div className="substitutions-list">
                {recipe.healthy.substitutions.map((sub, index) => (
                  <div key={index} className="substitution-item mb-3">
                    <div className="substitution-header d-flex align-items-center mb-2">
                      <div className="original-item">
                        <span className="text-muted small">Original:</span>
                        <div className="fw-medium text-decoration-line-through">{sub.original}</div>
                      </div>
                      <i className="bi bi-arrow-right mx-3 text-primary"></i>
                      <div className="replacement-item">
                        <span className="text-muted small">Healthier:</span>
                        <div className="fw-bold text-success">{sub.replacement}</div>
                      </div>
                    </div>
                    <div className="substitution-reason">
                      <i className="bi bi-lightbulb text-info me-2"></i>
                      <small className="text-muted">{sub.reason}</small>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>

          {/* Sweetener Options Card */}
          <Card className="p-4 card-transparent options-card">
            <Card.Body>
              <div className="d-flex align-items-center mb-4">
                <i className="bi bi-droplet text-primary me-3 fs-4"></i>
                <Card.Title as="h3" className="mb-0">Alternative Sweetener Options</Card.Title>
              </div>
              <div className="options-grid">
                {recipe.healthy.sweetenerOptions.map((option, index) => (
                  <div key={index} className="option-item">
                    <i className="bi bi-plus-circle text-success me-2"></i>
                    <span>{option.replace(/^- /, '')}</span>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default RecipeResult;
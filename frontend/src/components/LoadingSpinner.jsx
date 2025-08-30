import { Spinner, Row, Col } from 'react-bootstrap';

const LoadingSpinner = () => {
  return (
    <section className="loading-section my-5">
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <div className="loading-container">
            {/* Main Spinner */}
            <div className="main-spinner mb-4">
              <div className="spinner-wrapper">
                <Spinner animation="border" role="status" className="modern-spinner">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
                <div className="spinner-glow"></div>
              </div>
            </div>
            
            {/* Loading Text */}
            <div className="loading-text mb-4">
              <h4 className="loading-title mb-2">
                <i className="bi bi-magic me-2"></i>
                Transforming Your Recipe
              </h4>
              <p className="loading-subtitle text-muted">
                AI is analyzing ingredients and creating healthier alternatives...
              </p>
            </div>

            {/* Loading Steps */}
            <div className="loading-steps">
              <div className="step-item active">
                <div className="step-icon">
                  <i className="bi bi-search"></i>
                </div>
                <span className="step-label">Analyzing Recipe</span>
              </div>
              <div className="step-item">
                <div className="step-icon">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <span className="step-label">Finding Alternatives</span>
              </div>
              <div className="step-item">
                <div className="step-icon">
                  <i className="bi bi-heart-pulse"></i>
                </div>
                <span className="step-label">Creating Healthy Version</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="progress-container mt-4">
              <div className="progress modern-progress">
                <div className="progress-bar animated-progress" role="progressbar"></div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default LoadingSpinner;
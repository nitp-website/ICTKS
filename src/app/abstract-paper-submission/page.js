import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AbstractPaperSubmission() {
  return (
    <>
      <Navbar />

      <section className="dates-section">
        <div className="dates-container">
          <h2 className="dates-title">
            <i className="fas fa-file-pen"></i> Abstract and Paper Submission
          </h2>
          <div className="dates-grid">
            <div className="date-card">
              <h3 className="card-title">Abstract Submission Deadline</h3>
              <p className="card-date">March 31st, 2026</p>
            </div>

            <div className="date-card">
              <h3 className="card-title">Abstract Acceptance Notification</h3>
              <p className="card-date">April 07th, 2026</p>
            </div>

            <div className="date-card">
              <h3 className="card-title">Full Paper Submission Deadline</h3>
              <p className="card-date">May 31st, 2026</p>
            </div>
          </div>
        </div>
      </section>

      <section className="instructions-section">
        <div className="instructions-container">
          <h2 className="instructions-title">
            <i className="fas fa-pencil"></i> Instructions to Authors
          </h2>
          <p className="instructions-text">
            Authors are requested to submit original research papers that have not been published or submitted elsewhere.
            All submissions will undergo peer review to ensure academic quality and relevance to the theme of this international conference.
          </p>
          <h3 className="guidelines-subtitle">
            <i className="fas fa-book"></i> How to Submit
          </h3>
          <ul className="guidelines-list">
            <li>Submit your abstract by the abstract deadline.</li>
            <li>After acceptance, upload the full paper before the final submission deadline.</li>
            <li>Use the conference submission form for paper upload.</li>
            <li>Refer to the brochure for additional instructions and updates.</li>
            <li>
              Abstract template: <a href="https://docs.google.com/document/d/1LoWSV6uDYA3TxyNGTAFu_gzk65qLBEdL/edit?usp=sharing&amp;ouid=108782734878398070057&amp;rtpof=true&amp;sd=true" target="_blank" rel="noopener noreferrer">Open Template</a>
            </li>
          </ul>
          <div className="cta-buttons-overlay">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdm8NbhrmpQDAEY-M9rmgEPLRqXg3tHdZK6pwoaOQs2gkH-tA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn submit-paper"
            >
              Submit Paper
            </a>
            <a
              href="https://docs.google.com/document/d/1LoWSV6uDYA3TxyNGTAFu_gzk65qLBEdL/edit?usp=sharing&amp;ouid=108782734878398070057&amp;rtpof=true&amp;sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Download Template
            </a>
            <a href="/brochure.pdf" className="btn btn-brochure" download>Download Brochure</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma – Information Technology</h4>
                <h5>MSBTE</h5>
              </div>
              <h3>2018 – 2021</h3>
            </div>
            <p>
              Completed Diploma in Information Technology with 76%, building a strong foundation in programming, networking, and database concepts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. – Artificial Intelligence &amp; Data Science</h4>
                <h5>Bachelor of Engineering</h5>
              </div>
              <h3>2022 – 2025</h3>
            </div>
            <p>
              Pursuing B.E. in AI &amp; Data Science with a CGPA of 8.0/10. Gained hands-on experience in Machine Learning, Python, SQL, and data analytics throughout the program.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analytics Projects</h4>
                <h5>Academic &amp; Freelance</h5>
              </div>
              <h3>2022 – NOW</h3>
            </div>
            <p>
              Executed 5+ structured analytics workflows covering data extraction, transformation, analysis, and BI visualization. Applied SQL on MySQL &amp; PostgreSQL, built Power BI and Excel dashboards, and collaborated using Git for version control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

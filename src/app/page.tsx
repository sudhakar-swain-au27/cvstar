import React from 'react';

const Home: React.FC = () => {
  const experienceYears = 3.7; // Sudhakar Swain's total experience in years

  // Function to calculate years and months from total months
  const getYearsAndMonths = (totalMonths: number) => {
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return { years, months };
  };

  return (
    <div className="container">
      <header>
        <h1>SUDHAKAR SWAIN</h1>
        <p>Email: Seemasudhakar143@gmail.com | Phone No.: +91-9348146253</p>
        <h2>Professional Summary:</h2>
        <p>
          Dedicated Full-stack Developer with {experienceYears} years of experience in the software development industry.
          Proven expertise in all phases of the software development lifecycle, including designing, developing, and
          implementing test plans and processes. Skilled in JavaScript frameworks and libraries such as ES6, React.js,
          jQuery, Jest, and Bootstrap. Strong interpersonal skills with a demonstrated ability to effectively communicate
          with stakeholders at all levels. Possesses excellent work ethics, analytical thinking, and leadership qualities.
          Enthusiastic team player with a self-motivated and goal-oriented approach. Efficient in time and task management,
          capable of independently achieving complex objectives. Solid understanding of Object-Oriented Design (OOP) principles
          and concepts.
        </p>
        <h2>Technical Skills:</h2>
        <ul>
          <li>Languages: JavaScript, TypeScript, HTML5, CSS, Python</li>
          <li>JavaScript Frameworks and Libraries: ES6, React.js, jQuery, Jest, Bootstrap, Express.js, Redux, Axios, GraphQL, MaterialUI, Next.js</li>
          <li>Database Management: MongoDB, MySQL</li>
          <li>AWS Services: Lambda, S3, SQS, DynamoDB, EC2, IAM, CloudWatch</li>
          <li>Testing Frameworks: Cypress, Jasmine JS, Jest</li>
          <li>Version Control: Git, GitLab</li>
          <li>Other Tools and Technologies: Docker, Redis, Firebase, Webpack, Enzyme, Flux</li>
        </ul>
        <h2>Employment History:</h2>
        <p>
          <strong>Associate Software Developer</strong><br />
          Xinthesys LLP, New York<br />
          (April 2020 – Present)<br />
          <strong>Projects:</strong> Adept Web UI, The Scheduler Services<br />
          <strong>Skills Utilized:</strong> JavaScript, React.js, Next.js, TypeScript, EJS, Node.js, MongoDB, CSS, Docker, Redis<br />
          <strong>Operating Systems:</strong> Linux, Windows<br />
          <strong>Database:</strong> MongoDB
        </p>
        <p>
          <strong>Associate Software Engineer</strong><br />
          COMPAD SYSTEMS PVT LTD, Hyderabad<br />
          (Aug 2018 - Jan 2022)<br />
          <strong>Projects:</strong> GMH (Graph my Health), HIMS (Hospital Information Management System)<br />
          <strong>Skills Utilized:</strong> HTML, SCSS, Bootstrap, React.js, TypeScript, JavaScript, Next.js<br />
          <strong>Operating Systems:</strong> Windows 10, Windows 11<br />
          <strong>Development Tools:</strong> Visual Studio Code, WebStorm, IntelliJ
        </p>
        <p>
          <strong>Project Experience:</strong><br />
          <strong>Edelweiss SWIFT</strong><br />
          (May 2021 - Jan 2022)<br />
          <strong>Environment:</strong> Node.js, React.js, JavaScript, SASS, AWS Services, MongoDB, Agile Development, Jira, Git<br />
          <strong>Responsibilities:</strong> MERN stack development for a digital client onboarding platform for Edelweiss partners.<br />
          <strong>Multiple Projects</strong><br />
          <strong>Environment:</strong> React.js, JavaScript, Node.js, SASS, MongoDB, Git<br />
          <strong>Responsibilities:</strong> Full-stack development for various projects including a wedding venue website and an online news website.
        </p>
        <h2>Proposed Roles & Responsibilities:</h2>
        <ul>
          <li>Requirement analysis and client interaction.</li>
          <li>Web application development using React.js.</li>
          <li>Designing intuitive user interfaces.</li>
          <li>Software development emphasizing modularity, scalability, and optimization.</li>
          <li>Performance optimization and bug fixing.</li>
          <li>Defect tracking and resolution.</li>
        </ul>
        <h2>Soft Skills:</h2>
        <ul>
          <li>Excellent communication and presentation abilities.</li>
          <li>Adaptability to new technologies and environments.</li>
          <li>Ownership and responsibility acceptance.</li>
          <li>Quick learner, team player, and self-motivated individual.</li>
        </ul>
        <h2>Education:</h2>
        <p>
          <strong>Bachelor of Science (BSC)</strong> - Graduation from Odisha (19-Feb-2019): 48%<br />
          <strong>Higher Secondary Certificate (CHSE), Odisha</strong> (31-May-2014): 58%<br />
          <strong>High School Certificate (HSC), Odisha</strong> (10th) (28-June-2012): 65%
        </p>
        <h2>Hobbies & Interests:</h2>
        <ul>
          <li>Playing PUBG</li>
          <li>Social work</li>
          <li>Listening to music and internet surfing</li>
        </ul>
        <h2>Declaration:</h2>
        <p>
          I am confident in my knowledge and abilities in the field of Information Technology and am fully committed to contributing
          effectively within a team environment. I declare that the information provided above is true to the best of my knowledge.
        </p>
      </header>
      <footer style={{ 
        textAlign: 'center',
        marginTop: '20px',
      }}>
        <h2>Connect with me</h2>
        <div>
          <a href="https://github.com/yourgithub" target="_blank" style={{ color: '#333', marginRight: '10px' }}>GitHub</a>
          <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" style={{ color: '#333', marginRight: '10px' }}>LinkedIn</a>
          <a href="mailto:Seemasudhakar143@gmail.com" style={{ color: '#333' }}>Email</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
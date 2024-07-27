import React from 'react';

const Resume = () => {
  return (
    <div className="down">
      <h1 style={{fontWeight: 'bold', display: 'flex', justifyContent: 'center', marginBottom: '-7px', color: '#5ae4a8'}}>Rishabh Mittal</h1>		
      <h3 style={{fontWeight: 'bold', display: 'flex', justifyContent: 'center', color: '#F0EDCF'}}>Phone : +91 9811396550 | Email: rishabhmittal2407@gmail.com | New Delhi</h3>
      
      <h3 style={{marginBottom: '2px', marginTop: '-14px', color: '#F0EDCF'}}>Education</h3>
      <hr />
      
      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '-16px', marginBottom: '-26px'}}>
        <h4>VIT Bhopal University</h4>
        <h4>Bhopal, Madhya Pradesh</h4>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '-16px'}}>
        <p>&nbsp;&nbsp;Bachelor of  Technology</p>
        <p style={{paddingRight: '10px'}}>Expected May 2026</p>
      </div>
      <p style={{marginTop: '-10px'}}>&nbsp;&nbsp;&nbsp;Major in Computer Science and Engineering </p>
      <p style={{marginTop: '-10px'}}>&nbsp;&nbsp;&nbsp;Cumulative GPA: 8.78/10</p>
      
      <h4 style={{marginTop: '-7px'}}>12th Standard</h4>
      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '-30px'}}>
        <p>&nbsp;&nbsp;Indraprastha Convent Senior Secondary School</p>
        <p style={{paddingRight: '10px'}}>Rohini, New Delhi</p>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '-26px'}}>
        <p>&nbsp;&nbsp;&nbsp;CBSE Cumulative Percentage: 88%</p>
        <p style={{paddingRight: '10px'}}>Jul 2022</p>
      </div>
      
      <h4 style={{marginTop: '-7px'}}>10th Standard</h4>
      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '-30px'}}>
        <p>&nbsp;&nbsp;Bal Bharati Public School</p>
        <p style={{paddingRight: '10px'}}>Pitampura, New Delhi</p>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '-26px'}}>
        <p>&nbsp;&nbsp;&nbsp;CBSE Cumulative Percentage: 88%</p>
        <p style={{paddingRight: '10px'}}> Jul 2020</p>
      </div>
      
      <h3 style={{marginBottom: '2px', marginTop: '-5px', color: '#F0EDCF'}}>Projects</h3>
      <hr />
      <ul>
        <li style={{marginTop: '-12px'}}><h4>Websites Clone (UltraEdit & Netflix)</h4></li>
        <p style={{marginTop: '-16px'}}>- Designing and Programming the copy of two well known websites to enhance development skills.</p>
        <li style={{marginTop: '-13px'}}><h4>Portfolio Website :</h4></li>
        <p style={{marginTop: '-16px'}}>- Engineered an aesthetically pleasing and intuitive portfolio website,
          &nbsp;&nbsp;showcasing my proficiency in web development and design, with focus on user engagement.</p>
      </ul>
      
      <h3 style={{marginBottom: '2px', marginTop: '-5px', color: '#F0EDCF'}}>Achievements</h3>
      <hr />
      <ul>
        <li>Solved above 100 Data Structure and Algorithm questions on LeetCode.</li>
        <li>Solved questions on GeeksforGeeks and Coding Ninjas.</li>
        <li>Awarded with 50 days of coding badge.</li>
        <li>Currently persuing 100 days of coding challenge.</li>
      </ul>
      
      <h3 style={{marginBottom: '2px', marginTop: '-5px', color: '#F0EDCF'}}>Co-Curricular</h3>
      <hr />
      <ul>
        <li>Actively participated in Bug Bonanza organized by GeeksforGeeks club.</li>
        <li>Actively participated in DSA tussle organized by VIT Bhopal.</li>
        <li>Secured 3rd position in University level painting event.</li>
      </ul>
      
      <h3 style={{marginBottom: '2px', marginTop: '-5px', color: '#F0EDCF'}}>Skills</h3>
      <hr />
      <ul>
        <li>Programming Languages:Python, Java, C++</li>
        <li>Web Development: HTML, CSS, JavaScript</li>
        <li>Problem Solving: LeetCode, GeeksforGeeks, Coding Ninjas</li>
        <li>Data Structures and Algorithms</li>
        <li>Version Control: Git</li>
        <li>Languages:Fluent in Hindi, English</li>
      </ul>
      <hr />
    </div>
  );
};

export default Resume;
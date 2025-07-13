import ProjectCard from './ProjectCard';
import '../styles/projects.css';

const projects = [
  {
    id: 1,
    title: 'Employess PayRoll Management System',
    description: 'The system features employee data management, salary calculation based on attendance and tax rules, automatic payslip generation, role-based access control, and a secure login system. It ensures accuracy, reduces manual work, and improves payroll transparency.',
    technologies: ['C#', '.Net Framework', 'Winform','MS Sql Server', 'ADO.Net'],
    image: '/assets/images/projects/project1.jpg',
  },
  {
    id: 2,
    title: 'Fast Food Point Of Sale',
    description: 'The application streamlined order processing, billing, and inventory management. Key features included real-time order tracking, dynamic menu management, ledger book, and secure cashier/admin login. Designed to improve service speed and reduce human error at the point of sale.',
    technologies: ['C#', '.Net Framework', 'Winform','MS Sql Server', 'ADO.Net'],
    image: '/assets/images/projects/project2.jpg',
  },
  {
    id: 3,
    title: 'Fitness Club Management System',
    description: 'This project streamlines operations for gym and fitness center management, including member registration, subscription plans, attendance tracking, trainer schedules, and payment processing. Key features include user-friendly interfaces, data validation, and secure login for administrators and users.',
    technologies: ['Python', 'Tkinter','MySQL', 'PyPDF2'],
    image: '/assets/images/projects/project3.jpg',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className='message-body'>
        <h3>New Projects Coming Soon.....</h3>
      </div>
    </div>
  );
};

export default Projects;
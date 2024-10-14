import styles from './ProjectsStyles.module.css';
import chatwave from '../../assets/chatwave-image.png';
import joboard from '../../assets/joboard-image.png';
import blogster from '../../assets/blogster-image.png';
import medisync from '../../assets/medisync-image.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={chatwave}
          link="https://chatwave-live-chat-app.vercel.app/"
          h3="Chatwave"
          p="Online chatting site"
        />
        <ProjectCard
          src={joboard}
          link="https://joboard-job-portal.vercel.app/"
          h3="Joboard"
          p="Job hunting site"
        />
        <ProjectCard
          src={medisync}
          link="https://medi-sync-nu.vercel.app/"
          h3="MediSync"
          p="Online doctor appointment site"
        />
        <ProjectCard
          src={blogster}
          link="https://blogster-blogging-site.vercel.app/"
          h3="Blogster"
          p="Online blogging site"
        />
      </div>
    </section>
  );
}

export default Projects;

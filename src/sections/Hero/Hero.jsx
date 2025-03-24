import styles from './HeroStyles.module.css';
import pfpLight from '../../assets/ShubhamGuptaPFPLight.png';
import pfpDark from '../../assets/ShubhamGuptaPFPDark.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import instagramLight from '../../assets/instagram-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import leetcodeDark from '../../assets/leetcode-dark.svg';
import leetcodeLight from '../../assets/leetcode-light.svg';
import CV from '../../assets/ShubhamGuptaResume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const leetcodeIcon = theme === 'light' ? leetcodeLight : leetcodeDark;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
  const pfpIcon = theme === 'light' ? pfpLight : pfpDark;
 
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={pfpIcon}
          className={styles.hero}
          alt="Profile picture of Shubham Gupta"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Shubham
          <br />
          Gupta
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a href="https://www.instagram.com/sky.isnotmylimit/" target="_blank">
            <img src={instagramIcon} alt="Instagram icon" />
          </a>
          <a href="https://github.com/skyisnotmylimit" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/shubham-gupta-85b368218/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://www.leetcode.com/u/ShubhamGupta6306/" target="_blank">
            <img src={leetcodeIcon} alt="Leetcode icon" />
          </a>
        </span>
        <p className={styles.description}>
        Passionate about developing modern, full-stack web applications using the MERN stack for commercial businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

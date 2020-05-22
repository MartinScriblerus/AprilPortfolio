import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

const styles={
  
    icon: {
      color: '#aaf0d1',
     
     alignText: 'center'
    },
  
}

const Header = () => (
  <div  className="sidenav">
 
<SocialIcon style={styles.icon} url="https://www.linkedin.com/in/matthew-reilly-91b316142/"/>
<SocialIcon  style={styles.icon} url="https://twitter.com/A00PE"/>
<SocialIcon style={styles.icon} url="https://github.com/MartinScriblerus"/>

    <Link href="/">
      <a>Home</a>
    </Link>

    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/Research">
      <a>Research</a>
    </Link>
    <Link href="/Development">
      <a>Development</a>
    </Link>
    <Link href="/Creative">
      <a>Creative</a>
    </Link>
  </div>
  
);

export default Header;
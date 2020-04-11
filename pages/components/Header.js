import Link from 'next/link';

const linkStyle = {
  fontFamily: 'Helvetica Neue',
  marginRight: 25,
  fontSize: 24,
};

const Header = () => (
  <div  className="sidenav">
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <style jsx>{`
    li {
      list-style: none;
     

    }

    a {
      text-decoration: none;
     
      font-family: 'Helvetica';
    }

    a:hover {
      opacity: 0.6;

    }
  `}</style>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/Research">
      <a style={linkStyle}>Research</a>
    </Link>
    <Link href="/Development">
      <a style={linkStyle}>Development</a>
    </Link>
    <Link href="/Creative">
      <a style={linkStyle}>Creative</a>
    </Link>
    
  </div>
);

export default Header;
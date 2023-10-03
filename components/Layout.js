// fonts


// font settings


// components
import Nav from '../components/Nav';
import Post from '../components/Post';

const Layout = ({children}) => {
  return (
  <div className={`text-gray-800 relative`}>
    <Nav />
    {children}
  </div>
  );
};

export default Layout;

import { NavBar } from './components/NavBar.jsx';
import { Footer } from './components/Footer.jsx';


const MainLayout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;
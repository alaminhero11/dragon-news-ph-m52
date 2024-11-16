import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import LeftNavbar from '../components/layout-component/LeftNavbar';
import RightNavbar from '../components/layout-component/RightNavbar';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div className='w-10/12 mx-auto font-poppins'>
            {/* -----Header----- */}
            <header>
                <Header></Header>
                {/* ---News Section--- */}
                <section>
                    <LatestNews></LatestNews>
                </section>

            </header>
            {/* -----Navbar----- */}
            <nav>
                <section className='py-5'>
                    <Navbar></Navbar>
                </section>
            </nav>
            {/* -----Main----- */}
            <main className='grid md:grid-cols-12 gap-3 pt-7'>
                <aside className='left col-span-3'>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className='col-span-6'> <Outlet></Outlet> </section>
                <aside className='right col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;
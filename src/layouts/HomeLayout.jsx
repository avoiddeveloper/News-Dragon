import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/left-component/LeftNavbar";
import RightNavbar from "../components/left-component/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div className="container mx-auto poppins">

            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
            </header>

            <nav>
                <Navbar></Navbar>
            </nav>

            <main className="pt-5 grid grid-cols-12 gap-3">

                <aside className="col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>

                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;
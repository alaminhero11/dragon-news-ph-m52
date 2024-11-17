import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/layout-component/RightNavbar";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {

    const data = useLoaderData();
    const news = data.data[0];

    return (
        <div className="">
            {/* -----Header----- */}
            <header>
                <Header></Header>
            </header>
            {/* -----Header----- */}
            <main className="w-10/12 mx-auto grid grid-cols-12 gap-5">
                <section className="col-span-9">
                    <h2 className="text-base font-medium mb-3">Dragon News</h2>
                    <div>
                        <div className="border border-solid border-gray-300 rounded-lg mt-6 mb-10">
                            <div className="p-7">
                                <img
                                    className="w-full"
                                    src={news.image_url}
                                    alt="" />
                                <p className="text-base font-normal text-[#706F6F] mt-8">{news.details}</p>
                                <h2 className="text-xl font-bold mb-7">{news.title}</h2>
                                <Link to={`/category/${news?.category_id}`} className="text-[#f36609] text-lg font-semibold btn bg-[#D72050] text-white"> <FaArrowLeft /> All News in this Category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;
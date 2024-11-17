import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
    const { data } = useLoaderData();
    return (
        <div>
            <h2 className="text-base font-medium mb-3">Dragon News Home</h2>
            <div className="mt-6">
                {
                    data.map((singleNews) => <NewsCard key={singleNews._id} newsData={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;
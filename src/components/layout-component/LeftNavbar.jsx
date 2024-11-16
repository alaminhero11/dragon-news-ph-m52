import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    // ------useState------
    const [categories, setCategories] = useState([]);
    // console.log(categories)
    // ------useEffect------
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])

    return (
        <div>
            <h2 className="text-base font-semibold">All Category {categories.length}</h2>
            <div className="flex flex-col gap-3 mt-5">
                {
                    categories.map((category) =>
                        <NavLink
                            to={`/category/${category.category_id}`}
                            className="btn bg-base-100"
                            key={category.category_id}>
                            {category.category_name}
                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;
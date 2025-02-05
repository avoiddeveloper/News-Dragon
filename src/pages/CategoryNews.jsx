import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
    const {data:news} = useLoaderData();
    return (
        <div>
            <h2 className="mb-4">Dragon News Home</h2>

            <div>
                {news.map(i => <NewsCard key={i._id} news={news}></NewsCard>)}
            </div>
        </div>
    );
};

export default CategoryNews;
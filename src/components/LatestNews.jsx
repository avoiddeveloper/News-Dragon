import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-2 p-[16px] bg-gray-300">
            <div className="bg-[#D72050] py-[10px] px-[25px]">
                <p className="font-medium text-[20px] text-white">Latest</p>
            </div>
            <Marquee className="space-x-0" pauseOnHover={true}>
                <div className="flex gap-4 font-semibold text-[18px]">
                    <Link to="/news">Match Highlights: Germany vs Spain — as it happened</Link>
                    <Link to="/news">Match Highlights: Germany vs Spain — as it happened</Link>
                    <Link to="/news">Match Highlights: Germany vs Spain — as it happened</Link>
                </div>
            </Marquee>
        </div>
    );
};

export default LatestNews;
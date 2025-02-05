import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
    return (
        <div className="space-y-4">
            <h3>Find Us On</h3>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item justify-start"><FaFacebook></FaFacebook>Facebook</button>
                <button className="btn join-item justify-start"><FaTwitter></FaTwitter>Twitter</button>
                <button className="btn join-item justify-start"><FaInstagram></FaInstagram>Instagram</button>
            </div>
        </div>
    );
};

export default FindUsOn;
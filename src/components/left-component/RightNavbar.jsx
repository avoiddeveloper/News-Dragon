import AddArea from "../AddArea";
import FindUsOn from "../FindUsOn";
import LoginWith from "../LoginWith";
import Qzone from "../Qzone";

const RightNavbar = () => {
    return (
        <div className="space-y-4">
           <LoginWith></LoginWith>
           <FindUsOn></FindUsOn>
           <Qzone></Qzone>
           <AddArea></AddArea>
        </div>
    );
};

export default RightNavbar;
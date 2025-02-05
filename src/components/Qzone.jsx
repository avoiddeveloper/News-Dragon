import pic1 from '../assets/swimming.png';
import pic2 from '../assets/class.png';
import pic3 from '../assets/playground.png';


const Qzone = () => {
    return (
        <div className='bg-base-300'>
            <h3 className='pt-4 px-4'>Q-Zone</h3>
            <div>
                <div className='flex flex-col items-center '>
                    <img src={pic1} alt="pic1" />
                    <p>Swimming</p>
                </div>

                <div className='flex flex-col items-center '>
                    <img src={pic2} alt="pic2" />
                    <p>Class</p>
                </div>

                <div className='flex flex-col items-center '>
                    <img src={pic3} alt="pic3" />
                    <p>Play Ground</p>
                </div>
            </div>
        </div>
    );
};

export default Qzone;
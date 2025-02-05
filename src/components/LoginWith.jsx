import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginWith = () => {
    return (
        <div className="space-y-4">
            <h3>Login</h3>
            <div className="flex flex-col gap-3 *:bg-base-100">
                <button className="btn"><FaGoogle></FaGoogle> Login With Google</button>
                <button className="btn"><FaGithub></FaGithub> Login With Github</button>
            </div>
        </div>
    );
};

export default LoginWith;
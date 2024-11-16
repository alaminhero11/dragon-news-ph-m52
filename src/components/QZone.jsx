import swimming from "../assets/swimming.png"
import classImg from "../assets/class.png"
import playGround from "../assets/playground.png"
const QZone = () => {
    return (
        <div className="mt-5 bg-slate-200 p-5 rounded-md">
            <h2>Q-Zone</h2>
            <div className="flex flex-col">
                <img src={swimming} alt="" />
                <img src={classImg} alt="" />
                <img src={playGround} alt="" />
            </div>
        </div>
    );
};

export default QZone;
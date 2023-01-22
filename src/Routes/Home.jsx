import { Link } from "react-router-dom";

const Home = () => {
    return (
    <div>
        <h1>canIretire.tech</h1>
        Welcome to canIretire. This app will help you get a snapshot of what your finances 
        will look like when you retire. Keep a few assumptions in mind: this doesn't take 
        the cost of caring for a family into account, and it assumes by default a high 
        savings rate. These features can easily be adjusted either when you fill in the 
        form or after you've gotten your initial results. The results page is where this app 
        really comes in handy: play around with the parameters to get a sense of the impact 
        your decisions today can make on your financial future!

        <Link to="/personal">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-sm p-2 px-4 font-bold transition">Get Started</button>
        </Link>
    </div>
    );
}

export default Home;
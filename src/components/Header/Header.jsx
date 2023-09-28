import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>😎ম্যাজিক দেখবা মামা 😂</h2>
            <p>তহিলে একটু Login a chap diye  Gmail টা দিয়ে Login করো দেখি একটু বাপু </p>
            <div>
            <Link to='/'>Home</Link>
            <Link to ='/login'>Login</Link>
            </div>
        </div>
    );
};

export default Header;
import './Header.css';
import Button from 'react-bootstrap/Button';

function Header() {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        window.location.href = '/';
    }

    return (
    <Button className="Header" onClick={onSubmitHandler}>
        <h1>SpareChair🪑</h1>
    </Button>);
}

export default Header;
import { Link } from 'react-router-dom'


function NavBar(){
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>{'  |  '}
                <Link to='/team'>Meet the team</Link>{'  |  '}
            </nav>
        </header>
    )
}

export default NavBar
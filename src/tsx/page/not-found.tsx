import { Link } from 'react-router-dom';


function NotFound () {
    return(
        <>
            <div className="not-found">
                <h1 style={{fontSize: '3em'}}>THIS PAGE DOES <span className="highlighted-1">NOT</span> EXIST</h1>
                <p>I don't know how or why you got here but oh well</p>
                <p>Here's a button to send you back</p>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <button>HOME</button>
                </Link>
            </div>
        </>
    )
}

export default NotFound;
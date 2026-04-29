import './app-filter.css';

const AppFilter = () => {
    return(
        <div className="btn-group">
            <button className="btn btn-light"
            type = 'button'>
                All employees
            </button>
            <button className="btn btn-outline-light"
            type = 'button'>
                For a pay rise
            </button>
            <button className="btn btn-outline-light"
            type = 'button'>
                Salary over $2,000
            </button>
        </div>
    );
}

export default AppFilter;
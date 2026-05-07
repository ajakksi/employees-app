import './app-info.css';

const AppInfo = ({totalEmployees,increaseEmployees}) =>{
return(
    <div className="app-info">
        <h1>Staff records within the company</h1>
        <h2>Total number of workers: {totalEmployees} </h2>
        <h2>The award will be presented to: {increaseEmployees}</h2>
    </div>
)

}

export default AppInfo;
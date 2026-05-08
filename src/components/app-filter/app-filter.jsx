import './app-filter.css';

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'All employees'},
        {name: 'rise', label: 'For a pay rise'},
        {name: 'salary', label: 'Salary over $2,000'}
    ];

    const buttons = buttonsData.map(({name,label}) =>  {
        const active = props.filter === name;
        const clazz = active ? "btn btn-light" : "btn btn-outline-light" ;
        return(
            <button className={clazz}
                    type = 'button'
                    key = {name}
                   onClick={() => {props.onFilterSelect(name)}}
                    >
                    {label}
            </button>
        )
    })

     

        return(
        <div className="btn-group">
            {buttons}
        </div>
    );

    
    
}

export default AppFilter;
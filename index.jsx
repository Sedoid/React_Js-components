function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

const user = {
    fistName: 'Harper',
    lastName: 'Perez'
}

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);


const name = 'Josh Perez';
const element = <h1> Hello, {name} </h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);


function getGreeting(user){
    if(user){
        return <h1> Hello, {formatName(user)}! </h1>;
    }
    return <h1> Hellp, Stranger.</h1>
}
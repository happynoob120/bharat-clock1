import './components.css';

function Time(){
    let ttime = new Date();
    return (
        
        <center>
            <p>This is the current time: {ttime.toLocaleDateString()} - {ttime.toLocaleTimeString()}</p>
        </center>
    );
}

export default Time;
const React = require('react');

class FeelTheForce extends React.Component {
    constructor(){
        super();
        this.myInput = "Charlotte";
        this.changeHandler = this.changeHandler.bind(this);
    }
    forcingRerenderResetingValue(e) {
        
        this.changeHandler();
        this.myInput =  "";
        setTimeout(() => this.forceUpdate(), 1000);
    }
    changeHandler(e){
        this.myInput =  e.target.value;
        setTimeout(() => this.forceUpdate(), 500);
    }
    render() {
        return (
            <>
            <input 
                type="text" 
                value={this.myInput} 
                onChange={this.changeHandler}
            />
            <h1>{this.myInput}</h1>
            <button onClick={() => this.forcingRerenderResetingValue()}>
                Reset input
            </button>
            </>
        );
    }
}

export default FeelTheForce;
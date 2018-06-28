import { observable, autorun } from 'mobx';

const Scale = observable.object({
    celsius: 0,

    get fahrenheit() {
        return ((9/5)*this.celsius)+32
    }

})

autorun(() => console.log("Coverted %d to %d ", Scale.celsius, Scale.fahrenheit));

export default Scale;

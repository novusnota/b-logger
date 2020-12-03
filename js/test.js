const Test = function() {

    let _this = this;

    String.prototype.repeat = function(num) {
        return new Array(num + 1).join(this);
    };    

    // about 25 * 100 * 1000 chars works fine everythere
    // max for me is starts somethere after 6kk mark
    this.localStorage = (size) => {

        console.log("Starting...");
        localStorage.setItem("bar", "x".repeat(size));
        
        const foo = localStorage.getItem("bar");
        console.log(data === foo ? `${size} - works` : `${size} - fails`);

        localStorage.clear();
    };
};

export Test;

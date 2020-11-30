const Core = function() {
    
    let _this = this;

    this.init = () => {
        
        // add listeners
        browser.tabs.onCreated.addListener(this.onCreate);
    };

    this.onCreate = (tab) => {
        console.log(tab);
    };

    //browser.extension.getBackgroundPage().console.log("It's alive!");
};

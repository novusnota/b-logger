/*

    Yo, just do that:
    1. Remember the day, when this ext was opened
    2. If it's changed, save the file and clean-up
    3. OR Save file always, and now just clean-up

    4. Yoyo

    Send messages to browser actions to handle new data in localStorage
*/


// for saving files
import { saveAs } from "./filesaver.js";

// core of the extension
const Core = function() {
    
    let _this = this;

    this.init = () => {
        
        // listen for a new record in history
        browser.history.onVisited.addListener(this.onVisit);
    };

    this.onVisit = async (item) => {
        
        // return if not a website
        if (
            item.url.toString()
            .match(/^(?!http)/)
        ) {
            return;
        }

        console.log(item);
        this.saveFile(
            "Hi, Mark!",
            "text/plain;charset=utf-8",
            "test-file.txt"
        ); 
    };

    this.saveItem = async (item) => {
        
        localStorage.setItem("b-logger: Todays log", JSON.stringify(item));
    };

    this.getItem = async (item_key) => {
        
        const item = await JSON.parse(localStorage.getItem(item_key));
        
        localStorage.setItem(item_key, "[]");
        
        return item;
    };

    this.saveFile = async (data, type, filename) => {
        
        const blob = new Blob([data], { "type": type });
        saveAs(blob, filename);
    };

};

export { Core };

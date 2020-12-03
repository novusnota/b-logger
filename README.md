# b-logger
Super simple and small browser extension. It logs your search history in the past 24 hours and appends it to a file. Uses a small client-side library to save files: [FileSaver.js](https://github.com/eligrey/FileSaver.js)

Compatible for Firefox and Chrome. Opera's not tested yet.

## What it does

1. Writes all the new history records into localStorage
2  Sends it's data to browser\_action, where it's displayed
3. Press button in it to download a full record from *timestamp1* to *timestamp2* into a file and start recording all over again

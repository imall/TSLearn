/** a, b, c are callback function，
* run doByOrder will log b, c, a
* please modify doByOrder function to let it log
* a, b, c 
*/

const a = callback => {
    setTimeout(() => { callback('a'); }, 500);
};

const b = callback => {
    setTimeout(() => { callback('b'); }, 200);
};

const c = callback => {
    setTimeout(() => { callback('c'); }, 300);
};

// modify this function to log "a" => "b" => "c"
const doByOrder = (callback) => {
    a(callback);
    b(callback);
    c(callback);
};


doByOrder(console.log);



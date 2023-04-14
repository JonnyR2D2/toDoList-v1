
module.exports.getDate = function(){
let today = new Date();
    const curentDay = today.getDay();
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };

    return today.toLocaleDateString('en-US', options);


}

module.exports.getDay = function getDay (){
    const today = new Date();
        let curentDay = today.getDay();
        const options = {
            weekday: 'long',
        };
    
        return today.toLocaleDateString('en-US', options);
    
        
    
    }
    
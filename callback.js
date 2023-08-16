
function asyncTask(cb) {
    setTimeout(() => {
        cb(null, "This is data from server");
    }, 0);
}

function makeApiCall(cb) {
    setTimeout(() => {
        console.log('This is Async task execution');
    },0)
}

makeApiCall(() => {
    makeApiCall(() => {
        asyncTask(() => {
            asyncTask(() => {
                asyncTask(() => {
                    asyncTask(() => {
            
                    })
                })
            })
        })
    })
})
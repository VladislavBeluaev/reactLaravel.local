const starsAttributes = {
    starsCount:5,
    starWrapper:{
        className:['star-ratting'],
        events:{
            onClick:(e)=>{
                let target = e.target;
            }
        }
    },
    starItem:{
        className:['fa','fa-star'],
        selected:false,
    }
};
export {starsAttributes}
import {starsAttributes} from "./constants";

const onClick= (event)=>{
    let target = event.target;
    if(target.tagName!=='SPAN' && target.closest(`.${starsAttributes.starWrapper.className}`)===null) return null;
};
export {onClick}
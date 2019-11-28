import {starsAttributes} from "./constants";

const onClick= (event)=>{
    let target = event.target;
    if(target.tagName==='SPAN' && target.closest(`.${starsAttributes.starWrapper.className}`))
      console.log(target);
};
export {onClick}
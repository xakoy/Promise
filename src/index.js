import _ from 'lodash'
import './style.css'
import avatar from './avatar.gif';

function component(){
    var element = document.createElement("div");

    element.innerHTML = _.join(['Hello', 'webpack'],' ')
    element.classList.add('hello');

    var myAvatar = new Image();
    myAvatar.src = avatar;

    element.appendChild(myAvatar);

    return element;
}

document.body.appendChild(component());
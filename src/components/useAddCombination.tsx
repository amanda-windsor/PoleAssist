import { parse } from "querystring";
import ReactDOM from "react-dom";
import { rootCertificates } from "tls";
import { createRoot } from "react-dom/client";
/*
Algorithm for addCombination:

create combination list with unique ID
get trick1
    add trick1 to combination list
ask if user wants to add another trick
    while input true
        get trick
            add trick to end of combination list
verify list is complete
    if true
        return combination list to routineBuilder
    else 
*/

/*
const trick = <input type="string" name="Add Trick" value="1"></input>


function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Amanda',
    lastName: 'Windsor'
};

const root = ReactDOM.createRoot(
    document.getElementById('root')
);
const element = <h1>Hello</h1>;
root.render(element);
*/
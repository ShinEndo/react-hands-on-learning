// ****************************************
// ** 関数型プログラミング - 高階関数
// ****************************************

'use strict';

const invokeIf = (condition, fnTrue, fnFalse) => 
    condition ? fnTrue() : fnFalse();

const showWelcome = () => console.log("Welcome!!!!!");

const showUnauthorized = () => console.log("Unauthorized!!!!!");

invokeIf(true, showWelcome, showUnauthorized);
invokeIf(false, showWelcome, showUnauthorized);

// カリー化（currying）

const getFakeMembers = count =>
    new Promise((resolves,rejects) => {
        const api = `https://randomuser.me/?nat=US&results=${count}`;
        const request = new XWLHttpRequest();
        request.open("GET", api);
        request.onload = () => 
            request.status === 200
                ? resolves(JSON.parse(request.response).results)
                : rejects(Error(request.statusText));
        request.onerror = error => rejects(err);
        request.send();
    });


const userLogs = userName => message =>
    console.log(`${userName} => ${message}`);

const log = userLogs("grandpa23");

log("attempted to load fake members");
getFakeMembers(20).then(
    members => log(`successfully loaded ${members.length} members`) 
).catch(
    error => log("encounted an error loading members")
);
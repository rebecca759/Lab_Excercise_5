
/*  
Here is the exercise on working on the remaining bom method 
Location , Navigator , screen , Window 
Follow the Instruction on the comments 
1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 
Adding Extra is Possible if you want to explore more ...
Good Luck !!! 
*/


// Define UI Variables  here 
// Get all elements with span tag as a list
const result = document.getElementsByTagName('span');  

const reloadIcon = document.querySelector('.fa'); //the reload button at the top right of navigation

// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);

// Display the BOM Information on the innerHTML of the elements

//Location information - Accessing indexes from result list
result[0].innerHTML = window.location.href;

result[1].innerHTML = window.location.protocol;

result[2].innerHTML = window.location.host;

result[3].innerHTML = window.location.port;

result[4].innerHTML = window.location.hostname;

//Browser information
result[5].innerHTML = window.navigator.appName;

result[6].innerHTML = window.navigator.appVersion;

result[7].innerHTML = window.navigator.platform;

result[8].innerHTML = window.navigator.language;

result[9].innerHTML = window.navigator.cookieEnabled;

//Screen Information
result[10].innerHTML = window.screen.height;

result[11].innerHTML = window.screen.width;

result[12].innerHTML = window.screen.pixelDepth;

//Browsing History Information
result[13].innerHTML = window.history.length;

result[14].innerHTML = window.history.state;


// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}

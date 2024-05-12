// if, nested-if, nested if elseif, switch

/* below code for if else statement */
function checkAge(checkAge) {
    if(checkAge >= 18) {
        console.log("eligible for voting");
    } else {
        console.log("not eligible for voting");
    }}

checkAge(18);
checkAge(17);

/* below code for if elseif statement */
function testIFs(number) {
    if(number > 0) {
        console.log("positive number");
    } else if(number < 0) {
        console.log("negative number");
    } else {
        console.log("zero");
    }
}

testIFs(91);
testIFs(0);
testIFs(-91);

/* below code for if elseif statement and to understand how switch statement solves it drawbacks */

function testBrowserUsingIFElse(browserSelected) {
    if(browserSelected == "firefox") {
        console.log("browser selected is firefox");
    } else if(browserSelected == "edge") {
        console.log("browser selected is edge");
    } else if(browserSelected == "opera") {
        console.log("browser selected is opera");
    }else if(browserSelected == "chrome") {
        console.log("browser selected is chrome");
    } else {
        console.log("browser selected is unknown");
    }
}

testBrowserUsingIFElse("chrome")

//in above scenario if we are giving browserSelected value as 'chrome' then it will go through each of conditions for firefox, edge, opera before chrome
//this is an inefficient way when there are many choices, switch solves this problem by direclty going to the specific case
//in switch statement like loops we can use the break statement to come out once we find a match, but in conditonal statements we can't use break

/* below code for switch statement */
function testBrowserUsingSwitch(browser) {
    switch(browser) {
        case "firefox":
            console.log("browser selected is firefox");
            break;
        case "edge":
            console.log("browser selected is edge");
            break;
        case "opera":
            console.log("browser selected is opera");
            break;
        case "chrome":
            console.log("browser selected is chrome");
            break;
        default:
            console.log("browser selected is unknown");
            break;
    }
}

testBrowserUsingSwitch("safari");
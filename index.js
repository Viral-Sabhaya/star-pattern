document.write("Print Star Pattern");
document.write("<br>")
document.write("<hr>")

// code for  
// * 
// **
// ***
// ****

let str = "";
let a = 4;

for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= i; j++) {
        str += "*";
    }
    str += "<br>"
}

document.write(str)
document.write("<hr>")


// code for  
// * 
// **
// ***
// ****
// ***
// **
// *

let b = 4;

for (let i = 1; i <= b; i++) {
    for (let j = 1; j <= i; j++) {
        document.write("*")
    }
    document.write("<br>")
}
for (let k = 1; k <= b - 1; k++) {
    for (let m = 3; m >= k; m--) {
        document.write("*")
    }
    document.write("<br>")
}

document.write("<hr>")

// code for  
//    *
//   **
//  ***
// ****

for (let i = 1; i <= 4; i++) {
    for (let j = 3; j >= i; j--) {
        document.write(" &nbsp");
    }
    for (let k = 1; k <= i; k++) {
        document.write("*")
    }
    document.write("<br/>")

}
document.write("<hr>")


// code for
// ****
//  ***
//   **
//    *

for (let i = 1; i <= 4; i++) {
    for (let k = 0; k <= i - 1; k++) { // for (let k = 0; k <= i ; k++)
        document.write(" &nbsp")
    }
    for (let j = 4; j >= i; j--) {
        document.write("*")
    }
    document.write("<br/>")
}

document.write("<hr>")

//  code for  
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *

for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >= i; j--) {
        document.write(" &nbsp");
    }
    for (let k = 1; k <= i; k++) {
        document.write("*")
    }
    document.write("<br/>")
}
for (let i = 1; i <= 4; i++) {
    for (let k = 0; k <= i; k++) {
        document.write(" &nbsp");
    }
    for (let j = 4; j >= i; j--) {
        document.write("*")
    }
    document.write("<br/>")
}
document.write("<hr>")

//  code for  
//     *
//    * *
//   * * *
//  * * * *

// First Method for print pattern
document.write("Using first method to print pattern <br/>")
for (let i = 0; i <= 4; i++) {
    for (let k = 4; k >= i; k--) {
        document.write("&nbsp")
    }
    for (let j = 1; j <= i; j++) {
        document.write(" *")
    }
    document.write("<br/>")
}

// second Method for print pattern
document.write("<br/> Using second method to print pattern <br/>")
for (let i = 1; i <= 4; i++) {
    for (let j = 4; j >= 1; j--) {
        if (j > i) {
            document.write("&nbsp")
        } else {
            document.write(" *")
        }
    }
    document.write("<br/>")
}
document.write("<hr>")

//  code for  
//       *
//     * * *
//   * * * * *
// * * * * * * *

// First Method for print pattern
document.write("Using first method to print pattern <br/><br/>")

for (let i = 1; i <= 4; i++) {
    for (let k = 4; k >= i; k--) {
        document.write(" &nbsp")
    }
    for (let j = 1; j <= i; j++) {
        document.write("*")
    }
    for (let l = 2; l <= i; l++) {
        document.write("*")
    }
    document.write("<br/>")
}

// second Method for print pattern
document.write("<br/>Using second method to print pattern <br/><br/>")

for (let i = 1; i <= 4; i++) {
    for (let j = 4; j >= i; j--) {
        document.write(" &nbsp");
    }
    for (let k = 1; k < (i * 2); k++) {
        document.write("*");
    }
    document.write("<br/>")
}
document.write("<hr>")

 

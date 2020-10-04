window.onload = () => {
    document.getElementById('firstPage').style.display = "block";
    document.getElementById('secondPage').style.display = "none";
    document.getElementById('extraPage').style.display = "none";
    // document.getElementById('thirdPage').style.display = "none";
}
function rotateThis(e) {
    if (document.getElementById("sideCont1").style.height == "120px") {
        document.getElementById("sidebarDad").style.height = "0px";
        document.getElementById("sideCont2").getElementsByTagName("img")[0].style.transform = "rotate(270deg)";
        document.getElementById("sideBar").style.height = "0px";
        document.getElementById("sideCont1").style.height = "0px";
        setTimeout(() => {
            document.getElementById('toHide').style.display = "none";
            document.getElementById("upperHead").style.height = "0px";
            document.getElementById("mainCont").style.opacity = "1";
            document.body.style.overflow = "auto";
        }, 120);
    } else {
        document.getElementById("sidebarDad").style.height = "100%";
        document.getElementById("upperHead").style.height = "8vh";
        document.getElementById('toHide').style.display = "flex";
        setTimeout(() => {
            document.getElementById("sideCont2").getElementsByTagName("img")[0].style.transform = "rotate(90deg)";
            document.getElementById("sideBar").style.height = "120px";
            document.getElementById("sideCont1").style.height = "120px";
            document.getElementById("mainCont").style.opacity = "0.2";
            document.body.style.overflow = "hidden";
        }, 120);

    }
}
function closeThis(event) {
    console.log(event);
    if (event.target.id == "sidebarDad" || event.target.id == "sideCont2") {
        document.getElementById("sidebarDad").style.height = "0px";
        document.getElementById("sideCont2").getElementsByTagName("img")[0].style.transform = "rotate(270deg)";
        document.getElementById("sideBar").style.height = "0px";
        document.getElementById("sideCont1").style.height = "0px";
        setTimeout(() => {
            document.getElementById('toHide').style.display = "none";
            document.getElementById("upperHead").style.height = "0px";
            document.getElementById("mainCont").style.opacity = "1";
            document.body.style.overflow = "auto";
        }, 120);
    }
}
var extrasIdn = 0;
function process1() { //on Back click
    document.getElementById("next").style.display = "flex";
    document.getElementById("submit").style.display = "none";

    if (document.getElementById("secondPage").style.display == "block") {
        if (extrasIdn == 1) { // to show extra page on back
            document.getElementById("secondPage").style.transform = "rotateY(90deg)"
            setTimeout(() => {
                document.getElementById("extraPage").style.transform = "rotateY(0deg)"
                setTimeout(() => {
                    document.getElementById("secondPage").style.display = "none";
                    document.getElementById("extraPage").style.display = "block";
                }, 100);

            }, 200);
        } else {
            document.getElementById("secondPage").style.transform = "rotateY(90deg)"
            setTimeout(() => {
                document.getElementById("firstPage").style.transform = "rotateY(0deg)"
                setTimeout(() => {
                    document.getElementById("secondPage").style.display = "none";
                    document.getElementById("firstPage").style.display = "block";
                }, 100);

            }, 200);
        }
    } else if (document.getElementById("extraPage").style.display != "none") {
        document.getElementById("extraPage").style.transform = "rotateY(90deg)"
        setTimeout(() => {
            document.getElementById("firstPage").style.transform = "rotateY(0deg)"
            setTimeout(() => {
                document.getElementById("extraPage").style.display = "none";
                document.getElementById("firstPage").style.display = "block";
            }, 100);

        }, 200);
    }
    //  else if (document.getElementById("thirdPage").style.display == "block") {

    //     document.getElementById("thirdPage").style.transform = "rotateY(90deg)"
    //     setTimeout(() => {
    //         document.getElementById("secondPage").style.transform = "rotateY(0deg)"
    //         setTimeout(() => {
    //             document.getElementById("thirdPage").style.display = "none";
    //             document.getElementById("secondPage").style.display = "block";
    //         }, 100);

    //     }, 200);
    // }
}
function process2() { // on next click
    if (document.getElementById("firstPage").style.display != "none") {
        if (extrasIdn == 1) {
            console.log(1);
            document.getElementById("firstPage").style.transform = "rotateY(90deg)"
            setTimeout(() => {
                document.getElementById("extraPage").style.transform = "rotateY(0deg)"
                setTimeout(() => {
                    document.getElementById("firstPage").style.display = "none";
                    document.getElementById("extraPage").style.display = "block";
                }, 100);
            }, 200);
        } else {
            console.log(2);

            document.getElementById("next").style.display = "none";
            document.getElementById("submit").style.display = "block";

            document.getElementById("firstPage").style.transform = "rotateY(90deg)"
            setTimeout(() => {
                document.getElementById("secondPage").style.transform = "rotateY(0deg)"
                setTimeout(() => {
                    document.getElementById("firstPage").style.display = "none";
                    document.getElementById("secondPage").style.display = "block";
                }, 100);
            }, 200);
        }

    } else if (document.getElementById("extraPage").style.display != "none") {
        console.log(3);

        document.getElementById("next").style.display = "none";
        document.getElementById("submit").style.display = "block";

        document.getElementById("extraPage").style.transform = "rotateY(90deg)"
        setTimeout(() => {
            document.getElementById("secondPage").style.transform = "rotateY(0deg)"
            setTimeout(() => {
                document.getElementById("extraPage").style.display = "none";
                document.getElementById("secondPage").style.display = "block";
            }, 100);
        }, 200);
    }
    // else if (document.getElementById("secondPage").style.display == "block") {
    //     console.log(4);
    //     document.getElementById("next").style.display = "none";
    //     document.getElementById("submit").style.display = "block";

    //     document.getElementById("secondPage").style.transform = "rotateY(90deg)"
    //     setTimeout(() => {
    //         document.getElementById("thirdPage").style.transform = "rotateY(0deg)"
    //         setTimeout(() => {
    //             document.getElementById("secondPage").style.display = "none";
    //             document.getElementById("thirdPage").style.display = "block";
    //         }, 100);
    //     }, 200);
    // }
}
var permHeight;
function findOut(e) { // no of medicines we gonna take per day
    try { //just removing existing elements
        document.getElementById("info6").remove();
    } catch (error) {
        // console.log(error);
    }

    // var val = document.getElementById(e.id).getElementsByTagName("p")[0].innerHTML;
    // valint = parseInt(val);
    // console.log(val);
    var valint = document.getElementById(e.id).value;
    console.log(valint);

    //making divs
    // <div class="infos1" id="info6">
    var info6 = document.createElement("info6"); // parent div
    info6.setAttribute("id", "info6");
    info6.style.height = permHeight;
    info6.setAttribute("class", "infos1");

    var lab = document.createElement("label");
    lab.setAttribute("class", "labgrp1");
    lab.innerHTML = "What time do you have to take the medicine?";

    info6.appendChild(lab);
    var i = 0;
    while (i < valint) {
        console.log(i, valint);
        //childDiv
        var child = document.createElement("div");
        child.setAttribute('class', 'sec1');
        child.setAttribute("id", `sec6Id${i}`)

        var lab1 = document.createElement("label");
        lab1.setAttribute("class", "labgrp1");
        lab1.innerHTML = "- Add time";

        var smallDiv = document.createElement('div');
        smallDiv.setAttribute("id", `timing${i}`)
        smallDiv.setAttribute("class", `sec1`)

        var p1 = document.createElement("p");
        p1.innerHTML = "Time";

        var divCh = document.createElement("div");
        divCh.setAttribute("id", `realTime${i}`)

        var inp1 = document.createElement("input"); //hours
        inp1.setAttribute("type", "text");
        inp1.setAttribute('min', "0");
        inp1.setAttribute("max", "12");
        inp1.setAttribute("maxlength", '2')
        inp1.setAttribute("name", `${i}hours`)
        divCh.appendChild(inp1);

        var p = document.createElement("p"); //colon
        p.innerHTML = " : ";
        divCh.appendChild(p);

        var inp2 = document.createElement("input"); //minutes
        inp2.setAttribute("type", "text");
        inp2.setAttribute('min', "0");
        inp2.setAttribute("max", "60");
        inp2.setAttribute("maxlength", '2')
        inp2.setAttribute("name", `${i}mins`)
        divCh.appendChild(inp2);

        var fampmPapa = document.createElement("div");
        fampmPapa.id = "fampmPapa";
        var fixedampm = document.createElement("div");
        fixedampm.innerHTML = "AM";
        fixedampm.id = `fixedampm${i}`
        fixedampm.setAttribute("name", `${i}ampm`)

        var ampm = document.createElement('div');//AM-PM
        ampm.id = `ampm${i}`;
        var am = document.createElement("p");
        am.innerHTML = "AM";
        am.id = `parAm${i}`
        var pm = document.createElement("p");
        pm.innerHTML = "PM"
        pm.id = `parPm${i}`
        ampm.appendChild(am);
        ampm.appendChild(pm);
        divCh.appendChild(fixedampm);
        divCh.appendChild(ampm);


        smallDiv.appendChild(p1);
        smallDiv.appendChild(divCh);

        child.appendChild(smallDiv);
        child.appendChild(lab1);
        info6.appendChild(child);
        i++;
    }
    setTimeout(() => {

        if (valint == 1) {
            info6.style.height = "172px";
            permHeight = "172px";
        } else if (valint == 2) {
            info6.style.height = `${172 + (91 * 1)}px`;
            permHeight = `${172 + (91 * 1)}px`;
        } else if (valint = 3) {
            info6.style.height = `${172 + (91 * 2)}px`
            permHeight = `${172 + (91 * 2)}px`;
        }
    }, 0);
    document.getElementById("secondPage").appendChild(info6);

    $("[id^=fixedampm]").click((e) => {
        var id = e.currentTarget.id;
        console.log(id);
        var lastChar = id.charAt(id.length - 1);
        console.log(lastChar);
        document.getElementById(`ampm${lastChar}`).style.display = "block"
        document.getElementById(id).style.display = "none"
    })
    function bothsame(e) {

        var val = e.target.innerHTML;
        var id = e.target.id;
        var lastChar = id.charAt(id.length - 1);
        console.log(val, id);
        document.getElementById(`ampm${lastChar}`).style.display = "none"
        document.getElementById(`fixedampm${lastChar}`).style.display = "block"
        document.getElementById(`fixedampm${lastChar}`).innerHTML = val;
        for (var j = 0; j < 2; j++) {
            document.getElementById(`ampm${lastChar}`).getElementsByTagName("p")[j].style.backgroundColor = "";
        }

        document.getElementById(id).style.backgroundColor = "rgb(240, 235, 248)";
    }
    $("[id^='parAm']").click((e) => {
        bothsame(e)

    })
    $("[id^='parPm']").click((e) => {
        bothsame(e)
    })

}
// function colorIt(e) {
//     console.log(e);
//     var len = e.currentTarget.id.length;
//     var word = e.currentTarget.id.slice(0, len - 1)
//     console.log(word);
//     // console.log($("[id^='inf2span']")); //static
//     // console.log($(`[id^='${word}']`)); //dynamic
//     $(`[id^='${word}']`).empty();
//     if (document.getElementById(e.currentTarget.id).style.borderColor == "rgb(103, 58, 183)") {
//         $(`[id^='${word}']`).css("borderColor", "#a2a2a2");
//     }
//     else {
//         $(`[id^='${word}']`).css("borderColor", "#a2a2a2");
//         document.getElementById(e.currentTarget.id).style.borderColor = "rgb(103, 58, 183)";
//         var h1 = document.createElement("h1");
//         document.getElementById(e.currentTarget.id).appendChild(h1);
//     }

// }

// $(document).ready(() => {
//     $("[id^='inf2span']").click((e) => {
//         colorIt(e);
//     })
//     $("[id^='inf4span']").click((e) => {
//         if (e.currentTarget.id == "inf4span0") {
//             
//             extrasIdn = 0;
//         }
//         else if (e.currentTarget.id == "inf4span1") {
//            
//             extrasIdn = 1;
//         }
//         colorIt(e);
//     })
//     $("[id^='inf5span']").click((e) => {
//         colorIt(e);
//     })
// })

function addThisPage(e) {
    // console.log(e);
    var val = document.getElementById(e.id).value;
    console.log(val);
    if (val == "PM") {

        extrasIdn = 0;
    }
    else if (val == "TM") {

        extrasIdn = 1;
    }
}
function showTimes(e) {

}
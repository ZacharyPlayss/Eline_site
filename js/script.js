const userName = prompt("Wat is uw voornaam ? *hoofdlettergevoelig*");

if(userName === "Eline"){
    document.querySelector("h2").innerHTML="Z";
    document.querySelector("p").innerHTML="Hoe wel het niet vaak voorkomt is deze persoon helemaal gek op jou " + userName;
    document.querySelector("body").style.background ="#e03a3a"
};
if(userName ==="Zachary"){
    document.querySelector("h2").innerHTML="E";
    document.querySelector("p").innerHTML="Hoe wel het niet vaak voorkomt is deze persoon helemaal gek op jou " + userName;
    document.querySelector("body").style.background ="#e03a3a";
}
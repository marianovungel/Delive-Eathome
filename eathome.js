var comida1="";
var comida2="";
var controu1=0;
var controu2=0;


var bebida1="";
var bebida2="";
var controu=0;
var definer=0;


function mudarCorComidafunge() {
    comida1="Funge"
    document.getElementById("fungeId").style.borderWidth="5px"
    document.getElementById("fungeId").style.borderColor="green";
    document.getElementById("deleteFunge").style.display="flex"
    controu++;
    controu1++;
}
function mudarCorComidafungeDeletar() {
    document.getElementById("fungeId").style.borderWidth="2px"
    document.getElementById("fungeId").style.borderColor="red";
    document.getElementById("deleteFunge").style.display="none";
    comida1=""
}


function mudarCorComidacalulu() {
    comida2="Calulu"
    document.getElementById("caluluId").style.borderWidth="5px"
    document.getElementById("caluluId").style.borderColor="green";
    document.getElementById("deleteCalulu").style.display="flex"
    controu++;
    controu2++;
}
function mudarCorComidacaluluDelete() {
    comida2=""
    document.getElementById("caluluId").style.borderWidth="2px"
    document.getElementById("caluluId").style.borderColor="red";
    document.getElementById("deleteCalulu").style.display="none"
}


function mudarCorBebidacuca() {
    bebida1="Cuca"
    document.getElementById("cucaId").style.borderWidth="5px"
    document.getElementById("cucaId").style.borderColor="green";
    document.getElementById("deleteCuca").style.display="flex"
    definer++;
}
function mudarCorBebidacucaDelete() {
    bebida1=""
    document.getElementById("cucaId").style.borderWidth="2px"
    document.getElementById("cucaId").style.borderColor="red";
    document.getElementById("deleteCuca").style.display="none"
}


function mudarCorBebidanutre() {
    bebida2="Nutre"
    document.getElementById("nutreId").style.borderWidth="5px"
    document.getElementById("nutreId").style.borderColor="green";
    document.getElementById("deleteNutre").style.display="flex"
    definer++;
}
function mudarCorBebidanutreDelete() {
    bebida2=""
    document.getElementById("nutreId").style.borderWidth="2px"
    document.getElementById("nutreId").style.borderColor="red";
    document.getElementById("deleteNutre").style.display="none"
}

function enviar() {

    var variavel1=document.getElementById("inputFunge");
    var quantFunge = variavel1.value;

    var variavel2=document.getElementById("inputCalulu");
    var quantCalulu = variavel2.value;

    var variavel3=document.getElementById("inputCuca");
    var quantCuca = variavel3.value;

    var variavel4=document.getElementById("inputNutre");
    var quantNutre = variavel4.value;


    if(controu===0 && definer>0){
        alert("Selecione uma Comida no Cardápio!")
    }
    if(definer===0 && controu>0){
        alert("Selecione uma Bebida no Cardápio!")
    }
    if(controu===0  && definer===0){
        alert("Selecione uma Bebida e uma bebida no Cardápio!")
    }
    if(controu>0  && definer>0){
        window.open(`http://wa.me/+5585991392625?text=Gostaria de pedir
          ${quantFunge} prato de ${comida1} ${quantCalulu} ${comida2}
           ${quantCuca} ${bebida1}  ${quantNutre} ${bebida2}`)
    }
    
}
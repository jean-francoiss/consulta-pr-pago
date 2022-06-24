

var headers = new Headers([
    ['Content-Type',
     'application/json']
])

function alterTextTd(saldo){
    document.getElementById('tcontratos')
    .getElementsByTagName('tbody')[0]
    .getElementsByTagName('tr')[0]
    .getElementsByTagName('td')[2].innerText = 'R$'+saldo
}


function getContractId(){
    return document.getElementById('tcontratos')
    .getElementsByTagName('tbody')[0]
    .getElementsByTagName('tr')[0]
    .getElementsByTagName('td')[0].innerText
}

function requestDebt(element){
    fetch("https://areacliente.neotelecom.com.br/api/ConsultaSaldo", {
        "method": "POST", 
        "headers": headers, 
        "body": JSON.stringify({contrato: getContractId()})
    })
    .then(response=>response.json())
    .then(function(success){
        if (success.saldo) {
            alterTextTd(success.saldo)
        }
    })
}

requestDebt();


const td = document.createElement("td");
const node = document.createTextNode("");
td.appendChild(node);

const element = document.getElementById("tcontratos") 
    .getElementsByTagName('tbody')[0]
    .getElementsByTagName('tr')[0].appendChild(td);
    

    document.getElementById('tcontratos')
    .getElementsByTagName('tbody')[0]
    .getElementsByTagName('tr')[0]
    .getElementsByTagName('td')[3].classList.add("my-class");

    document.getElementsByClassName("my-class")[0].id="my-id";



const btn = document.createElement("button");
const node2 = document.createTextNode("REFRESH");
    btn.appendChild(node2);
    
const element2 = document.getElementById("my-id");
    element2.appendChild(btn);
    


const b = document.querySelector("button");

    b.setAttribute("type", "button");
    b.setAttribute("onclick", "console.log(requestDebt())");


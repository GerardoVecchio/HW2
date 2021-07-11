document.addEventListener('DOMContentLoaded',function(){
    fetch('scambi/allplayer').then(onResponse).then(tab2);
    fetch('scambi/yourplayer').then(onResponse).then(tab1);
   
},false);

function onResponse(response){
    return response.json();
}

function tab2(json){
    let form=document.getElementById('form-sc');
    let table=document.createElement('table');
    table.className='table';
    table.id='table';

    let riga= document.createElement('tr');

    let id = document.createElement('th');
    id.innerText='Identificativo';
    riga.appendChild(id);

    let nome1 = document.createElement('th');
    nome1.innerText='Nome';
    riga.appendChild(nome1);

    let cognome1 = document.createElement('th');
    cognome1.innerText='Cognome';
    riga.appendChild(cognome1);

    let allenatore = document.createElement('th');
    allenatore.innerText='Allenatore';
    riga.appendChild(allenatore);
    table.appendChild(riga);

    for(let i=0;i<json.length;i++){
        let tr=document.createElement('tr');

        let tdn1=document.createElement('td');
        tdn1.innerText = json[i].ssn;
        tr.appendChild(tdn1);

        let tdc1=document.createElement('td');
        tdc1.innerText = json[i].nome;
        tr.appendChild(tdc1);

        let tdn=document.createElement('td');
        tdn.innerText = json[i].cognome;
        tr.appendChild(tdn);

        let tdc=document.createElement('td');
        tdc.innerText = json[i].allenatore;
        tr.appendChild(tdc);

        table.appendChild(tr);
    }

    form.appendChild(table);
}

function tab1(json){
    console.log(json);
    let form=document.getElementById('form-sc2');
    let table=document.createElement('table');
    table.className='table';
    table.id='table';

    let riga= document.createElement('tr');

    let id = document.createElement('th');
    id.innerText='Identificativo';
    riga.appendChild(id);

    let nome1 = document.createElement('th');
    nome1.innerText='Nome';
    riga.appendChild(nome1);

    let cognome1 = document.createElement('th');
    cognome1.innerText='Cognome';
    riga.appendChild(cognome1);

    table.appendChild(riga);
    for(let i=0;i<json.length;i++){
        let tr=document.createElement('tr');

        let tdn1=document.createElement('td');
        tdn1.innerText = json[i].ssn;
        tr.appendChild(tdn1);

        let tdc1=document.createElement('td');
        tdc1.innerText = json[i].nome;
        tr.appendChild(tdc1);

        let tdn=document.createElement('td');
        tdn.innerText = json[i].cognome;
        tr.appendChild(tdn);

        table.appendChild(tr);
    }

    form.appendChild(table);

}
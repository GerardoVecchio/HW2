document.addEventListener('DOMContentLoaded',function(){
    fetch('profile/scambiProposti').then(onResponse).then(tabScambiProp);
    fetch('profile/scambiCheTiHannoProposto').then(onResponse).then(tabScam2);

   
},false);

function onResponse(response){
    return response.json();
}

function tabScambiProp(json){

    let form=document.getElementById('form-sc');
    let table=document.createElement('table');
    table.className='table';
    table.id='table';

    let riga= document.createElement('tr');

    let nome1 = document.createElement('th');
    nome1.innerText='Nome';
    riga.appendChild(nome1);

    let cognome1 = document.createElement('th');
    cognome1.innerText='Cognome';
    riga.appendChild(cognome1);

    let nome = document.createElement('th');
    nome.innerText='Nome';
    riga.appendChild(nome);

    let cognome = document.createElement('th');
    cognome.innerText='Cognome';
    riga.appendChild(cognome);

    let squadra = document.createElement('th');
    squadra.innerText='Squadra';
    riga.appendChild(squadra);

    let allenatore = document.createElement('th');
    allenatore.innerText='Allenatore';
    riga.appendChild(allenatore);
    table.appendChild(riga);

    for(let i=0;i<json.length;i++){

        let tr=document.createElement('tr');

        let tdn1=document.createElement('td');
        tdn1.innerText = json[i].nome1;
        tr.appendChild(tdn1);

        let tdc1=document.createElement('td');
        tdc1.innerText = json[i].cognome1;
        tr.appendChild(tdc1);

        let tdn=document.createElement('td');
        tdn.innerText = json[i].nome;
        tr.appendChild(tdn);

        let tdc=document.createElement('td');
        tdc.innerText = json[i].cognome;
        tr.appendChild(tdc);

        let sq=document.createElement('td');
        sq.innerText=json[i].squadraN;
        tr.appendChild(sq);

        let all=document.createElement('td');
        all.innerText=json[i].allenatore;
        tr.appendChild(all);

        table.appendChild(tr);
    }

    form.appendChild(table);
}

function tabScam2(json){
    console.log(json);

    let form=document.getElementById('form-sc2');
    let table=document.createElement('table');
    table.className='table';
    table.id='table';

    let riga= document.createElement('tr');

    let nome = document.createElement('th');
    nome.innerText='Nome';
    riga.appendChild(nome);

    let cognome = document.createElement('th');
    cognome.innerText='Cognome';
    riga.appendChild(cognome);

    let squadra = document.createElement('th');
    squadra.innerText='Squadra';
    riga.appendChild(squadra);

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


    for(let i =0;i<json.length;i++){
        
        let tr=document.createElement('tr');

        let tdn1=document.createElement('td');
        tdn1.innerText = json[i].nome1;
        tr.appendChild(tdn1);

        let tdc1=document.createElement('td');
        tdc1.innerText = json[i].cognome1;
        tr.appendChild(tdc1);

        let sq=document.createElement('td');
        sq.innerText=json[i].squadraN;
        tr.appendChild(sq);

        let tdn=document.createElement('td');
        tdn.innerText = json[i].nome;
        tr.appendChild(tdn);

        let tdc=document.createElement('td');
        tdc.innerText = json[i].cognome;
        tr.appendChild(tdc);

        let all=document.createElement('td');
        all.innerText=json[i].allenatore;
        tr.appendChild(all);

        let box=document.createElement('td');
        tr.appendChild(box);
        
        let forma=document.createElement('form');
        forma.method='post';
        forma.action='profile/accetta';

        let hdntoken1=document.createElement('input');
        hdntoken1.type='hidden';
        hdntoken1.name='_token';
        hdntoken1.value=document.getElementById('tkn').content;
        forma.appendChild(hdntoken1);

        let chiave1 = document.createElement('input');
        chiave1.id =i;
        chiave1.name ="chiave";
        chiave1.value=json[i].keyG;
        chiave1.type='hidden';
        forma.appendChild(chiave1);

        let accetta = document.createElement('input');
        accetta.name='accetta';
        accetta.id=i;
        accetta.value="Accetta";
        accetta.type="submit";
        forma.appendChild(accetta);
        box.appendChild(forma);
        
        let formr=document.createElement('form');
        formr.method='post';
        formr.action='profile/rifiuta';
        let hdntoken2=document.createElement('input');
        hdntoken2.type='hidden';
        hdntoken2.name='_token';
        hdntoken2.value=document.getElementById('tkn').content;
        formr.appendChild(hdntoken2);
        let chiave2 = document.createElement('input');
        chiave2.id =i;
        chiave2.name ="chiave";
        chiave2.value=json[i].keyG;
        chiave2.type='hidden';
        formr.appendChild(chiave2);

        let rifiuta = document.createElement('input');
        rifiuta.name='rifiuta';
        rifiuta.id=i;
        rifiuta.value="Rifiuta";
        rifiuta.type="submit";
        formr.appendChild(rifiuta);
        box.appendChild(formr);
        
        table.appendChild(tr);
    }

    form.appendChild(table);
}
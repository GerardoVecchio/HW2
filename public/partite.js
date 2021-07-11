document.addEventListener('DOMContentLoaded',function(){
   fetch('partite/all').then(onResponse).then(tabSquad);  
   fetch('partite/richiestePartite').then(onResponse).then(tabRic);
},false);

function onResponse(response){
    return response.json();
}

function tabSquad(json){

    let form=document.getElementById('form-sc');
    let table=document.createElement('table');
    table.className='table';
    table.id='table';

    let riga= document.createElement('tr');

    let all = document.createElement('th');
    all.innerText='Allenatore';
    riga.appendChild(all);

    let sq = document.createElement('th');
    sq.innerText='Squadra';
    riga.appendChild(sq);

    table.appendChild(riga);

    for(let i=0;i<json.length;i++){
        let tr=document.createElement('tr');

        let tdn1=document.createElement('td');
        tdn1.innerText = json[i].allenatore;
        tr.appendChild(tdn1);

        let tdn=document.createElement('td');
        tdn.innerText = json[i].nome;
        tr.appendChild(tdn);

        table.appendChild(tr);
    }

    form.appendChild(table);
}

function tabRic(json){
    console.log(json);

    let formsc2=document.getElementById('form-sc2');

    let table=document.createElement('table');
    table.className='table';
    table.id='table';

    let riga= document.createElement('tr');

    let sq = document.createElement('th');
    sq.innerText='Squadra';
    riga.appendChild(sq);

    let nome = document.createElement('th');
    nome.innerText='Allenatore';
    riga.appendChild(nome);

    table.appendChild(riga);
    for(let i =0;i<json.length;i++){
        let tr=document.createElement('tr');

        let tdn1=document.createElement('td');
        tdn1.innerText = json[i].sq1;
        tr.appendChild(tdn1);

        let all=document.createElement('td');
        all.innerText=json[i].allenatore;
        tr.appendChild(all);

        let box=document.createElement('td');
        tr.appendChild(box);

        let forma= document.createElement('form');
        forma.method='post';
        forma.action='partite/accetta';

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

        
        let formr= document.createElement('form');
        formr.method='post';
        formr.action='partite/rifiuta';

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
    formsc2.append(table);
}
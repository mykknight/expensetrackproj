var btn = document.getElementById('submit');

btn.addEventListener('click',addvalue);

function addvalue(e){
    e.preventDefault();
    
    var expense = document.getElementById('number').value;
    var des = document.getElementById('text').value;
    var opt = document.getElementById('option').value;

    //console.log(expense+des+opt);
    
    var ui = document.getElementById('details');

    var li = document.createElement('li');

    li.appendChild(document.createTextNode(expense+" - "+des+" - "+opt+" "));

    var dlt = document.createElement('input');
    dlt.type = 'button';
    dlt.value = 'Dlt Exp';
    dlt.style.backgroundColor = 'red';
    li.appendChild(dlt);

    dlt.addEventListener('click',dltexp);
    function dltexp(e){
        e.preventDefault();
        li.remove();
    }

    var edt = document.createElement('input');
    edt.type='button';
    edt.value = 'Edit Exp';
    edt.style.backgroundColor = 'green';

    li.appendChild(edt);

    edt.addEventListener('click',editdts);

    function editdts(e){
        e.preventDefault();

        expense.value=expense;
        des.value=des;
        opt.value=opt;
        li.remove();
    }

    ui.append(li);
}
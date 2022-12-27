var btn = document.getElementById('submit');
var p=false;
var w;
btn.addEventListener('click',addvalue);


axios.get('https://crudcrud.com/api/f221db3395264605b24bf7553e1847e4/expense')
.then((response) => {
    console.log(response);
    for(var i=0; i<response.data.length; i++){
        prtdata(response.data[i]);
    }
})
.catch((err) => {
    console.log(err);
});


function addvalue(e){
    e.preventDefault();
    var expense = document.getElementById('number').value;
    var des = document.getElementById('text').value;
    var opt = document.getElementById('option').value;
    
    var myobj = {
        expense: expense,
        description: des,
        option: opt
    };
    if(myobj.expense=='' || myobj.description=='') alert("Please enter the details");
    else{
        prtdata(myobj);
        if(p) {
        axios.put(`https://crudcrud.com/api/f221db3395264605b24bf7553e1847e4/expense/${w}`,myobj)
        .then((response) => {
            console.log(response);
            p=false;
        })
        .catch((err) => {
            console.log(err);
        });
        }
        else {
        axios.post('https://crudcrud.com/api/f221db3395264605b24bf7553e1847e4/expense', myobj)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    }
}

function prtdata(myobj){

    var ui = document.getElementById('details');

    var li = document.createElement('li');

    li.appendChild(document.createTextNode(myobj.expense+" - "+myobj.description+" - "+myobj.option+" "));

    var dlt = document.createElement('input');
    dlt.type = 'button';
    dlt.value = 'Dlt Exp';
    dlt.style.backgroundColor = 'red';
    li.appendChild(dlt);

    dlt.addEventListener('click',dltexp);

    var edt = document.createElement('input');
    edt.type='button';
    edt.value = 'Edit Exp';
    edt.style.backgroundColor = 'green';

    li.appendChild(edt);

    edt.addEventListener('click',editdts);

    function dltexp(e){
        console.log(myobj._id);
        axios.delete(`https://crudcrud.com/api/f221db3395264605b24bf7553e1847e4/expense/${myobj._id}`);
        li.remove();
    }
    
    function editdts(e){
        e.preventDefault();
    
        document.getElementById('number').value = myobj.expense;
        document.getElementById('text').value = myobj.description;
        document.getElementById('option').value = myobj.option;
        p=true;
        w=myobj._id;
        
        li.remove();
    }

    ui.append(li);
}


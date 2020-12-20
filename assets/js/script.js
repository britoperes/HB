let inputNome = document.getElementById('inputNome');
let inputEmail = document.getElementById('inputEmail');
let inputProcedimento = document.getElementById('inputProcedimento');
let btnForm = document.getElementById('btnform');

const test = ()=>{
    if(inputNome.value===''&&inputEmail.value===''&&inputProcedimento.value==='Selecione um procedimento')
    {return}
    else{
        console.log(inputNome.value);
        console.log(inputEmail.value);
        console.log(inputProcedimento.value);
    }
    
}

$('.nav a').on('click', function(){
    $('.navbar-toggler').click(); //bootstrap 4.x
});


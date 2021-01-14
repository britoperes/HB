const msgDireitos = document.getElementById('rodape')

let anoAtual = new Date();

let msgAtualizada = `HB Clinica Estética ${anoAtual.getFullYear()}. Todos os direitos reservados. CNPJ 39.910.077/0001-34`;

msgDireitos.textContent = msgAtualizada;
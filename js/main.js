    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');


    $('form').validate({
        rules: {
            nome:{
                required: true
            },
            email:{
                required: true, email: true
            },
            telefone:{
                required: true
            },
            cpf:{
                required: true
            },
            cep:{
                required: true
            }
        },
        messages: {
            nome: 'por favor, insira seu nome.',
            email: 'por favor, insira seu email.',
            telefone: 'por favor, insira seu número de telefone.',
            cpf: 'por favor, insira seu CPF.',
            cep: 'por favor, insira seu CEP.',
        },
        submitHandler: function(form){
            console.log(form);
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
})
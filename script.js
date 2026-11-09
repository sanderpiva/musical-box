const seletor = document.getElementById('box');

seletor.addEventListener('change', function() {
    const valorSelecionado = this.value;

    switch (valorSelecionado) {
        case '1':
            window.open('https://youtu.be/Dr1pZHPExlE?list=RDDr1pZHPExlE', '_blank');
            break;   
        case '2':
            window.open('https://youtu.be/sYqDUSP1gOI?list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbAVMsYqDUSP1gOI', '_blank');    
            break;
        case '3':
            window.open('https://youtu.be/h61gZ9F9i9E?list=RDh61gZ9F9i9E', '_blank');    
            break;  
        case '4':
            window.open('https://youtu.be/Uw5OLnN7UvM?list=RDMMUw5OLnN7UvM', '_blank');
            break;
        case '5':
            window.open('https://youtu.be/fV-A0-VTx6A', '_blank');
            break;  
        case '6':   
            window.open('https://youtu.be/NFkAJ0HOWkM', '_blank');
            break;
        case '7':
            window.open('https://youtu.be/AEHPMX7u6Kk?list=RDGMEMP-96bLtob-xyvCobnxVfywVMAEHPMX7u6Kk', '_blank');
            break;  
        case '8':   
            window.open('https://youtu.be/BRx58DgOxeg?list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbAVMBRx58DgOxeg', '_blank');
            break;  
        case '9':
            window.open('https://youtu.be/Ak_QoFYHmkM?list=RDAk_QoFYHmkM', '_blank');
            break;  
        case '10':   
            window.open('https://youtu.be/-K0YwpHDN28?list=RD-K0YwpHDN28', '_blank');
            break;  
        default:
            // Ignora se o usuário selecionar a opção 0 ("Selecione sua música")
            break;
    }

    // Reseta o select para a opção padrão após abrir, permitindo clicar na mesma música novamente se quiser
    this.value = "0";
});
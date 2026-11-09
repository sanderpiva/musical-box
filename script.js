const box0 = document.getElementById('box-option[0]');
const box1 = document.getElementById('box-option[1]');
const box2 = document.getElementById('box-option[2]');
const box3 = document.getElementById('box-option[3]');
const box4 = document.getElementById('box-option[4]');
const box5 = document.getElementById('box-option[5]');
const box6 = document.getElementById('box-option[6]');
const box7 = document.getElementById('box-option[7]');
const box8 = document.getElementById('box-option[8]');
const box9 = document.getElementById('box-option[9]');
const box10 = document.getElementById('box-option[10]');

box1.addEventListener('click', fbox);
box2.addEventListener('click', fbox);
box3.addEventListener('click', fbox);
box4.addEventListener('click', fbox);
box5.addEventListener('click', fbox);
box6.addEventListener('click', fbox);
box7.addEventListener('click', fbox);
box8.addEventListener('click', fbox);
box9.addEventListener('click', fbox);
box10.addEventListener('click', fbox);

function fbox() {
    switch (this.id) {
        case 'box-option[1]':
            window.open('https://youtu.be/Dr1pZHPExlE?list=RDDr1pZHPExlE', '_blank');
            break;   
        case 'box-option[2]':
            window.open('https://youtu.be/sYqDUSP1gOI?list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbAVMsYqDUSP1gOI', '_blank');    
            break;
        case 'box-option[3]':
            window.open('https://youtu.be/h61gZ9F9i9E?list=RDh61gZ9F9i9E', '_blank');    
            break;  
        case 'box-option[4]':
            window.open('https://youtu.be/Uw5OLnN7UvM?list=RDMMUw5OLnN7UvM', '_blank');
            break;
        case 'box-option[5]':
            window.open('https://youtu.be/fV-A0-VTx6A', '_blank');
            break;  
        case 'box-option[6]':   
            window.open('https://youtu.be/NFkAJ0HOWkM', '_blank');
            break;
        case 'box-option[7]':
            window.open('https://youtu.be/AEHPMX7u6Kk?list=RDGMEMP-96bLtob-xyvCobnxVfywVMAEHPMX7u6Kk', '_blank');
            break;  
        case 'box-option[8]':   
            window.open('https://youtu.be/BRx58DgOxeg?list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbAVMBRx58DgOxeg', '_blank');
            break;  
        case 'box-option[9]':
            window.open('https://youtu.be/Ak_QoFYHmkM?list=RDAk_QoFYHmkM', '_blank');
            break;  
        case 'box-option[10]':   
            window.open('https://youtu.be/-K0YwpHDN28?list=RD-K0YwpHDN28', '_blank');
            break;  
        default:
            alert('Erro do sistema!');
            break;
    }
}
let output = document.querySelector('.output');
const btn = document.querySelector('button');
output.innerHTML = '';

btn.addEventListener('click', () =>{
    
    for (let i = 10; i>=0;i--){       
        const para = document.createElement('p');
        console.log(i);   
        if(i === 10){
            para.textContent = 'Countdown' + i;
        }  else if(i === 0){
            para.textContent = 'Blastoff';
        } else{
            para.textContent = i;
        }
        output.appendChild(para);
    }
});
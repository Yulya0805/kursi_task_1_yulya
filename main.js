const names = ['vasa', 'pitya', 'anya', 'vera', 'alex', 'an', 'den', 'jon'];

let blockUsers = document.querySelector('#block-users');

let html = '';

for(const name of names) {
   
   html += `<li onclick="alert('вы нажали на имя: ${name}')">${name}</li>`;

}

blockUsers.innerHTML = html;






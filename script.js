const menuButton=document.querySelector('.hamburger');
const nav=document.querySelector('.navlinks');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('show');menuButton.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('show');menuButton.setAttribute('aria-expanded','false')}));}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
document.querySelectorAll('.faq-question').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.closest('.faq-item');const open=item.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));const mark=btn.querySelector('span');if(mark)mark.textContent=open?'−':'+';}));
const form=document.querySelector('#reachForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const name=data.get('name')||'there';const status=document.querySelector('#formStatus');if(status){status.textContent=`Thanks, ${name}! Your enquiry has been noted in this browser demo. The Reach form must be connected to an email or CRM before it can deliver enquiries.`;status.classList.add('status-visible');}form.reset();});}

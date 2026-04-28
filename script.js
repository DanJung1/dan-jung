function show(id,btn){
  if(btn.classList.contains('active')) return;
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  btn.classList.add('active');
}

document.addEventListener('DOMContentLoaded', ()=>{
  requestAnimationFrame(()=>document.body.classList.add('loaded'));
});
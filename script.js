document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});}}));
  const form=document.getElementById('contactForm');
  form?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const msg=`مرحباً إسلام، أريد التواصل بخصوص مشروع.\nالاسم: ${d.get('name')}\nالهاتف: ${d.get('phone')}\nالبريد: ${d.get('email')||'غير مذكور'}\nالخدمة: ${d.get('service')||'غير محددة'}\nالرسالة: ${d.get('message')}`;window.open(`https://wa.me/201553732249?text=${encodeURIComponent(msg)}`,'_blank','noopener');});
  const newsletter=document.getElementById('newsletter');
  newsletter?.addEventListener('submit',e=>{e.preventDefault();const email=new FormData(newsletter).get('email');window.location.href=`mailto:islamshawky@gmail.com?subject=اشتراك في النشرة&body=البريد: ${encodeURIComponent(email)}`;});
});

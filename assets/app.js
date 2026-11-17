(()=>{'use strict';
const body=document.body,menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));}
// Back-to-top control is shared by every page.
const backTop=document.querySelector('.back-to-top');if(backTop){const syncBackTop=()=>backTop.classList.toggle('visible',window.scrollY>420);window.addEventListener('scroll',syncBackTop,{passive:true});syncBackTop();backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));}
const active=body.dataset.page;document.querySelectorAll('.main-nav a[data-page]').forEach(a=>{if(a.dataset.page===active)a.classList.add('active')});
const theme=document.getElementById('themeToggle');
const sunIcon='<svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"></path></svg>';
const moonIcon='<svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.8 8.8 0 1 0 20.2 15.1Z"></path></svg>';
if(localStorage.getItem('farmcare-theme')==='dark')body.classList.add('dark');
const syncThemeIcon=()=>{if(!theme)return;const dark=body.classList.contains('dark');theme.innerHTML=dark?sunIcon:moonIcon;theme.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');theme.setAttribute('title',dark?'Switch to light theme':'Switch to dark theme');};
syncThemeIcon();
if(theme)theme.addEventListener('click',()=>{body.classList.toggle('dark');localStorage.setItem('farmcare-theme',body.classList.contains('dark')?'dark':'light');syncThemeIcon();});
const rtl=document.getElementById('rtlToggle'),dirSaved=localStorage.getItem('farmcare-dir')||'ltr';document.documentElement.dir=dirSaved;if(rtl){rtl.textContent=dirSaved==='rtl'?'LTR':'RTL';rtl.addEventListener('click',()=>{const next=document.documentElement.dir==='rtl'?'ltr':'rtl';document.documentElement.dir=next;localStorage.setItem('farmcare-dir',next);rtl.textContent=next==='rtl'?'LTR':'RTL'})}
// Horizontal product/service sliders.
document.querySelectorAll('[data-slider]').forEach(slider=>{const track=slider.querySelector('.service-track');slider.querySelector('[data-next]')?.addEventListener('click',()=>track.scrollBy({left:track.clientWidth*.88,behavior:'smooth'}));slider.querySelector('[data-prev]')?.addEventListener('click',()=>track.scrollBy({left:-track.clientWidth*.88,behavior:'smooth'}));});
// Real content-changing overlapping category carousel.
const overlap=document.querySelector('[data-overlap-slider]');if(overlap){const data=[
 ['assets/home-2-dairy.webp','Close-up of dairy cattle in a farm barn','LIVESTOCK','Animal health & care','Routine care begins with clean housing, steady feeding, fresh water and regular observation. Explore everyday essentials that help farmers keep the herd comfortable and the daily routine organised.'],
 ['assets/home-2-poultry.webp','Chickens in a well-lit poultry barn','POULTRY','Poultry essentials','A well-managed poultry space depends on cleanliness, ventilation, feed and dependable daily checks. Explore supplies that support a practical setup.'],
 ['assets/home-2-sheep.webp','Tractor baling hay in a sunny field','FEED & FODDER','Feed and fodder','Good feed planning starts with understanding the animals, the season and the way your farm is set up. Browse fodder and nutrition categories for everyday requirements.']
 ];let idx=0,busy=false;const cards=[overlap.querySelector('.side-left'),overlap.querySelector('.overlap-front'),overlap.querySelector('.side-right')];
 const render=()=>{const positions=[(idx+data.length-1)%data.length,idx,(idx+1)%data.length];cards.forEach((card,i)=>{const d=data[positions[i]],im=card.querySelector('img');im.src=d[0];im.alt=d[1];if(i===1){card.querySelector('small').textContent=String(idx+1).padStart(2,'0')+' / '+d[2];card.querySelector('h3').textContent=d[3];card.querySelector('p').textContent=d[4];}else card.querySelector('.overlap-side-label').textContent=d[2];});overlap.querySelector('[data-overlap-count]').textContent=String(idx+1).padStart(2,'0')+' / 03';};
 const move=n=>{if(busy)return;busy=true;cards.forEach(c=>c.classList.add('is-changing'));window.setTimeout(()=>{idx=(idx+n+data.length)%data.length;render();requestAnimationFrame(()=>{cards.forEach(c=>c.classList.remove('is-changing'));busy=false;});},220)};
 overlap.querySelector('[data-overlap-next]')?.addEventListener('click',()=>move(1));overlap.querySelector('[data-overlap-prev]')?.addEventListener('click',()=>move(-1));render();
}
// Four-step Home 1 progress journey: clicking a stage updates the progress and explanatory copy.
const journey=document.querySelector('[data-journey-steps]');if(journey){const steps=[...journey.querySelectorAll('[data-journey-step]')],fill=document.querySelector('[data-progress-fill]'),number=document.querySelector('[data-progress-number]'),label=document.querySelector('[data-journey-label]'),description=document.querySelector('[data-journey-description]'),note=document.querySelector('[data-journey-note]');const copy=[
 ['STEP 01 · UNDERSTAND','Start with the basics: the animals you care for, the way your farm operates and the supply or information you need right now.'],
 ['STEP 02 · EXPLORE','Browse the relevant categories, compare the kinds of essentials available and learn which details matter for your farm routine.'],
 ['STEP 03 · CHOOSE','Review product information, ask questions and consider what fits your animals, setup, season and budget before deciding.'],
 ['STEP 04 · MOVE FORWARD','Connect with the team, confirm the next step and return whenever your requirements change. You have now explored the complete journey.']
 ];steps.forEach((btn,i)=>btn.addEventListener('click',()=>{steps.forEach((b,j)=>{b.classList.toggle('active',j===i);b.setAttribute('aria-pressed',String(j===i));b.classList.toggle('is-complete',j<i)});const pct=(i+1)*25;if(fill)fill.style.width=pct+'%';if(number)number.textContent=pct+'%';if(label)label.textContent=copy[i][0];if(description)description.textContent=copy[i][1];if(note)note.textContent=i===3?'Journey explored · 100% complete':`${i+1} of 4 steps explored · ${pct}% complete`;}));}
// Vertical scroll gallery: buttons move one full image at a time.
document.querySelectorAll('[data-vertical-gallery]').forEach(g=>{const viewport=g.querySelector('.vertical-gallery-window'),track=g.querySelector('.vertical-gallery-track');const step=()=>track.querySelector('figure')?.getBoundingClientRect().height+12||150;g.querySelector('[data-vnext]')?.addEventListener('click',()=>viewport.scrollBy({top:step(),behavior:'smooth'}));g.querySelector('[data-vprev]')?.addEventListener('click',()=>viewport.scrollBy({top:-step(),behavior:'smooth'}));});
// Filmstrip touch/arrow friendly horizontal track.
document.querySelectorAll('[data-filmstrip]').forEach(g=>{const t=g.querySelector('.filmstrip-track');g.addEventListener('wheel',e=>{if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){t.scrollBy({left:e.deltaY,behavior:'smooth'});}}, {passive:true});});
// Wave slider moves the featured image group smoothly.
document.querySelectorAll('[data-wave-slider]').forEach(g=>{const track=g.querySelector('.wave-track');const step=()=>track.querySelector('figure')?.getBoundingClientRect().width+18||250;g.querySelector('[data-wave-next]')?.addEventListener('click',()=>track.scrollBy({left:step(),behavior:'smooth'}));g.querySelector('[data-wave-prev]')?.addEventListener('click',()=>track.scrollBy({left:-step(),behavior:'smooth'}));});
// Lightbox for photos and hexagon buttons.
const lb=document.getElementById('lightbox'),lbImg=lb?.querySelector('img');const openLightbox=(src,alt)=>{if(!lb)return;lbImg.src=src;lbImg.alt=alt||'Farm photograph';lb.classList.add('open');lb.setAttribute('aria-hidden','false')};
document.querySelectorAll('main img').forEach(img=>{img.addEventListener('error',()=>{img.classList.add('image-unavailable');img.removeAttribute('src');img.alt=img.alt+' (image unavailable)';},{once:true});img.addEventListener('click',()=>openLightbox(img.currentSrc||img.src,img.alt));});
document.querySelectorAll('[data-lightbox-src]').forEach(b=>b.addEventListener('click',()=>openLightbox(b.dataset.lightboxSrc,b.getAttribute('aria-label'))));
const close=()=>{if(lb){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');lbImg.src=''}};lb?.querySelector('.lightbox-close')?.addEventListener('click',close);lb?.addEventListener('click',e=>{if(e.target===lb)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
const form=document.getElementById('contactForm');form?.addEventListener('submit',e=>{e.preventDefault();const note=document.getElementById('formNote');if(note){note.textContent='Thanks for your enquiry. This is a front-end demo: connect an email service or backend to deliver messages.';note.classList.add('success');}form.reset()});


// Home 2 expandable photographic disciplines: one wide active panel, three compact panels.
const disciplines=document.querySelector('[data-farm-disciplines]');
if(disciplines){
 const panels=[...disciplines.querySelectorAll('[data-discipline-card]')];
 panels.forEach((panel,index)=>panel.addEventListener('click',()=>{
   panels.forEach((item,i)=>{const active=i===index;item.classList.toggle('is-active',active);item.setAttribute('aria-pressed',String(active));});
 }));
}

// Services page: selecting a process step updates the large supporting photograph and explanation.
const serviceSteps=document.querySelector('[data-service-steps]');
if(serviceSteps){
 const items=[
  {src:'assets/livestock-care-goats.webp',alt:'Sheep grazing in a lush green pasture',kicker:'STEP 01 · UNDERSTAND',title:"Start with your farm's needs",copy:'Tell us about your animals, your setup and the supplies or information you are looking for.'},
  {src:'assets/livestock-care-photo-02.webp',alt:'Sheep grazing on a misty morning pasture',kicker:'STEP 02 · EXPLORE',title:'Review useful options',copy:'Explore relevant categories, understand the choices available and identify what best fits your daily routine.'},
  {src:'assets/livestock-care-photo-05.webp',alt:'Flock of sheep grazing in a farm paddock',kicker:'STEP 03 · CONNECT',title:'Move forward with clarity',copy:'Contact our team with your questions and confirm the information you need for your next farm decision.'}
 ];
 const buttons=[...serviceSteps.querySelectorAll('[data-service-step]')],image=serviceSteps.querySelector('[data-service-step-image]'),kicker=serviceSteps.querySelector('[data-service-step-kicker]'),title=serviceSteps.querySelector('[data-service-step-title]'),copy=serviceSteps.querySelector('[data-service-step-copy]');
 const activate=(index)=>{const item=items[index];buttons.forEach((button,i)=>{button.classList.toggle('is-active',i===index);button.setAttribute('aria-selected',String(i===index));});image.classList.add('is-changing');window.setTimeout(()=>{image.src=item.src;image.alt=item.alt;kicker.textContent=item.kicker;title.textContent=item.title;copy.textContent=item.copy;image.classList.remove('is-changing');},140);};
 buttons.forEach((button)=>button.addEventListener('click',()=>activate(Number(button.dataset.serviceStep))));
}
})();
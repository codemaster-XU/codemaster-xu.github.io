/* Rendering and interactions. Personal content is maintained in profile.js. */
const translations = {
  zh: {
    skip:'跳转至主要内容',navResearch:'研究方向',navWork:'论文',navEngineering:'工程',navJourney:'经历',navContact:'联系 ↗',heroEyebrow:'AI FOR HEALTH & LIFE SCIENCES',role:'科研助理 / 科研实习',institutionShort:'HKUST(GZ) · AI Thrust',exploreWork:'探索我的研究',getInTouch:'与我联系',artLabel:'研究交叉点',artValue:'AI × 健康与生命科学',currentLabel:'目前',currentValue:'HKUST(GZ) · 人工智能学域',educationLabel:'本科',educationValue:'西南民族大学 · 2023—2027',nextLabel:'未来',nextValue:'目标：直接攻读博士',researchKicker:'研究方向',researchTitle:'Questions at the<br><em>intersection.</em>',aboutQuote:'以好奇心出发，<br>让想法落地。',profileBadge:'本科在读 · 科研助理',topRank:'专业排名前',graduation:'预计毕业',workKicker:'论文与研究稿件',workTitle:'Selected <em>research.</em>',engineeringKicker:'工程实践',engineeringTitle:'From research<br><em>to systems.</em>',engineeringNote:'从流式AI应用到可复用组件，用工程实践连接研究与产品。',journeyKicker:'教育与学术合作',journeyTitle:'Learning, research<br>& <em>collaboration.</em>',journeyNote:'在计算机与人工智能的学习之外，参与医院、高校团队的合作，积累跨学科科研经验。',collaborationsTitle:'项目合作与学术指导',ecosystemKicker:'科研参与与服务',ecosystemTitle:'Beyond the <em>paper.</em>',ecosystemNote:'参与临床科研项目，积累知识产权与学术服务经验。',projectsTitle:'参与项目',patentsTitle:'专利申请',serviceTitle:'学术服务',awardKicker:'竞赛与荣誉',awardTitle:'Along the way.',skillsKicker:'方法与工具',skillsTitle:'Tools of the trade.',contactKicker:'保持联系',contactTitle:'Good research starts<br>with a <em>conversation.</em>',contactDescription:'欢迎交流医学AI、生物分子设计、研究合作与博士机会，也欢迎聊聊如何把研究想法做成可用的AI系统。',copyEmail:'复制邮箱 ↗',copied:'邮箱已复制',copyFailed:'复制未完成，请使用邮箱链接',printProfile:'打印学术主页 ↗',contactLocation:'AI Thrust · 香港科技大学（广州）',footer:'好奇心，持续进行中。',backTop:'回到顶部',menuOpen:'打开导航',menuClose:'关闭导航',details:'研究概述与作者信息',viewResearch:'OpenReview 论文 ↗'
  },
  en: {
    skip:'Skip to content',navResearch:'Interests',navWork:'Research',navEngineering:'Engineering',navJourney:'Journey',navContact:'Contact ↗',heroEyebrow:'AI FOR HEALTH & LIFE SCIENCES',role:'Research Assistant / Intern',institutionShort:'HKUST(GZ) · AI Thrust',exploreWork:'Explore my research',getInTouch:'Get in touch',artLabel:'At the intersection',artValue:'AI × Health & life sciences',currentLabel:'Currently',currentValue:'AI Thrust · HKUST(GZ)',educationLabel:'Undergraduate',educationValue:'Southwest Minzu · 2023–2027',nextLabel:'Next chapter',nextValue:'Goal: direct-entry PhD study',researchKicker:'Research interests',researchTitle:'Questions at the<br><em>intersection.</em>',aboutQuote:'Stay curious.<br>Build ideas into systems.',profileBadge:'Undergraduate · Research Assistant',topRank:'Top of cohort',graduation:'Expected graduation',workKicker:'Papers & manuscripts',workTitle:'Selected <em>research.</em>',engineeringKicker:'Engineering practice',engineeringTitle:'From research<br><em>to systems.</em>',engineeringNote:'From streaming AI applications to reusable components, connecting research with practical systems.',journeyKicker:'Education & collaboration',journeyTitle:'Learning, research<br>& <em>collaboration.</em>',journeyNote:'Alongside my studies in computing and AI, collaborations with clinical and academic teams shape my interdisciplinary research experience.',collaborationsTitle:'Collaborations & academic guidance',ecosystemKicker:'Projects & academic service',ecosystemTitle:'Beyond the <em>paper.</em>',ecosystemNote:'Participating in clinical research projects, patent applications, and academic reviewing.',projectsTitle:'Project participation',patentsTitle:'Patent applications',serviceTitle:'Academic service',awardKicker:'Competitions & honors',awardTitle:'Along the way.',skillsKicker:'Methods & tools',skillsTitle:'Tools of the trade.',contactKicker:'Get in touch',contactTitle:'Good research starts<br>with a <em>conversation.</em>',contactDescription:'I welcome conversations about medical AI, biomolecular design, research collaborations, and PhD opportunities—as well as building useful AI systems.',copyEmail:'Copy email ↗',copied:'Email copied',copyFailed:'Copy unavailable. Please use the email link.',printProfile:'Print academic profile ↗',contactLocation:'AI Thrust · HKUST (Guangzhou)',footer:'Curiosity, in progress.',backTop:'Back to top',menuOpen:'Open navigation',menuClose:'Close navigation',details:'Research overview & authorship',viewResearch:'Paper on OpenReview ↗'
  }
};
let language = 'zh';
try { if(localStorage.getItem('zongqi-language') === 'en') language='en'; } catch {}
const $ = selector => document.querySelector(selector);
const pick = value => typeof value === 'string' ? value : value?.[language] ?? value?.zh ?? '';
const el = (tag, className, content) => { const node=document.createElement(tag); if(className)node.className=className; if(content!==undefined)node.textContent=content; return node; };
const safeLink = (url,label,className) => { if(!/^https?:\/\//.test(url??''))return null;const link=el('a',className,label);link.href=url;link.target='_blank';link.rel='noopener noreferrer';return link; };
function renderProfile(){
  const t=translations[language];
  const openDetails=[...document.querySelectorAll('.research-details')].map(node=>node.open);
  document.documentElement.lang=language==='zh'?'zh-CN':'en';
  document.querySelectorAll('[data-i18n]').forEach(node=>{node.textContent=t[node.dataset.i18n]??node.textContent;});
  document.querySelectorAll('[data-i18n-html]').forEach(node=>{node.innerHTML=t[node.dataset.i18nHtml]??'';});
  $('#language-toggle').textContent=language==='zh'?'EN ↗':'中文 ↗';
  $('#language-toggle').setAttribute('aria-label',language==='zh'?'Switch to English':'切换为中文');
  $('#menu-toggle').setAttribute('aria-label',t[$('#menu-toggle').getAttribute('aria-expanded')==='true'?'menuClose':'menuOpen']);
  $('.hero-art').setAttribute('aria-label',language==='zh'?'抽象研究轨道图形':'Abstract research orbit illustration');
  $('#hero-intro').textContent=pick(profile.intro);
  $('#research-note').textContent=pick(profile.researchNote);
  $('#about-text').textContent=pick(profile.about);
  const interests=$('#interest-list');interests.replaceChildren();
  profile.interests.forEach((item,index)=>{const row=el('article','interest-item');row.append(el('span','number',String(index+1).padStart(2,'0')));const copy=el('div');copy.append(el('h3','',pick(item.title)),el('p','',pick(item.description)));row.append(copy);interests.append(row);});
  $('#work-note').textContent=pick(profile.workNote);
  $('#work-list').replaceChildren();
  profile.work.forEach((item,index)=>{
    const row=el('article','work-row');row.append(el('span','work-index',String(index+1).padStart(2,'0')));
    const copy=el('div','work-main');copy.append(el('h3','',pick(item.title)),el('p','paper-title',item.paperTitle),el('p','',pick(item.description)));
    const tags=el('div','work-tags');(item.tags??[]).forEach(tag=>tags.append(el('span','',pick(tag))));copy.append(tags);
    if(item.detail){const details=el('details','research-details');details.open=!!openDetails[index];details.append(el('summary','',t.details),el('p','',pick(item.detail)));copy.append(details);}
    const link=safeLink(item.url,t.viewResearch,'work-link');if(link)copy.append(link);
    row.append(copy);
    const meta=el('div','work-meta');meta.append(el('span',`status${item.status.en==='Accepted'?' accepted':''}`,pick(item.status)),el('div','venue',pick(item.venue)),el('div','work-authorship',pick(item.authorship)));row.append(meta);$('#work-list').append(row);
  });
  $('#engineering-list').replaceChildren();
  profile.engineering.forEach(item=>{
    const card=el('article','engineering-card'),top=el('div','engineering-top');top.append(el('h3','',item.title),el('time','',item.time.replace('Present',language==='zh'?'至今':'Present')));card.append(top,el('p','',pick(item.description)));
    const points=el('ul');item.points.forEach(point=>points.append(el('li','',pick(point))));card.append(points);
    const stack=el('div','engineering-stack');item.stack.forEach(name=>stack.append(el('span','',name)));card.append(stack);$('#engineering-list').append(card);
  });
  $('#timeline').replaceChildren();
  profile.timeline.forEach(item=>{const row=el('article',`timeline-item${item.current?' current':''}`);row.append(el('div','timeline-time',pick(item.time)),el('h3','',pick(item.institution)),el('div','timeline-role',pick(item.role)),el('p','',pick(item.description)));$('#timeline').append(row);});
  $('#collaborations-list').replaceChildren();
  profile.collaborations.forEach(item=>{const row=el('div','collaboration-row'),copy=el('div');copy.append(el('div','collaboration-institution',pick(item.institution)),el('div','collaboration-person',`${pick(item.type)} · ${item.person}`));row.append(copy,el('div','collaboration-time',item.time.replace('Present',language==='zh'?'至今':'Present')));$('#collaborations-list').append(row);});
  $('#projects-list').replaceChildren();profile.projects.forEach(item=>{const row=el('article','project-entry');row.append(el('h4','',pick(item.title)),el('p','',pick(item.context)));if(item.code)row.append(el('code','',item.code));$('#projects-list').append(row);});
  $('#patents-list').replaceChildren();profile.patents.forEach(item=>{const row=el('article','project-entry');row.append(el('h4','',pick(item.title)),el('p','',pick(item.status)));if(item.code)row.append(el('code','',item.code));$('#patents-list').append(row);});
  $('#service-text').textContent=pick(profile.service);
  $('#awards-list').replaceChildren();profile.awards.forEach(item=>{const row=el('li'),copy=el('div','award-text');copy.append(el('strong','',pick(item.title)),el('p','',pick(item.detail)));row.append(copy,el('small','',item.year));$('#awards-list').append(row);});
  $('#skills-list').replaceChildren();profile.skills.forEach(skill=>$('#skills-list').append(el('span','skill',pick(skill))));
  $('#contact-email').hidden=!profile.email;$('#copy-email').hidden=!profile.email;$('#contact-email').textContent=profile.email;$('#contact-email').href='mailto:'+profile.email;
  document.querySelectorAll('.social-link').forEach(node=>node.remove());profile.socials.forEach(social=>{const link=safeLink(social.url,social.name+' ↗','social-link');if(link)$('#contact-tools').append(link);});
}
$('#language-toggle').addEventListener('click',()=>{language=language==='zh'?'en':'zh';try{localStorage.setItem('zongqi-language',language);}catch{}renderProfile();});
function closeMenu(){ $('#navigation').classList.remove('open');$('#menu-toggle').setAttribute('aria-expanded','false');$('#menu-toggle').setAttribute('aria-label',translations[language].menuOpen); }
$('#menu-toggle').addEventListener('click',()=>{const opened=$('#navigation').classList.toggle('open');$('#menu-toggle').setAttribute('aria-expanded',String(opened));$('#menu-toggle').setAttribute('aria-label',translations[language][opened?'menuClose':'menuOpen']);});
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>{const wasOpen=$('#navigation').classList.contains('open');closeMenu();if(wasOpen){const target=document.querySelector(link.getAttribute('href'));if(target){target.setAttribute('tabindex','-1');target.focus({preventScroll:true});}}}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&$('#menu-toggle').getAttribute('aria-expanded')==='true'){closeMenu();$('#menu-toggle').focus();}});
let toastTimer;
function toast(text){$('#toast').textContent=text;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3000);}
$('#copy-email').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(profile.email);toast(translations[language].copied);}catch{toast(translations[language].copyFailed);}});
$('#print-profile').addEventListener('click',()=>window.print());
$('#copyright-year').textContent=String(new Date().getFullYear());
const orbitalGroup=$('#orbital-lines');for(let i=0;i<22;i++){const ellipse=document.createElementNS('http://www.w3.org/2000/svg','ellipse');ellipse.setAttribute('cx','255');ellipse.setAttribute('cy','250');ellipse.setAttribute('rx','171');ellipse.setAttribute('ry',String(46+i*5.5));ellipse.setAttribute('transform',`rotate(${i*8.2-48} 255 250)`);orbitalGroup.append(ellipse);}
renderProfile();
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){document.body.classList.add('motion');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.06});document.querySelectorAll('.reveal').forEach(node=>observer.observe(node));}

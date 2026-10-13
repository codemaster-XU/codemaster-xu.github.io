/* Rendering and interactions. Personal content is maintained in profile.js. */
const translations = {
  zh: {
    skip:'跳转至主要内容',navResearch:'研究方向',navWork:'论文',navEngineering:'工程',navJourney:'经历',navContact:'联系 ↗',heroEyebrow:'AI FOR HEALTH & LIFE SCIENCES',role:'科研助理 / 科研实习',institutionShort:'HKUST(GZ) · AI Thrust',exploreWork:'探索我的研究',getInTouch:'与我联系',artLabel:'研究交叉点',artValue:'AI × 健康与生命科学',currentLabel:'目前',currentValue:'HKUST(GZ) · 人工智能学域',educationLabel:'本科',educationValue:'西南民族大学 · 2023—2027',nextLabel:'未来',nextValue:'目标：直接攻读博士',researchKicker:'研究方向',researchTitle:'Questions at the<br><em>intersection.</em>',aboutQuote:'以好奇心出发，<br>让想法落地。',profileBadge:'本科在读 · 科研助理',topRank:'专业排名前',graduation:'预计毕业',workKicker:'论文与研究稿件',workTitle:'Selected <em>research.</em>',engineeringKicker:'工程实践',engineeringTitle:'From research<br><em>to systems.</em>',engineeringNote:'从流式AI应用到可复用组件，用工程实践连接研究与产品。',journeyKicker:'教育与学术合作',journeyTitle:'Learning, research<br>& <em>collaboration.</em>',journeyNote:'在计算机与人工智能的学习之外，参与医院、高校团队的合作，积累跨学科科研经验。',collaborationsTitle:'项目合作与学术指导',ecosystemKicker:'科研参与与服务',ecosystemTitle:'Beyond the <em>paper.</em>',ecosystemNote:'参与临床科研项目，积累知识产权与学术服务经验。',projectsTitle:'参与项目',patentsTitle:'专利申请',serviceTitle:'学术服务',awardKicker:'竞赛与荣誉',awardTitle:'Along the way.',skillsKicker:'方法与工具',skillsTitle:'Tools of the trade.',contactKicker:'保持联系',contactTitle:'Good research starts<br>with a <em>conversation.</em>',contactDescription:'欢迎交流医学AI、生物分子设计、研究合作与博士机会，也欢迎聊聊如何把研究想法做成可用的AI系统。',copyEmail:'复制邮箱 ↗',copied:'邮箱已复制',copyFailed:'复制未完成，请使用邮箱链接',printProfile:'打印学术主页 ↗',contactLocation:'AI Thrust · 香港科技大学（广州）',footer:'好奇心，持续进行中。',backTop:'回到顶部',menuOpen:'打开导航',menuClose:'关闭导航',details:'研究概述与作者信息',viewResearch:'OpenReview 论文 ↗'
  },
  en: {
    skip:'Skip to content',navResearch:'Interests',navWork:'Research',navEngineering:'Engineering',navJourney:'Journey',navContact:'Contact ↗',heroEyebrow:'AI FOR HEALTH & LIFE SCIENCES',role:'Research Assistant / Intern',institutionShort:'HKUST(GZ) · AI Thrust',exploreWork:'Explore my research',getInTouch:'Get in touch',artLabel:'At the intersection',artValue:'AI × Health & life sciences',currentLabel:'Currently',currentValue:'AI Thrust · HKUST(GZ)',educationLabel:'Undergraduate',educationValue:'Southwest Minzu · 2023–2027',nextLabel:'Next chapter',nextValue:'Goal: direct-entry PhD study',researchKicker:'Research interests',researchTitle:'Questions at the<br><em>intersection.</em>',aboutQuote:'Stay curious.<br>Build ideas into systems.',profileBadge:'Undergraduate · Research Assistant',topRank:'Top of cohort',graduation:'Expected graduation',workKicker:'Papers & manuscripts',workTitle:'Selected <em>research.</em>',engineeringKicker:'Engineering practice',engineeringTitle:'From research<br><em>to systems.</em>',engineeringNote:'From streaming AI applications to reusable components, connecting research with practical systems.',journeyKicker:'Education & collaboration',journeyTitle:'Learning, research<br>& <em>collaboration.</em>',journeyNote:'Alongside my studies in computing and AI, collaborations with clinical and academic teams shape my interdisciplinary research experience.',collaborationsTitle:'Collaborations & academic guidance',ecosystemKicker:'Projects & academic service',ecosystemTitle:'Beyond the <em>paper.</em>',ecosystemNote:'Participating in clinical research projects, patent applications, and academic reviewing.',projectsTitle:'Project participation',patentsTitle:'Patent applications',serviceTitle:'Academic service',awardKicker:'Competitions & honors',awardTitle:'Along the way.',skillsKicker:'Methods & tools',skillsTitle:'Tools of the trade.',contactKicker:'Get in touch',contactTitle:'Good research starts<br>with a <em>conversation.</em>',contactDescription:'I welcome conversations about medical AI, biomolecular design, research collaborations, and PhD opportunities—as well as building useful AI systems.',copyEmail:'Copy email ↗',copied:'Email copied',copyFailed:'Copy unavailable. Please use the email link.',printProfile:'Print academic profile ↗',contactLocation:'AI Thrust · HKUST (Guangzhou)',footer:'Curiosity, in progress.',backTop:'Back to top',menuOpen:'Open navigation',menuClose:'Close navigation',details:'Research overview & authorship',viewResearch:'Paper on OpenReview ↗'
  }
};
Object.assign(translations.zh, {
  downloadCV:'下载学术简历',indexTitle:'主页目录',edition:'学术与实践 · 2026',indexResearch:'研究方向',indexWork:'论文与稿件',indexEngineering:'工程实践',indexJourney:'教育与合作',indexProjects:'项目与专利',indexLeadership:'团队与创业',indexActivities:'学术交流',indexAwards:'荣誉与技能',indexContact:'联系与简历',mapTitle:'两条研究主线',mapNote:'从数据与结构，到学习方法与研究问题',mapClinical:'临床与医学 AI',mapBio:'生物分子设计',mapInput:'研究对象',mapMethods:'方法关注',mapQuestions:'研究问题',mapClinicalInput:'低剂量 CT · 临床表格 · 多模态组学',mapClinicalMethods:'多尺度表征 · 边界学习 · 注意力机制',mapClinicalQuestions:'器官分割 · 慢阻肺筛查 · 风险预测 ↗',mapBioInput:'蛋白质构象 · 生物分子复合体',mapBioMethods:'推理期适配 · 演化优化 · Pareto 选择',mapBioQuestions:'跨构象的稳健设计 ↗',filterAll:'全部研究',filterClinical:'医疗 AI',filterBio:'生物分子设计',collapseAll:'收起研究详解 −',expandAll:'展开研究详解 +',details:'研究详解与作者信息',courseTitle:'课程基础',englishTitle:'英语能力',graduationNote:'本科预计毕业：2027年6月',leadershipKicker:'团队与创业实践',leadershipTitle:'Beyond individual<br><em>contribution.</em>',leadershipNote:'科研组织、团队协作与创业实践，记录把技术和想法带入实际项目的经历。',activitiesKicker:'学术活动与产业交流',activitiesTitle:'Learning through<br><em>conversation.</em>',activitiesNote:'参与学术会议、实地调研与跨团队交流，扩展研究与产业视野。',copyCitation:'复制 BibTeX ↗',citationCopied:'论文引用已复制',citationFailed:'复制未完成，请稍后重试',authorsTitle:'作者与贡献',metricsLabel:'期刊与会议信息',updatedNote:'更新于 2026年10月13日',scoreLabel:'成绩',paperCount:'项研究',codeLabel:'代码 ↗',doiLabel:'论文 DOI ↗'
});
Object.assign(translations.en, {
  downloadCV:'Download academic CV',indexTitle:'Profile index',edition:'Research & practice · 2026',indexResearch:'Interests',indexWork:'Papers',indexEngineering:'Engineering',indexJourney:'Education',indexProjects:'Projects & patents',indexLeadership:'Teams & ventures',indexActivities:'Academic exchange',indexAwards:'Honors & skills',indexContact:'Contact & CV',mapTitle:'Two lines of inquiry',mapNote:'Connecting data and structures with methods and research questions',mapClinical:'Clinical & medical AI',mapBio:'Biomolecular design',mapInput:'Research inputs',mapMethods:'Methods',mapQuestions:'Questions',mapClinicalInput:'Low-dose CT · Clinical tables · Multimodal omics',mapClinicalMethods:'Multi-scale features · Boundary learning · Attention',mapClinicalQuestions:'Segmentation · COPD screening · Risk prediction ↗',mapBioInput:'Protein conformations · Biomolecular complexes',mapBioMethods:'Inference-time adaptation · Evolution · Pareto selection',mapBioQuestions:'Robust design across conformations ↗',filterAll:'All research',filterClinical:'Medical AI',filterBio:'Biomolecular design',collapseAll:'Collapse research details −',expandAll:'Expand research details +',details:'Research details & authorship',courseTitle:'Coursework',englishTitle:'English proficiency',graduationNote:'Expected undergraduate graduation: June 2027',leadershipKicker:'Teams & entrepreneurship',leadershipTitle:'Beyond individual<br><em>contribution.</em>',leadershipNote:'Research coordination, teamwork, and entrepreneurship: putting technical ideas into practical projects.',activitiesKicker:'Academic & industry exchange',activitiesTitle:'Learning through<br><em>conversation.</em>',activitiesNote:'Academic meetings, field visits, and exchanges across research groups broaden my perspective.',copyCitation:'Copy BibTeX ↗',citationCopied:'Citation copied',citationFailed:'Copy unavailable. Please try again.',authorsTitle:'Authors & contributions',metricsLabel:'Venue information',updatedNote:'Updated 13 October 2026',scoreLabel:'Score',paperCount:'research works',codeLabel:'Code ↗',doiLabel:'Paper DOI ↗'
});
let workFilter='all';
let defaultDetailsOpen=true;
const workOpenState=new Map();

let language = 'zh';
try { if(localStorage.getItem('zongqi-language') === 'en') language='en'; } catch {}
const $ = selector => document.querySelector(selector);
const pick = value => typeof value === 'string' ? value : value?.[language] ?? value?.zh ?? '';
const el = (tag, className, content) => { const node=document.createElement(tag); if(className)node.className=className; if(content!==undefined)node.textContent=content; return node; };
const safeLink = (url,label,className) => { if(!/^https?:\/\//.test(url??''))return null;const link=el('a',className,label);link.href=url;link.target='_blank';link.rel='noopener noreferrer';return link; };
function renderProfile(){
  const t=translations[language];
  rememberDetails();
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
  renderResearch();
  $('#engineering-list').replaceChildren();
  profile.engineering.forEach(item=>{
    const card=el('article','engineering-card'),top=el('div','engineering-top');top.append(el('h3','',item.title),el('time','',item.time.replace('Present',language==='zh'?'至今':'Present')));card.append(top,el('p','',pick(item.description)));
    if(item.role)card.append(el('div','engineering-role',pick(item.role)));const points=el('ul');item.points.forEach(point=>points.append(el('li','',pick(point))));card.append(points);if(item.sourceLabel)card.append(el('p','source-note',pick(item.sourceLabel)));if(item.url){const projectLink=safeLink(item.url,language==='zh'?'项目代码 ↗':'Project code ↗','text-link');if(projectLink)card.append(projectLink);}
    const stack=el('div','engineering-stack');item.stack.forEach(name=>stack.append(el('span','',name)));card.append(stack);$('#engineering-list').append(card);
  });
  $('#timeline').replaceChildren();
  profile.timeline.forEach(item=>{const row=el('article',`timeline-item${item.current?' current':''}`);row.append(el('div','timeline-time',pick(item.time)),el('h3','',pick(item.institution)),el('div','timeline-role',pick(item.role)),el('p','',pick(item.description)));$('#timeline').append(row);});
  $('#collaborations-list').replaceChildren();
  profile.collaborations.forEach(item=>{const row=el('div','collaboration-row'),copy=el('div');copy.append(el('div','collaboration-institution',pick(item.institution)),el('div','collaboration-person',`${pick(item.type)} · ${item.person}`));if(item.resumeLabel)copy.append(el('p','resume-label',pick(item.resumeLabel)));row.append(copy,el('div','collaboration-time',item.time.replace('Present',language==='zh'?'至今':'Present')));$('#collaborations-list').append(row);});
  $('#projects-list').replaceChildren();profile.projects.forEach(item=>{const row=el('article','project-entry');row.append(el('h4','',pick(item.title)),el('p','',pick(item.context)));if(item.code)row.append(el('code','',item.code));if(item.ethics)row.append(el('small','project-ethics',pick(item.ethics)));if(item.description)row.append(el('p','project-description',pick(item.description)));$('#projects-list').append(row);});
  $('#patents-list').replaceChildren();profile.patents.forEach(item=>{const row=el('article','project-entry');row.append(el('h4','',pick(item.title)),el('p','',pick(item.status)));if(item.code)row.append(el('code','',item.code));if(item.description)row.append(el('p','project-description',pick(item.description)));$('#patents-list').append(row);});
  $('#service-text').textContent=pick(profile.service);
  $('#awards-list').replaceChildren();profile.awards.forEach(item=>{const row=el('li'),copy=el('div','award-text');copy.append(el('strong','',pick(item.title)),el('p','',pick(item.detail)));row.append(copy,el('small','',pick(item.year)));$('#awards-list').append(row);});
  $('#skills-list').replaceChildren();profile.skills.forEach(skill=>$('#skills-list').append(el('span','skill',pick(skill))));
  renderExtendedProfile();
  $('#contact-email').hidden=!profile.email;$('#copy-email').hidden=!profile.email;$('#contact-email').textContent=profile.email;$('#contact-email').href='mailto:'+profile.email;
  document.querySelectorAll('[data-profile-social]').forEach(node=>node.remove());profile.socials.forEach(social=>{const link=safeLink(social.url,social.name+' ↗','social-link');if(link){link.dataset.profileSocial='true';$('#contact-tools').append(link);}});
}

function itemKey(item,index){return item.id??`paper-${index}`;}
function rememberDetails(){document.querySelectorAll('.research-details').forEach(node=>workOpenState.set(node.dataset.key,node.open));}
function paperCategory(item){return item.category??(/FlexEvo|Biomolecular/i.test(item.paperTitle)?'biomolecular':'clinical');}
function detailPoint(point){
  const li=el('li');
  if(point.title||point.label){li.append(el('strong','',pick(point.title??point.label)));li.append(document.createTextNode(' '+pick(point.text??point.description??point.body)));}
  else li.textContent=pick(point);
  return li;
}
function updateDetailsControl(){
  const visible=[...document.querySelectorAll('.research-details')];
  const allOpen=visible.length>0&&visible.every(node=>node.open);
  $('#toggle-details').textContent=translations[language][allOpen?'collapseAll':'expandAll'];
  $('#toggle-details').setAttribute('aria-expanded',String(allOpen));
}
function renderResearch(){
  const t=translations[language];
  const list=$('#work-list');list.replaceChildren();
  let shown=0;
  profile.work.forEach((item,index)=>{
    if(workFilter!=='all'&&paperCategory(item)!==workFilter)return;
    shown++;
    const key=itemKey(item,index),row=el('article','work-row');row.id=key;row.dataset.category=paperCategory(item);
    row.append(el('span','work-index',String(index+1).padStart(2,'0')));
    const copy=el('div','work-main');copy.append(el('h3','',pick(item.title)),el('p','paper-title',item.paperTitle),el('p','paper-summary',pick(item.description)));
    const tags=el('div','work-tags');(item.tags??[]).forEach(tag=>tags.append(el('span','',pick(tag))));copy.append(tags);
    if(item.detail||item.details?.length||item.authorDetails){
      const details=el('details','research-details');details.dataset.key=key;details.open=workOpenState.get(key)??defaultDetailsOpen;
      details.append(el('summary','',t.details));
      const inner=el('div','research-detail-body');
      if(item.details?.length){const points=el('ul','method-list');item.details.forEach(point=>points.append(detailPoint(point)));inner.append(points);}
      else if(item.detail)inner.append(el('p','',pick(item.detail)));
      if(item.authorDetails||item.authors?.length){
        inner.append(el('h4','detail-heading',t.authorsTitle));
        if(item.authors?.length){const authors=el('p','author-details');item.authors.forEach((author,index)=>{if(index)authors.append(document.createTextNode(', '));authors.append(author==='Zongqi Xu'?el('strong','author-me',author):document.createTextNode(author));});inner.append(authors);}
        if(item.authorDetails)inner.append(el('p','author-details',pick(item.authorDetails)));
      }
      if(item.sourceLabel)inner.append(el('p','source-note',pick(item.sourceLabel)));
      details.append(inner);details.addEventListener('toggle',()=>{workOpenState.set(key,details.open);updateDetailsControl();});copy.append(details);
    }
    const links=el('div','paper-links');
    const primary=safeLink(item.url,/openreview\.net/.test(item.url??'')?t.viewResearch:t.doiLabel,'work-link');if(primary)links.append(primary);
    (item.links??[]).filter(itemLink=>itemLink.url!==item.url).forEach(itemLink=>{const link=safeLink(itemLink.url,pick(itemLink.name??itemLink.label)+' ↗','work-link');if(link)links.append(link);});
    if(item.bibtex){const button=el('button','citation-button',t.copyCitation);button.type='button';button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(item.bibtex);toast(t.citationCopied);}catch{toast(t.citationFailed);}});links.append(button);}
    if(links.childElementCount)copy.append(links);
    row.append(copy);
    const meta=el('div','work-meta');meta.append(el('span',`status${['Accepted','Published'].includes(item.status.en)?' accepted':''}`,pick(item.status)),el('div','venue',pick(item.venue)),el('div','work-authorship',pick(item.authorship)));
    const venueNote=item.venueNote??item.metricsNote??item.venueMetric??item.resumeMetadata;
    if(venueNote){const metrics=safeLink(item.venueSource??item.metricsSourceUrl??item.sourceURL,pick(venueNote),'venue-note');meta.append(metrics??el('small','venue-note',pick(venueNote)));}
    if(item.publicationDate)meta.append(el('time','publication-date',item.publicationDate));
    row.append(meta);list.append(row);
  });
  $('#paper-count').textContent=language==='zh'?`${shown} / ${profile.work.length} 项研究`:`${shown} / ${profile.work.length} research works`;
  document.querySelectorAll('[data-filter]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter===workFilter)));
  $('.paper-filters').setAttribute('aria-label',language==='zh'?'研究分类':'Filter research');
  updateDetailsControl();
}
function renderExperiences(items,target){
  const list=$(target);list.replaceChildren();
  (items??[]).forEach(item=>{
    const card=el('article','experience-card'),head=el('div','experience-head');
    head.append(el('h3','',pick(item.title)));
    if(item.time)head.append(el('time','',pick(item.time).replace('Present',language==='zh'?'至今':'Present')));
    card.append(head);if(item.role)card.append(el('p','experience-role',pick(item.role)));
    if(item.description)card.append(el('p','',pick(item.description)));
    if(item.points?.length){const points=el('ul');item.points.forEach(point=>points.append(detailPoint(point)));card.append(points);}
    if(item.sourceLabel)card.append(el('p','source-note',pick(item.sourceLabel)));
    list.append(card);
  });
}
function renderExtendedProfile(){
  if(profile.serviceMetadata){let serviceNote=$('#service-meta');if(!serviceNote){serviceNote=el('p','source-note');serviceNote.id='service-meta';$('#service-text').after(serviceNote);}serviceNote.textContent=pick(profile.serviceMetadata);}
  const education=profile.educationDetails??{};
  $('#courses-list').replaceChildren();(education.courses??[]).forEach(course=>{const row=el('div','course-row'),copy=el('div');copy.append(el('strong','',pick(course.title)));if(course.category)copy.append(el('small','',pick(course.category)));row.append(copy,el('b','course-score',String(course.score)));$('#courses-list').append(row);});
  $('#english-list').replaceChildren();(education.english??[]).forEach(exam=>{const row=el('div','english-score');row.append(el('span','',pick(exam.title)),el('strong','',String(exam.score)));$('#english-list').append(row);});
  $('#skill-groups').replaceChildren();(profile.skillGroups??[{title:{zh:'开发与分析',en:'Development & analysis'},items:profile.skills}]).forEach(group=>{const card=el('div','skill-group');card.append(el('h3','',pick(group.title)));if(group.description)card.append(el('p','',pick(group.description)));const tags=el('div','skills');(group.items??[]).forEach(item=>tags.append(el('span','skill',pick(item))));card.append(tags);$('#skill-groups').append(card);});
  renderExperiences(profile.leadership,'#leadership-list');renderExperiences(profile.additionalExperience,'#additional-experience-list');
  $('#activities-list').replaceChildren();(profile.academicActivities??[]).forEach((item,index)=>{const row=el('article','activity-row');row.append(el('span','activity-number',String(index+1).padStart(2,'0')));const copy=el('div');copy.append(el('h3','',pick(item.title)));if(item.description)copy.append(el('p','',pick(item.description)));const meta=[pick(item.time),pick(item.location)].filter(Boolean).join(' · ');if(meta)copy.append(el('small','activity-meta',meta));row.append(copy);$('#activities-list').append(row);});
  const exchange=profile.academicExchange??{};const panel=$('#academic-exchange');panel.replaceChildren();if(exchange.title)panel.append(el('h3','',pick(exchange.title)));if(exchange.description)panel.append(el('p','',pick(exchange.description)));if(exchange.points?.length){const points=el('ul');exchange.points.forEach(point=>points.append(detailPoint(point)));panel.append(points);}
  $('#count-work').textContent=String(profile.work.length);$('#count-engineering').textContent=String(profile.engineering.length);$('#count-projects').textContent=String(profile.projects.length);$('#count-activities').textContent=String(profile.academicActivities?.length??0);
  $('#contents').setAttribute('aria-label',language==='zh'?'主页目录':'Profile index');
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{rememberDetails();workFilter=button.dataset.filter;renderResearch();}));
$('#toggle-details').addEventListener('click',()=>{
  const allOpen=[...document.querySelectorAll('.research-details')].every(node=>node.open);defaultDetailsOpen=!allOpen;
  profile.work.forEach((item,index)=>workOpenState.set(itemKey(item,index),defaultDetailsOpen));
  document.querySelectorAll('.research-details').forEach(node=>{node.open=defaultDetailsOpen;});updateDetailsControl();
});
let printState;
window.addEventListener('beforeprint',()=>{printState={filter:workFilter,states:new Map(workOpenState),defaultOpen:defaultDetailsOpen};rememberDetails();printState.states=new Map(workOpenState);workFilter='all';defaultDetailsOpen=true;workOpenState.clear();renderResearch();});
window.addEventListener('afterprint',()=>{if(!printState)return;workFilter=printState.filter;defaultDetailsOpen=printState.defaultOpen;workOpenState.clear();printState.states.forEach((value,key)=>workOpenState.set(key,value));renderResearch();printState=null;});
let framePending=false;
function updateReadingProgress(){const max=document.documentElement.scrollHeight-innerHeight;$('#reading-progress').style.transform=`scaleX(${max>0?Math.min(1,Math.max(0,scrollY/max)):0})`;framePending=false;}
window.addEventListener('scroll',()=>{if(!framePending){framePending=true;requestAnimationFrame(updateReadingProgress);}}, {passive:true});window.addEventListener('resize',updateReadingProgress);
if('IntersectionObserver' in window){const activeSections=new Set();const sectionsObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>entry.isIntersecting?activeSections.add(entry.target.id):activeSections.delete(entry.target.id));const current=[...document.querySelectorAll('main section[id]')].find(node=>activeSections.has(node.id));document.querySelectorAll('#navigation a').forEach(link=>{const active=link.getAttribute('href')===`#${current?.id}`;if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});},{rootMargin:'-85px 0px -55% 0px'});document.querySelectorAll('main section[id]').forEach(section=>sectionsObserver.observe(section));}

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
updateReadingProgress();
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){document.body.classList.add('motion');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.06});document.querySelectorAll('.reveal').forEach(node=>observer.observe(node));}

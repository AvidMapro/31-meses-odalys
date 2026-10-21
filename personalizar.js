
'use strict';
const personal=window.TEXTOS;
palette.k='#293442';palette.v='#fff3dd';palette.g='#a3c6ab';
sprites.panda=['..kk....kk..','.kkkk..kkkk.','.kvvvvvvvvk.','..vvvvvvvv..','..vkkvvkkv..','..vkekvekv..','..vvvvvvvv..','...vvkkvv...','...gvvvvg...','..gggggggg..','.kkvvvvvvkk.','.kkvvvvvvkk.','..kvvvvvvk..','..kkvvvvkk..','..kkk..kkk..','...kk..kk...'];
sprites.odalys=['....hhhh....','...hhhhhh...','..hhhhhhhh..','..hhsssshh..','..hsessehh..','..hssssssh..','..hhsssshh..','...dddddd...','..sddlldds..','..sdddddds..','...dddddd...','..dddddddd..','..dddddddd..','....ss.ss...','....ee.ee...','...eee.eee..'];
sprites.anthony=['....hhhh....','...hhhhhh...','...hssssh...','...sesess...','...ssssss...','....ssss....','...bbbbbb...','..bbwwwwbb..','..sbbbbbbs..','..sbbbbbbs..','...eeeeee...','...ee..ee...','...ee..ee...','...ee..ee...','..eee..eee..','..eee..eee..'];
chapters.forEach((ch,i)=>{const t=personal.capitulos[i];ch.name=t.titulo;ch.intro=[t.voz,...t.dialogos];ch.npc=i===2?'anthony':'panda'});
truths.splice(0,truths.length,...personal.verdades);
const coverParagraphs=document.querySelectorAll('#cover > p:not(.eyebrow)');
coverParagraphs[0].textContent=personal.introduccion;coverParagraphs[1].textContent=personal.recuerdo;coverParagraphs[2].textContent=personal.invitacion;
document.querySelector('#ending > p:not(.eyebrow)').textContent=personal.cierre;
document.querySelector('#ending h3').textContent=personal.despedida;
document.querySelector('details p:last-child').textContent='Odalys lleva un vestido lavanda; Anthony, una bufanda azul. Odany es un panda con bufanda de menta, guardián de esta fantasía. No hay enemigos ni límite de tiempo: explora a tu ritmo.';
$('openLetter').onclick=()=>{$('letterArea').hidden=false;$('letter').textContent=personal.carta};
function paintCharacter(context,name,x,y,size){context.fillStyle='#182b3433';context.fillRect(Math.round(x-10),Math.round(y+17),22,4);sprites[name].forEach((r,j)=>[...r].forEach((c,i)=>{if(palette[c]){context.fillStyle=palette[c];context.fillRect(Math.round(x+(i-6)*size),Math.round(y+(j-8)*size),size,size)}}))}
sprite=function(name,x,y){paintCharacter(ctx,name,x,y,2)};
tree=function(x,y){rect(x+10,y+13,4,11,'#82644f');rect(x+3,y+5,18,13,stage===2?'#3a4a65':'#3c766a');rect(x+6,y,12,18,stage===2?'#52627c':'#5d9a7a');rect(x+7,y+3,4,3,stage===2?'#7888a0':'#a5c995');rect(x+4,y+12,3,3,'#c9ae7633')};
const baseDraw=draw;draw=function(t){baseDraw(t);for(let i=0;i<6;i++){const x=25+i*74,y=7+(i%3)*7;rect(x,y,2,2,'#fff1c1')}rect(1,1,478,2,'#ffe5b077');rect(1,285,478,2,'#26384955')};
const art=document.querySelector('.cover-art'),scene=document.createElement('canvas');scene.width=480;scene.height=180;scene.setAttribute('aria-hidden','true');art.replaceChildren(scene);
const sc=scene.getContext('2d');sc.imageSmoothingEnabled=false;
function block(x,y,w,h,color){sc.fillStyle=color;sc.fillRect(x,y,w,h)}
block(0,0,480,180,'#39435d');for(let i=0;i<25;i++)block((i*67)%470,9+(i*17)%80,i%4===0?3:2,2,'#f2d6aa');block(370,19,24,24,'#ffe9b6');block(380,16,18,18,'#39435d');for(let i=0;i<12;i++)block(i*42,89+(i%3)*7,45,90,'#526f7a');block(0,122,480,58,'#719b89');block(0,147,480,33,'#b6c59b');block(0,165,480,15,'#d9cba6');
for(let x of [26,42,430,448]){block(x,88,4,71,'#376c61');for(let y=92;y<151;y+=15){block(x-2,y,8,2,'#adc49b');block(x+4,y+2,10,3,'#598b70');block(x-9,y+7,9,3,'#8bb08a')}}
block(195,82,84,42,'#77556a');block(200,87,74,31,'#f2d4bf');block(202,89,70,27,'#ae98bf');block(232,122,8,22,'#77556a');block(223,142,27,3,'#77556a');
paintCharacter(sc,'odalys',145,145,2);paintCharacter(sc,'panda',242,151,2);paintCharacter(sc,'anthony',336,145,2);
for(let i=0;i<7;i++){block(77+i*52,165,3,6,'#52846c');block(74+i*52,161,9,5,i%2?'#ecc2ba':'#f4dfa4')}

function nombrePanda(texto){return typeof texto==='string'?texto.replace(/\bBrizna\b/g,'Odany').replace(/\bBRIZNA\b/g,'ODANY'):texto}
const dialogoOriginal=say;
say=function(voz,lineas,alCerrar){return dialogoOriginal(nombrePanda(voz),lineas.map(nombrePanda),alCerrar)};
const rotuloOriginal=ctx.fillText.bind(ctx);
ctx.fillText=function(texto,...args){return rotuloOriginal(nombrePanda(texto),...args)};

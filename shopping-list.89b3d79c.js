const t=document.querySelector(".js-slider-line"),o=document.querySelector(".js-btn-support"),e=document.querySelector(".js-btn-arrow-pic"),r=document.querySelector(".js-slider-box");let i=0,s=0;o.addEventListener("click",(()=>{0===s?(console.log(r.offsetHeight),i+=32,t.style.top=-i+"px"):(i-=32,t.style.top=-i+"px"),0===i&&(s=0,o.style.backgroundColor="#FFFFFF",e.style.transform="rotate(0turn)",e.style.fill="#4F2EE8"),i>=434-r.offsetHeight&&(s=1,o.style.backgroundColor="#4F2EE8",e.style.transform="rotate(0.5turn)",e.style.fill="#FFFFFF")})),function(o){const e=o.map(((t,o)=>`<div class="charity-row">\n    <a href="${t.url}" class="link">\n      <span class="js-charity-number"></span>\n      <div class="charity-img">\n        <img srcset="${t.img} 1x, ${t.retinaImg} 2x"\n        src="${t.img}" \n        alt="${t.title}"\n        class="img">\n      </div>\n    </a>\n  </div>`)).join("");t.innerHTML=e}([{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"https://github.com/vicotroshenko/bookstore/blob/main/src/images/save-image-1x.png?raw=true",retinaImg:"https://github.com/vicotroshenko/bookstore/blob/main/src/images/save-image-2x.png?raw=true"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"https://github.com/vicotroshenko/bookstore/blob/main/src/images/hope-image-1x.png?raw=true",retinaImg:"https://github.com/vicotroshenko/bookstore/blob/main/src/images/hope-image-2x.png?raw=true"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"https://github.com/vicotroshenko/bookstore/blob/main/src/images/united-image-1x.png?raw=true",retinaImg:"https://github.com/vicotroshenko/bookstore/blob/main/src/images/united-image-2x.png?raw=true"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"https://github.com/vicotroshenko/bookstore/blob/main/src/images/medical-image-1x.png?raw=true",retinaImg:"https://github.com/vicotroshenko/bookstore/blob/main/src/images/medical-image-2x.png?raw=true"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"https://github.com/vicotroshenko/bookstore/blob/main/src/images/sans-image-1x.png?raw=true",retinaImg:"https://github.com/vicotroshenko/bookstore/blob/main/src/images/sans-image-2x.png?raw=true"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"https://github.com/vicotroshenko/bookstore/blob/main/src/images/razom-image-1x.png?raw=true",retinaImg:"https://github.com/vicotroshenko/bookstore/blob/main/src/images/razom-image-2x.png?raw=true"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"https://github.com/vicotroshenko/bookstore/blob/main/src/images/hunger-image-1x.png?raw=true",retinaImg:"https://github.com/vicotroshenko/bookstore/blob/main/src/images/hunger-image-2x.png?raw=true"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"https://github.com/vicotroshenko/bookstore/blob/main/src/images/vision-image-1x.png?raw=true",retinaImg:"https://github.com/vicotroshenko/bookstore/blob/main/src/images/vision-image-2x.png?raw=true"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"https://github.com/vicotroshenko/bookstore/blob/main/src/images/pryrula-image-1x.png?raw=true",retinaImg:"https://github.com/vicotroshenko/bookstore/blob/main/src/images/pryrula-image-2x.png?raw=true"}]);document.querySelectorAll(".js-charity-number").forEach(((t,o)=>{t.textContent=o<10?"0"+(o+1):o+1}));
//# sourceMappingURL=shopping-list.89b3d79c.js.map

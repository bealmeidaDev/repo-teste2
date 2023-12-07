const header = document.getElementById("headerId");

const nav = document.createElement("nav");

header.appendChild(nav);

let linksInfo = [
  {href: "/index.html", text: "Início"},
  {href: "/html/projetos.html", text: "Projetos"},
  {href: "contato.html", text: "Contato"}
];

for (link of linksInfo) {
  const linkElem = document.createElement("a");

  linkElem.href = link.href;
  linkElem.textContent = link.text;
  
  header.appendChild(linkElem);
};

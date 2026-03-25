function criaSideBar(targetID){
    const sideBar = document.createElement('div');
    sideBar.className="sidebar";
    const title = document.createElement("h2");
    title.textContent = "Dashboard";
    sideBar.appendChild(title);

    // Insert the data into the div element
    const links = [
        { name: "Início", href: "index.html" },
        { name: "Sobre Nós", href: "info.html" },
        { name: "Marcar Horário", href: "time.html" }
        ];

    links.forEach(({ name, href }) => {
        const a = document.createElement("a");
        a.textContent = name;
        a.href = href;
        sideBar.appendChild(a);
    });
    targetID.appendChild(sideBar)
}
function criaLista(terapias,target){
    const listaPrinc=document.createElement('ul')
    for(let i=0;i<terapias.length;i++){
        const item=document.createElement("li");
        item.innerHTML=terapias[i];
        listaPrinc.appendChild(item);
    }
    target.appendChild(listaPrinc)
}
document.addEventListener("DOMContentLoaded", () => {
    criaSideBar(document.getElementById("facaSidebar"));
});
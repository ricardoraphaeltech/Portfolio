// const cursor = document.querySelector(".cursor");

// document.addEventListener("mousemove", function(info){
//     cursor.style.left = info.clientX + "px"
//     cursor.style.top = info.clientY + "px"
// });

/* Lógica de Programação 
    [X] Saber quando o usuário clicou no botão
    [X] Abrir o menu mobile
    [X] Trocar o ícone pelo X
    [X] Quando clicar no botão X fechar o menu mobile
    [X] Quando clicar na mascara fechar o menu mobile
    [X] Quando clicar nos links do menu, fechar o menu mobile
*/

// Procura no HTML o elemento pelo seletor 
const menuMobile = document.querySelector('.menu-mobile')
const mascaraMenuMobile = document.querySelector('.mascara-menu-mobile')
const linkMenu = document.querySelectorAll('.link-menu')


// Seleciona o botão pelo ID
const botaoMenu = document.getElementById('botao-menu')
// Seleciona o ícone dentro do botão
const icone = document.getElementById('icone')


// Adiciona um evento de clique ao botão
botaoMenu.addEventListener('click', function() {
    // Verifica qual ícone está atualmente
    if (icone.classList.contains('fa-bars')) {
        // Remove o ícone fa-bars
        icone.classList.remove('fa-bars')
        // Troca pelo ícone fa-xmark
        icone.classList.add('fa-xmark')
        // Abre o menu
        menuMobile.style.height = '20vh'
        mascaraMenuMobile.style.visibility = 'visible'
    } else {
        // Remove o ícone fa-xmark
        icone.classList.remove('fa-xmark')
        // Troca pelo fa-bars
        icone.classList.add('fa-bars')
        // Fecha o menu
        menuMobile.style.height = '0'
        mascaraMenuMobile.style.visibility = 'hidden'
    }
})

// Adiciona um evento de clique na mascara
mascaraMenuMobile.addEventListener('click', function() {
    if (icone.classList.contains('fa-xmark')) {
        icone.classList.remove('fa-xmark')
        icone.classList.add('fa-bars')
        menuMobile.style.height = '0'
        mascaraMenuMobile.style.visibility = 'hidden'
    }
})

// Adiciona um evento de clique na lista de items com forEach
linkMenu.forEach((linkMenu) => {
    linkMenu.addEventListener('click', function() {
        if (icone.classList.contains('fa-xmark')) {
            icone.classList.remove('fa-xmark')
            icone.classList.add('fa-bars')
            menuMobile.style.height = '0'
            mascaraMenuMobile.style.visibility = 'hidden'
        }
    })
})
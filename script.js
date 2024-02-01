const items = [
    {
        id: 0,
        nome: 'Hollow Knight',
        img: 'images/hollow.jpg',
        price: 20.50,
        quantidade: 0
    },
    {
        id: 1,
        nome: 'Dark Souls 4',
        img: 'images/cerveja.jpg',
        price: 115.90,
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Minecraft 2',
        img: 'images/mine2.jpg',
        price: 1200.00,
        quantidade: 0
    },
    {
        id: 3,
        nome: 'O bom de Guerra 3',
        img: 'images/Godofwar.webp',
        price: 69.99,
        quantidade: 0
    },
    {
        id: 4,
        nome: 'Zelda',
        img: 'images/zelda.jpg',
        price: 94.25,
        quantidade: 0
    },
    {
        id: 5,
        nome: 'Red Dead Redemption 2',
        img: 'images/redDead.jpeg',
        price: 160.00,
        quantidade: 0
    },
    {
        id: 6,
        nome: 'Overcooked 2',
        img: 'images/overcooked.jpeg',
        price: 14.57,
        quantidade: 0
    },
    {
        id: 7,
        nome: 'Bomba Patch 2024',
        img: 'images/bomba.jpg',
        price: 200.95,
        quantidade: 0
    },
    
    
]

const show = document.getElementById('show-value')
const input = document.getElementById('input')

var saldo = 0

function showSaldo() {
    const value = input.value
    show.innerHTML = value 
    saldo = value
}

function updateSaldo(){
    show.innerHTML = saldo
}

function compraItems() {
    const custoTotal = items.reduce((total, item) => {
        return total + item.price * item.quantidade
    }, 0)

    if(saldo - custoTotal > 0) {
        saldo = saldo - custoTotal
        console.log(custoTotal)

        var containerCarrinho = document.getElementById('carrinho')
        containerCarrinho.innerHTML = ""

        updateSaldo()

        items.map((value) => {
            value.quantidade = 0
        })
    }
    else{
        alert('Você não tem dinheiro suficiente!!')
    }
}

function quantosItems() {
    const showItems = document.getElementById('show-items')
    showItems.innerHTML = items.length
    
}

quantosItems()

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos')
    items.map((value) => {
        containerProdutos.innerHTML += `
        
        <div class="produto-single">
            <img class="imagens" src="`+value.img+`" />
            <p>`+value.nome+`</p>
            <p>R$ `+value.price+`</p>
            <a key="`+value.id+`" href="#">Adicionar ao carrinho! </a>
        </div>
        `
    })
}

inicializarLoja()

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho')
    containerCarrinho.innerHTML = "";
    items.map((value) => {
        
        if(value.quantidade > 0){
        containerCarrinho.innerHTML += `
            <p>`+value.nome+` | R$ `+value.price+ ` | quantidade: `+value.quantidade+` </p>
            <hr>
        `
        }
    })
}

var links = document.getElementsByTagName('a')

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click",function(){
        let key = this.getAttribute('key')
        items[key].quantidade++
        atualizarCarrinho()
        return false
    })
}



fetch('js/novo.json')
.then(response => response.json())
.then(data => {
    // SALVAR OS DADOS VINDOS DO BACK-END LOCALMENTE
    // VAMOS UTILIZAR LOCALSTORAGE
    localStorage.setItem('produtos_cafeteria', JSON.stringify(data));
    console.log('Dados dos produtos salvos no localStorage')


    // SIMULAR CARREGAMENTO ONLINE
    setTimeout(() => {
        
    // ESVAZIAR A ÁREA DE PRODUTOS 
    $("#produtos_cafeteria").empty();

    data.forEach(produtos_cafeteria => {
        var produtoHTML = `
        <!-- Item Card-->
        <div class="item-card">
            <a data-id="${produtos_cafeteria.id}" href="#" class="item">
                <div class="img-container">
                    <img  src="${produtos_cafeteria.imagem}">
                </div>
                <div class="nome-rating">
                    <span class="color-gray">${produtos_cafeteria.nome}</span>
                    <span class="bold margin-right">
                        <i class="mdi mdi-star"></i>
                        ${produtos_cafeteria.rating}
                    </span>
                </div>
                <div class="price">${produtos_cafeteria.preco_promocional.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</div>
            </a>
        </div>
        `;

        $('#produtos_cafeteria').append(produtoHTML);
    });

    $(".item").on('click', function() {
        var id = $(this).attr('data-id');
        localStorage.setItem('detalhe', id);
        app.views.main.router.navigate('/detalhes/');
    });
    }, 1000);


})
.catch(error => console.error('Error ao fazer fetch dos dados: ' + error))

//  VER QUANTOS ITENS TEM DENTRO DO CARRINHO
setTimeout(() => {
    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // ALIMENTAR O CONTADOR DO CARRINHO
    $('.btn-cart').attr('data-count', carrinho.length);
}, 300);
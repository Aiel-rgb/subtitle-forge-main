

document.addEventListener('DOMContentLoaded', function () {


    const modal = document.createElement('div');
    modal.id = 'modal-texto';
    modal.style.cssText = `
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.95);
        justify-content: center;
        align-items: center;
        z-index: 9999;
        padding: 20px;
        box-sizing: border-box;
    `;

    const modalConteudo = document.createElement('div');
    modalConteudo.id = 'modal-conteudo';
    modalConteudo.style.cssText = `
        background-color: #17181d;
        border: 2px solid #8061c8;
        border-radius: 15px;
        padding: 40px;
        max-width: 800px;
        max-height: 80vh;
        overflow-y: auto;
        position: relative;
    `;

    const btnFechar = document.createElement('button');
    btnFechar.innerHTML = '&times;';
    btnFechar.style.cssText = `
        position: absolute;
        top: 15px;
        right: 20px;
        background: none;
        border: none;
        color: #8061c8;
        font-size: 35px;
        cursor: pointer;
        transition: all 0.3s;
    `;
    btnFechar.onmouseover = function () { this.style.color = '#fff'; };
    btnFechar.onmouseout = function () { this.style.color = '#8061c8'; };

    const modalTitulo = document.createElement('h2');
    modalTitulo.id = 'modal-titulo';
    modalTitulo.style.cssText = `
        color: #8061c8;
        font-size: 32px;
        margin-bottom: 20px;
        padding-right: 40px;
    `;

    const modalTexto = document.createElement('div');
    modalTexto.id = 'modal-texto-completo';
    modalTexto.style.cssText = `
        color: white;
        font-size: 18px;
        line-height: 1.8;
    `;

    modalConteudo.appendChild(btnFechar);
    modalConteudo.appendChild(modalTitulo);
    modalConteudo.appendChild(modalTexto);
    modal.appendChild(modalConteudo);
    document.body.appendChild(modal);

    const botoesLerMais = document.querySelectorAll('.btn-ler-mais');

    botoesLerMais.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const card = this.closest('.update-cards');
            const titulo = card.querySelector('h1').textContent;

            const textoCompletoEl = card.querySelector('.texto-completo');
            let textoCompleto;

            if (textoCompletoEl) {
                textoCompleto = textoCompletoEl.innerHTML;
            } else {
                const paragrafo = card.querySelector('p');
                textoCompleto = paragrafo ? paragrafo.innerHTML : '';
            }

            modalTitulo.textContent = titulo;
            modalTexto.innerHTML = textoCompleto;
            modal.style.display = 'flex';
        });
    });

    btnFechar.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
});

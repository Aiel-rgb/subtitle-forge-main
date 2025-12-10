// Script para ampliar imagens ao clicar

document.addEventListener('DOMContentLoaded', function () {

    const modal = document.createElement('div');
    modal.id = 'modal-imagem';
    modal.style.cssText = `
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        justify-content: center;
        align-items: center;
        z-index: 9999;
        cursor: pointer;
    `;

    const imagemAmpliada = document.createElement('img');
    imagemAmpliada.id = 'imagem-ampliada';
    imagemAmpliada.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
    `;

    modal.appendChild(imagemAmpliada);
    document.body.appendChild(modal);

    const imagens = document.querySelectorAll('.container-imagem img, .container-imagem-2 img');

    imagens.forEach(function (img) {
        img.style.cursor = 'pointer';

        img.addEventListener('click', function () {
            imagemAmpliada.src = this.src;
            modal.style.display = 'flex';
        });
    });


    modal.addEventListener('click', function () {
        modal.style.display = 'none';
    });


    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
});

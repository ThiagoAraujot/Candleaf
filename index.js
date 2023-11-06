function aplicarAnimacaoNaSecao(secaoId, animacaoClass) {
    const secaoParaAnimar = document.getElementById(secaoId);
    if (!secaoParaAnimar) return; 

    const secaoParaAnimarPosicao = secaoParaAnimar.getBoundingClientRect();

    if (secaoParaAnimarPosicao.top < window.innerHeight && secaoParaAnimarPosicao.bottom >= 0) {
        secaoParaAnimar.classList.add(animacaoClass);
    } else {
        secaoParaAnimar.classList.remove(animacaoClass);
    }
}

window.addEventListener('scroll', function () {
    aplicarAnimacaoNaSecao('section-products', 'fadeIn');
    aplicarAnimacaoNaSecao('benefits', 'fadeLeft');
    aplicarAnimacaoNaSecao('testimonials', 'fadeIn');
});

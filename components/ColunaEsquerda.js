app.component('coluna-esquerda', {
    template:
        /*html*/
        `<section class="flex-container__coluna-esquerda">
        <div class="coluna-esquerda__sticky-container">
            <img class="coluna-esquerda__foto" src="img/foto.png" alt="Minha foto"></img>
            <section class="coluna-esquerda__info-contato">
                <h2 class="info-contato__titulo">Informações de Contato</h2>
                <ul class="info-contato__contatos">
                    <li class="contato__item contato__localizacao"><a class="contato__link"
                            href="https://goo.gl/maps/dFv5MNGhZ5vfTjnV8" target="_blank">Brasil, Rio de Janeiro,
                            Campo Grande</a></li>
                    <li class="contato__item contato__telefone"><a class="contato__link"
                            href="tel:+552199891-8873">(21) 99891-8873</a></li>
                    <li class="contato__item contato__email"><a class="contato__link"
                            href="mailto:pedro.xzt@gmail.com">pedro.xzt@gmail.com</a></li>
                    <li class="contato__item contato__linkedin"><a class="contato__link"
                            href="http://www.linkedin.com/in/pedroopauloo/" target="_blank">pedroopauloo</a></li>
                    <li class="contato__item contato__github"><a class="contato__link"
                            href="https://github.com/pedropaulo91" target="_blank">pedropaulo91</a></li>
                </ul>
            </section>
            <section class="coluna-esquerda__resumo-profissinal">
                <h2 class="resumo-profissinal__titulo">Resumo Profissional</h2>
                <p class="resumo-profissional__texto">
                    Bacharel em Sistemas de Informação pela Universidade Estácio de Sá e Técnico em Informática.
                </p>
            </section>
            <section class="coluna-esquerda__objetivo-profissional">
                <h2 class="objetivo-profissional__titulo">Objetivo Profissional</h2>
                <p class="objetivo-profissional__texto">
                    Desenvolvedor .NET Júnior
                </p>
            </section>
        </div>
    </section>`
})
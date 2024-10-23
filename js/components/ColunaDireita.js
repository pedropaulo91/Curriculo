app.component('coluna-direita', {
	template:
		`<section class="flex-container__coluna-direita">
			<section class="coluna-direita__nome">
				<h1>Pedro Paulo de Souza Azevedo</h1>
			</section>

			<section class="coluna-direita__experiencia-profissional">
				<h2>Experiência Profissional</h2>

				<ul id="experiencias" class="experiencia-profissional__empresas">
					<li v-for="experiencia in colecaoExperiencias">
						<p><span class="empresa__nome">{{experiencia.empresa}}</span> - {{experiencia.periodo}}</p>
						<p class="empresa__cargo">{{experiencia.cargo}}</p>
						<p class="empresa__descricao"> {{experiencia.descricao}}</p>
					</li>
				</ul>
			</section>
		
			<section class="coluna-direita__historico-educacional">

				<h2>Histórico Educacional</h2>

				<h3>Ensino Superior</h3>
				<p>Sistemas de Informação, Universidade Estácio de Sá (outubro/2017)</p>

				<h3>Ensino Técnico</h3>
				<p>Técnico em Informática, SENAI (agosto/2012)</p>

				<h3>Cursos Complementares</h3>

				<ul class="historico-educacional__cursos">
					<li><a class="curso__link"
							href="https://cursos.alura.com.br/user/pedroo-pauloo/fullCertificate/22ecc5d03493ba26f7778851c126bee3"
							target="_blank">Certificado completo dos cursos concluídos na Alura - clique para visualizar</a></li>
					<li>Preparatório para FCE (First Certificate in English) - Cultura Inglesa (dezembro/2012) </li>
					<li>Conversação - Cultura Inglesa (dezembro/2011) </li>
					<li>Inglês - Cultura Inglesa (junho/2011) </li>
				</ul>
			</section>

			<section class="coluna-direita__idiomas">
				<h2>Idiomas</h2>
				<p>Inglês: leitura intermediária, escrita intermediária, conversação intermediária</p>
			</section>
		</section>
		`,
	data: () => {
		return {
			colecaoExperiencias: arrayExperiencias
		}
	}
})

const arrayExperiencias = [
	{
		empresa: "Alterdata Software",
		periodo: "de agosto/2021 até o momento",
		cargo: "Desenvolvedor Web C# Júnior",
		descricao: "Manutenção na Bimer API, um projeto Web API desenvolvido com C#, WCF, SQL Server e Git. Utilização do GitLab para gerenciamento de repositórios, Git Flow para realização das entregas, Jira para o controle de tarefas e Postman para testes das rotas na API. Participação na criação do módulo Pré-pedido e manutenção do módulo Gestão de Locações e Serviços do Bimer UP, um sistema Web desenvolvido com Vue.js, Vuetify, JavaScript, Node.js e GraphQL."
	},
	{
		empresa: "VSS Sistemas",
		periodo: "de junho/2019 a março/2020",
		cargo: "Programador .NET Júnior",
		descricao: "Manutenção no ERP C - Plus 5 desenvolvido com WPF, C#, PostgreSQL, Entity Framework, MVVM, DDD, TFS e Integração Contínua com TeamCity. Auxílio no processo de migração dos serviços WCF para.NET Core através da criação de controllers e suas rotas aplicando o padrão REST. Realização de testes das rotas com Postman.Utilização de LINQ para criação de relatórios	com Stimulsoft Reports."
	},
	{
		empresa: "SR Informática",
		periodo: "de março/2016 a agosto/2016",
		cargo: "Estagiário",
		descricao: "Migração de aplicação desenvolvida em Delphi 7 para Delphi 10.1 Berlin utilizando o banco de dados SQL Server 2014 na Associação Brasileira de Odontologia."
	},
	{
		empresa: "FEBRASGO",
		periodo: "de dezembro/2013 a maio/2014",
		cargo: "Estagiário de Suporte de TI",
		descricao: "Auxílio na identificação de problemas na infraestrutura e sugestão de soluções. Atuação em caso de problemas na infraestrutura como queda de internet entre outros. Envio de E - mail Marketing. Auxílio no dia - a - dia dos funcionários dando apoio na utilização de softwares. Controle do parque de máquinas, instalação de softwares e manutenção do inventário dos equipamentos de TI."
	},
	{
		empresa: "Hope RH",
		periodo: "de julho/2011 a julho/2011",
		cargo: "Atendente Bilíngue",
		descricao: "Atendente Bilíngue no 5º Jogos Mundiais Militares do CISM Rio 2011. Trabalho temporário no qual auxiliei os atletas na comunicação com os funcionários do alojamento onde eles estavam hospedados."
	}
];
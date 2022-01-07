var arrayExperiencias = [
    { empresa: "Alterdata Software", periodo: "de agosto/2021 até o momento", cargo: "Desenvolvedor Web C# Júnior", descricao: "Manutenção na Bimer API, um projeto Web API desenvolvido com C#, WCF, SQL Server e Git. Utilização do GitLab para gerenciamento de repositórios, Git Flow para realização das entregas, Jira para o controle de tarefas e Postman para testes das rotas na API." },
    { empresa: "VSS Sistemas", periodo: "de junho/2019 a março/2020", cargo: "Programador .NET Júnior", descricao: "Manutenção no ERP C - Plus 5 desenvolvido com WPF, C#, PostgreSQL, Entity Framework, MVVM, DDD, TFS e Integração Contínua com TeamCity. Auxílio no processo de migração dos serviços WCF para.NET Core através da criação de controllers e suas rotas aplicando o padrão REST. Realização de testes das rotas com Postman.Utilização de LINQ para criação de relatórios	com Stimulsoft Reports." },
    { empresa: "SR Informática", periodo: "de março/2016 a agosto/2016", cargo: "Estagiário", descricao: "Migração de aplicação desenvolvida em Delphi 7 para Delphi 10.1 Berlin utilizando o banco de dados SQL Server 2014 na Associação Brasileira de Odontologia." },
    { empresa: "FEBRASGO", periodo: "de dezembro/2013 a maio/2014", cargo: "Estagiário de Suporte de TI", descricao: "Auxílio na identificação de problemas na infraestrutura e sugestão de soluções. Atuação em caso de problemas na infraestrutura como queda de internet entre outros. Envio de E - mail Marketing. Auxílio no dia - a - dia dos funcionários dando apoio na utilização de softwares. Controle do parque de máquinas, instalação de softwares e manutenção do inventário dos equipamentos de TI." },
    { empresa: "Hope RH", periodo: "de julho/2011 a julho/2011", cargo: "Atendente Bilíngue", descricao: "Atendente Bilíngue no 5º Jogos Mundiais Militares do CISM Rio 2011. Trabalho temporário no qual auxiliei os atletas na comunicação com os funcionários do alojamento onde eles estavam hospedados." },
];


var experiencias = new Vue({
    el: "#experiencias",
    data: {
        colecaoExperiencias: arrayExperiencias
    }
});



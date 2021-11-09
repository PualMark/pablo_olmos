//Projects Data
const projectData = [

	{
		image:'./img/portfolio/p01.png',
		title:'Anax Olmos',
		web_link:'https://pualmark.github.io/anax_template/#home',
		git_link:'https://github.com/PualMark/anax_template'
	},
	{
		image:'./img/portfolio/p01.png',
		title:'Anax Olmos',
		web_link:'https://pualmark.github.io/anax_template/#home',
		git_link:'https://github.com/PualMark/anax_template'
	},
	{
		image:'./img/portfolio/p01.png',
		title:'Anax Olmos',
		web_link:'https://pualmark.github.io/anax_template/#home',
		git_link:'https://github.com/PualMark/anax_template'
	},
]

//Projects Display
document.getElementById('project-card').innerHTML = `
${projectData.map(function(project){
	return `
	<div class='project'>
		<img class='project-img' src="${project.image}">
		<section>
			<p class='project-title'>${project.title}</p>
			<a href="${project.web_link}" target="_blank"><i class="fas fa-globe"></i> Visitar Web</a>
		</section>
		<a class='github' href='${project.git_link}' target='_blank'><i class="fab fa-github"></i></a>
	</div>
	`
}).join('')}
`
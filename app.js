const onDataLoaded = function(data){
	$('.js-content').empty()
	data.hello.forEach(function(row, index) {
		// console.log(row, index)
		const fields = data.hello[index].fields
		console.log(fields, fields["Recipe Name"])
		const Ingredients = fields["Ingredients"].split('\n').map(function(currentIngr) {
			return `<li>${currentIngr}</li>`;
		}).join('');
		const RecipeInstructions = fields["Recipe Instructions"].split('\n').map(function(currentInstr) {
			return `<li>${currentInstr}</li>`;
		}).join('');
		const cardHtml = `
	<div class="card">
		<img class="card-img-top" src="${fields["Picture Attachment"][0].url}">
		<div class="card-body">
			<h4 class="card-title">${fields["Recipe Name"]}</h4>
			<p class="card-text">${fields["Description"]}</p>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">Seving Size: ${fields["Serving Size"]}</li>
				<li class="list-group-item">Prep Time: ${fields["Prep Time"]}</li>
				<li class="list-group-item">Cook Time: ${fields["Cook Time"]}</li>
				<li class="list-group-item">Ingredients: <ul>${Ingredients}</ul></li>
				<li class="list-group-item">Recipe Instructions: <ol>${RecipeInstructions}</ol></li>
			</ul>
		</div>
	</div>
		`;

		$('.js-content').append(cardHtml)
	})

}


const apiEndpoint = 'https://wt-2188b504d9b71a6516ced1ea200854bc-0.run.webtask.io/retrieve_recipes'
	$.get(apiEndpoint).then(onDataLoaded)

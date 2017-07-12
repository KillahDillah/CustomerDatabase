

//let "" = document.getElementByTagName("body")


//let customerdata = customers.map(function callback())


let htmlStr = `
<header>
  <h1>Internal Company Directory</h1>
</header>
<span class="break">`


customers.results.map(function(item){
	htmlStr += `
		<div class="all">
			<div class="img">
				<img src="${item.picture.large}">
				<h4>${item.name.first} ${item.name.last}</h4> 
			</div>	
			<div class="one">
				<span class="email">${item.email}</span>
			</div>
			<div class="two">
				<span class="street">${item.location.street}</span>
				<span>
				<span class="location">${item.location.city}, ${item.location.state}, ${item.location.postcode}</span>
				<span class="tel">${item.cell}</span>
			</div>
			<div class="three">
				<span class="ssn"> ${item.id.value}</span>
			</div>
		</div>
	`
});

document.querySelector("#container").innerHTML = htmlStr
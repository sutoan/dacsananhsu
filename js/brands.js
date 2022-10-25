var url = "http://localhost:3000/danhmuc";
	  fetch(url).then(data => data.json())
	  .then(loai =>{
		cat_arr = loai.map(cat => {
			return `
			
			<li class="nav-item me-2">
                <a class="btn btn-outline-primary white primary border-2 active" href="product.html?id=${cat.id}">${cat.TenDM}</a>
            </li>
            `
		})
		document.querySelector(".brand").innerHTML += cat_arr;
	  })

	const menuBrand = () => {
		axios.get('http://localhost:3000/danhmuc')
		.then(response => {
			console.log(response.data);
			let result = '';
			response.data.map(data => {
				result += `
					<a class="dropdown-item" href="product.html?id=${data.id}">${data.TenDM}</a>
				`;
			})
			document.querySelector("#brand").innerHTML = result;
			
		}, err => {
			console.log(err);
		});
	}

	menuBrand();
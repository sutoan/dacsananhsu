var url = "http://localhost:3000/danhmuc";
	  fetch(url).then(data => data.json())
	  .then(loai =>{
		cat_arr = loai.map(cat => {
			return `
			<li class="nav-item me-2">
                <a class="btn btn-outline-primary white primary border-2 active" data-bs-toggle="pill" href="#tab-1">${cat.TenDM}</a>
            </li>
            `
		})
		document.querySelector(".brand").innerHTML += cat_arr;
	  })
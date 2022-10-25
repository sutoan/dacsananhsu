let params = new URLSearchParams(location.search);
let id= params.get("id");
url = `http://localhost:3000/tintuc/?id=${id}`;
fetch(url)
  .then((res) => res.json())
  .then((sach) => {
    sach.forEach((sp) => {
      document.getElementById("tin").innerHTML += `
        <div >
            <h1>${sp.TieuDe}</h1>
            <br>
            <h5>${sp.TomTat}</h5>
            <p>${sp.NgayDang}</p>
            <br>
            <div style="text-align:center" ><img  src="${sp.HinhAnh}" /></div>
            <br>
            <h5 style="text-align:justify">${sp.NoiDung}</h5>
            
        </div>
        `;
    });
  });
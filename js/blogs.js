url = "http://localhost:3000/tintuc";
fetch(url)
  .then((res) => res.json())
  .then((listTT) => {
    listTT.forEach((tt) => {
        console.log(tt);
      document.querySelector("#tin").innerHTML += `
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <img class="img-fluid" src="${tt.HinhAnh}" alt="">
            <div class="bg-light p-4">
                <a class="d-block h5 lh-base mb-4" href="blogdetail.html?id=${tt.id}">${tt.TieuDe}</a>
                <div class="text-muted border-top pt-4">
                    <small class="me-3"><i class="fa fa-user text-secondary me-2"></i> <span class="white" >${tt.TacGia}</span> </small>
                    <small class="me-3"><i class="fa fa-calendar text-secondary me-2"></i> <span class="white" >${tt.NgayDang}</span> </small>
                </div>
            </div>
        </div>
		`;
    });
  });

{/* <tr>
            <td>${tt.idTT}</td>
            <td>${tt.TieuDe}</td>
            <td>${tt.idTT}</td>
            <td>${tt.TomTat}</td>
            <td>${tt.NgayDang}</td>
            <td>${tt.LuotXem}</td>
            <td> <label class="badge badge-warning">Hiện</label> </td>
            <td>
                <button class="badge badge-primary sua button">Sửa</button>
                <button class="badge badge-danger xoa button">Xóa</button>
            </td>
        </tr> */}
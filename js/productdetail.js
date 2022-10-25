let params = new URLSearchParams(location.search);
let id = params.get("id");
url = `http://localhost:3000/sanpham/?id=${id}`;
fetch(url)
  .then((res) => res.json())
  .then((sp) => {
    sp.forEach((sp) => {
    document.getElementById("sp").innerHTML = `
        <div class="col l-6">
            <div class="product_detail_img">
                <img src="${sp.HinhAnh}" alt="">
            </div>
        </div>
        <div class="col l-6">
            <form action="" method="post">
                <div class="product_detail_content" >
                    <h5 class="detail-title"> ${sp.TenSP} </h5>
                    <p class="detail-description"> ${sp.MoTaSP} </p>
                    <p class="detail-service"> </p>
                    <h4 class="detail-price"> <strong>  <span class="text-danger me-1">${
                        sp.DonGia - sp.DonGia / sp.PhanTram
                      } VNĐ</span>
                      <span class="text-body text-decoration-line-through">${
                        sp.DonGia
                      } VNĐ</h4>
                    <p class="detail-views"> ${sp.LuotXem} lượt xem </p>
                    <button onclick="giohang(${sp.id},'${sp.TenSP}',${sp.DonGia - sp.DonGia / sp.PhanTram},'${sp.HinhAnh}')" class="btn btn-primary primary rounded-pill py-sm-3 px-sm-5">
                        Mua ngay
                    </button>
                </div>
            </form>
        </div>
    `;
})
  });
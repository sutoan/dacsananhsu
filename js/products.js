url = "http://localhost:3000/sanpham";
fetch(url)
  .then((res) => res.json())
  .then((listSP) => {
    listSP.forEach((sp) => {
        console.log(sp);
      document.querySelector(".sp").innerHTML += `
        <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="product-item">
                <div class="position-relative bg-light overflow-hidden">
                    <img class="img-fluid w-100" src="${sp.HinhAnh}" alt="">
                    <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">-${sp.PhanTram}%</div>
                </div>
                <div class="text-center p-4">
                    <a class="d-block h5 mb-2 text-primary" href="">${sp.TenSP}</a>
                    <span class="text-primary me-1">${sp.DonGia-(sp.DonGia/sp.PhanTram)} VNĐ</span>
                    <span class="text-body text-decoration-line-through">${sp.DonGia} VNĐ</span>
                </div>
                <div class="d-flex border-top">
                    <small class="w-50 text-center border-end py-2">
                        <a class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>Chi tiết</a>
                    </small>
                    <small class="w-50 text-center py-2">
                        <a class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Thêm giỏ hàng</a>
                    </small>
                </div>
            </div>
        </div>
		`;
    });
  });
  url = "http://localhost:3000/sanpham";
  fetch(url)
    .then((res) => res.json())
    .then((listSP) => {
      listSP.forEach((sp) => {
        if(sp.LuotXem >= 35 ){
            document.querySelector(".hot").innerHTML += `
            <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="product-item">
            <div class="position-relative bg-light overflow-hidden">
            <img class="img-fluid w-100" src="${sp.HinhAnh}" alt="">
            <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">-${sp.PhanTram}%</div>
                  </div>
                  <div class="text-center p-4">
                      <a class="d-block h5 mb-2 text-primary" href="">${sp.TenSP}</a>
                      <span class="text-primary me-1">${sp.DonGia-(sp.DonGia/sp.PhanTram)} VNĐ</span>
                      <span class="text-body text-decoration-line-through">${sp.DonGia} VNĐ</span>
                      </div>
                  <div class="d-flex border-top">
                      <small class="w-50 text-center border-end py-2">
                      <a class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>Chi tiết</a>
                      </small>
                      <small class="w-50 text-center py-2">
                          <a class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Thêm giỏ hàng</a>
                          </small>
                  </div>
              </div>
          </div>
          `;
        }
      });
    });
  
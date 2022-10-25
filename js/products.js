url = "http://localhost:3000/sanpham";
fetch(url)
  .then((res) => res.json())
  .then((listSP) => {
    listSP.forEach((sp) => {
      document.querySelector(".sp").innerHTML += `
        <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="product-item">
                <div class="position-relative bg-light overflow-hidden">
                    <img class="img-fluid w-100" src="${sp.HinhAnh}" alt="">
                    <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">-${
                      sp.PhanTram
                    }%</div>
                </div>
                <div class="text-center p-4">
                    <a class="d-block h5 mb-2 text-primary" href="productdetail.html?id=${
                      sp.id
                    }">${sp.TenSP}</a>
                    <span class="text-primary me-1">${
                      sp.DonGia - sp.DonGia / sp.PhanTram
                    } VNĐ</span>
                    <span class="text-body text-decoration-line-through">${
                      sp.DonGia
                    } VNĐ</span>
                </div>
                <div class="d-flex border-top">
                    <small class="w-50 text-center border-end py-2">
                        <a class="text-body" href="productdetail.html?id=${
                          sp.id
                        }"><i class="fa fa-eye text-primary me-2"></i>Chi tiết</a>
                    </small>
                    <small class="w-50 text-center py-2">
                        
                        <button class="text-body" style="border:none" onclick="giohang(${sp.id},'${sp.TenSP}',${sp.DonGia - sp.DonGia / sp.PhanTram},'${sp.HinhAnh}')"><i class="fa fa-shopping-bag text-primary me-2"></i>Thêm giỏ hàng</button>
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
      if (sp.LuotXem >= 35) {
        document.querySelector(".hot").innerHTML += `
            <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="product-item">
            <div class="position-relative bg-light overflow-hidden">
            <img class="img-fluid w-100" src="${sp.HinhAnh}" alt="">
            <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">-${
              sp.PhanTram
            }%</div>
                  </div>
                  <div class="text-center p-4">
                      <a class="d-block h5 mb-2 text-primary" href="productdetail.html?id=${
                        sp.id
                      }">${sp.TenSP}</a>
                      <span class="text-primary me-1">${
                        sp.DonGia - sp.DonGia / sp.PhanTram
                      } VNĐ</span>
                      <span class="text-body text-decoration-line-through">${
                        sp.DonGia
                      } VNĐ</span>
                      </div>
                  <div class="d-flex border-top">
                      <small class="w-50 text-center border-end py-2">
                      <a class="text-body" href="productdetail.html?id=${
                        sp.id
                      }"><i class="fa fa-eye text-primary me-2"></i>Chi tiết</a>
                      </small>
                      <small class="w-50 text-center py-2">
                      <button class="text-body" style="border:none" onclick="giohang(${sp.id},'${sp.TenSP}',${sp.DonGia - sp.DonGia / sp.PhanTram},'${sp.HinhAnh}')"><i class="fa fa-shopping-bag text-primary me-2"></i>Thêm giỏ hàng</button>
                          </small>
                  </div>
              </div>
          </div>
          `;
      }
    });
  });

const product = () => {
  let link = window.location.href;
  let url = new URLSearchParams(location.search);
  let id = url.get("id");
  let newLink = `http://localhost:3000/sanpham/?idDM=${id}`;
  
  if(link == `http://127.0.0.1:5500/dacsananhsu/product.html`){
    fetch(`http://localhost:3000/sanpham`)
    .then((res) => res.json())  
    .then((sach) => {
      sach.forEach((sp) => {
        document.getElementById("danhsach").innerHTML += `
                  <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="product-item">
                  <div class="position-relative bg-light overflow-hidden">
                  <img class="img-fluid w-100" src="${sp.HinhAnh}" alt="">
                  <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">-${
                    sp.PhanTram
                  }%</div>
                        </div>
                        <div class="text-center p-4">
                            <a class="d-block h5 mb-2 text-primary" href="productdetail.html?id=${
                              sp.id
                            }">${sp.TenSP}</a>
                            <span class="text-primary me-1">${
                              sp.DonGia - sp.DonGia / sp.PhanTram
                            } VNĐ</span>
                            <span class="text-body text-decoration-line-through">${
                              sp.DonGia
                            } VNĐ</span>
                            </div>
                        <div class="d-flex border-top">
                            <small class="w-50 text-center border-end py-2">
                            <a class="text-body" href="productdetail.html?id=${
                              sp.id
                            }"><i class="fa fa-eye text-primary me-2"></i>Chi tiết</a>
                            </small>
                            <small class="w-50 text-center py-2">
                            <button class="text-body" style="border:none" onclick="giohang(${sp.id},'${sp.TenSP}',${sp.DonGia - sp.DonGia / sp.PhanTram},'${sp.HinhAnh}')"><i class="fa fa-shopping-bag text-primary me-2"></i>Thêm giỏ hàng</button>
                                </small>
                        </div>
                    </div>
                </div>
                  `;
      });
  });
  }else{
    fetch(newLink)
      .then((res) => res.json())  
      .then((sach) => {
        sach.forEach((sp) => {
          document.getElementById("danhsach").innerHTML += `
                    <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="product-item">
                    <div class="position-relative bg-light overflow-hidden">
                    <img class="img-fluid w-100" src="${sp.HinhAnh}" alt="">
                    <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">-${
                      sp.PhanTram
                    }%</div>
                          </div>
                          <div class="text-center p-4">
                              <a class="d-block h5 mb-2 text-primary" href="productdetail.html?id=${
                                sp.id
                              }">${sp.TenSP}</a>
                              <span class="text-primary me-1">${
                                sp.DonGia - sp.DonGia / sp.PhanTram
                              } VNĐ</span>
                              <span class="text-body text-decoration-line-through">${
                                sp.DonGia
                              } VNĐ</span>
                              </div>
                          <div class="d-flex border-top">
                              <small class="w-50 text-center border-end py-2">
                              <a class="text-body" href="productdetail.html?id=${
                                sp.id
                              }"><i class="fa fa-eye text-primary me-2"></i>Chi tiết</a>
                              </small>
                              <small class="w-50 text-center py-2">
                              <button class="text-body" style="border:none" onclick="giohang(${sp.id},'${sp.TenSP}',${sp.DonGia - sp.DonGia / sp.PhanTram},'${sp.HinhAnh}')"><i class="fa fa-shopping-bag text-primary me-2"></i>Thêm giỏ hàng</button>
                                  </small>
                          </div>
                      </div>
                  </div>
                    `;
        });
    });
  }

}



link = window.location.href;
url = new URLSearchParams(location.search);
id = url.get("id");
newLink = `http://localhost:3000/sanpham/?idDM=${id}`;
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


product()
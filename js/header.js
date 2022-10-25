let render = `
<nav class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" style="color: white;" data-wow-delay="0.1s">
            <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
                <img src="./img/logo.png" alt="" style="width: 170px">
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="index.html" class="nav-item nav-link active">Trang chủ</a>
                    <div class="nav-item dropdown">
                        <a href="product2.html" class="nav-link dropdown-toggle">Sản phẩm</a>
                        <div class="dropdown-menu m-0" id="brand">
                        </div>
                    </div>
                    <a href="blog.html" class="nav-item nav-link">Tin tức</a>
                    <a href="about.html" class="nav-item nav-link">Về chúng tôi</a>
                    <a href="contact.html" class="nav-item nav-link">Liên hệ</a>
                </div>
                <div class="d-none d-lg-flex ms-2">
                    <!-- <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
                        <small class="fa fa-search text-body"></small>
                    </a> -->
                    <a class="btn-sm-square bg-white rounded-circle ms-3" href="login.html">
                        <small class="fa fa-user text-body"></small>
                    </a>
                    <a class="btn-sm-square bg-white rounded-circle ms-3" href="cart.html">
                        <small class="fa fa-shopping-bag text-body"></small>
                    </a>
                </div>
            </div>
        </nav>
`

document.querySelector("#header").innerHTML = render;
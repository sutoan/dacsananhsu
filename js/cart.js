function giohang(id, ten, gia, hinh){
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart == null){
        cart = [];
        cart.push({id:id, TenSP:ten, DonGia:gia, HinhAnh:hinh, SoLuong:1});
    }
    else{
        let item = cart.find(item => item.id ===id);
        if(item) item.SoLuong++;
        else cart.push({id:id, TenSP:ten, DonGia:gia, HinhAnh:hinh, SoLuong:1})
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    
  }
  var cart = JSON.parse(localStorage.getItem("cart"));
	  if (cart) cart.forEach( (sp,index) => {
		document.querySelector("#giohang").innerHTML += `
		<tr>
            <td class="cart_product_img d-flex align-items-center">
                <a href="#"><img src="${sp.HinhAnh}" alt="${sp.TenSP}"></a>
                <h6>${sp.TenSP}</h6>
            </td>
            <td class="price"><span>${sp.DonGia} VNĐ</span></td>
                <td><input value="${sp.SoLuong}" type="text" onkeyup="tinhtien(${sp.DonGia},this.value, ${index})" ></td>
            <td class="total_price tien" ><span>${sp.DonGia * sp.SoLuong} VNĐ</span></td>
        </tr>
		`
	  })
    function tinhtien(gia, soluong, i){
        let tien = gia*soluong;
        document.getElementsByClassName("tien")[i].innerText = tien+" VNĐ";
        tinhtongtien();
    }
    function tinhtongtien(){
        arrTien = document.getElementsByClassName("tien");
        tongtien=0;
        for(let t of arrTien){
            tongtien += parseInt(t.innerText);
        }
        document.getElementById("tongtien").innerText = tongtien+" VNĐ";
        document.getElementById("ship").innerText = (tongtien/10) +" VNĐ";
        document.getElementById("tientong").innerText = (tongtien+(tongtien/10)) +" VNĐ";
		let tientong = (tongtien+(tongtien/10));
        localStorage.setItem("tientong", tientong);
    }
    tinhtongtien();
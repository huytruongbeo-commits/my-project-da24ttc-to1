const productList = [
    {
        id: "01", 
        name: "Mô hình Gundam Aerial", 
        price: "550.000", 
        image: "../assets/images/gundan.jpg",
        productLink: "product-detail.html",
        desc: "Mô hình Gundam Aerial với thiết kế hiện đại, các khớp nối linh hoạt giúp bạn dễ dàng tạo dáng chiến đấu cực ngầu."
    },
    {
        id: "02", 
        name: "Figure Luffy Gear 5", 
        price: "850.000", 
        image: "../assets/images/lufy.jpg",
        productLink: "product-detail.html",
        desc: "Mô hình Luffy trạng thái thức tỉnh Gear 5 cực kỳ sống động, tái hiện hoàn hảo sức mạnh của vị vua hải tặc tương lai."
    },
    {
        id: "03", 
        name: "Mô hình Iron Man MK5", 
        price: "1.250.000", 
        image: "../assets/images/man.jpg",
        productLink: "product-detail.html",
        desc: "Bộ giáp Iron Man MK5 với màu sơn đỏ vàng kim loại sang trọng, là món đồ sưu tầm đẳng cấp cho fan Marvel."
    },
    {
        id: "04", 
        name: "Mô hình Naruto Sage Mode", 
        price: "450.000", 
        image: "../assets/images/naruto.webP", 
        productLink: "product-detail.html",
        desc: "Naruto trong trạng thái Hiền nhân cực kỳ oai phong, chi tiết khuôn mặt và trang phục được hoàn thiện tỉ mỉ."
    },
    {
        id: "05", 
        name: "Mô hình Zoro Tam Kiếm", 
        price: "900.000", 
        image: "../assets/images/zoro.jpg",
        productLink: "product-detail.html",
        desc: "Kiếm sĩ Zoro phái Tam Kiếm với thế đứng sẵn sàng nghênh chiến, các thanh kiếm được thiết kế sắc sảo."
    },
    {
        id: "06", 
        name: "Mô hình siêu xe", 
        price: "1.100.000", 
        image: "../assets/images/sieu.jpg",
        productLink: "product-detail.html",
        desc: "Mô hình siêu xe tỉ lệ chuẩn, nước sơn bóng bẩy và các chi tiết cơ khí bên trong được tái hiện chân thực."
    },
    {
        id: "07", 
        name: "Mô hình Batman Tactical", 
        price: "1.350.000", 
        image: "../assets/images/man.jpg",
        productLink: "product-detail.html",
        desc: "Hiệp sĩ bóng đêm Batman phiên bản Tactical đầy mạnh mẽ, mang đậm chất công nghệ từ vũ trụ DC."
    },
    {
        id: "08", 
        name: "Mô hình Megumi Fushiguro", 
        price: "500.000", 
        image: "../assets/images/megumi.jpeg", 
        productLink: "product-detail.html",
        desc: "Thức thần sư Megumi từ Jujutsu Kaisen, sản phẩm cao cấp giữ nguyên thần thái lạnh lùng của nhân vật."
    },
    {
        id: "09", 
        name: "Mô hình Anya Forger", 
        price: "350.000", 
        image: "../assets/images/anya.jpg",
        productLink: "product-detail.html",
        desc: "Bé Anya dễ thương với biểu cảm 'đặc trưng' không thể bỏ qua cho các tín đồ của gia đình điệp viên."
    },
    {
        id: "10", 
        name: "Mô hình Levi Ackerman", 
        price: "750.000", 
        image: "../assets/images/levi.jpeg", 
        productLink: "product-detail.html",
        desc: "Chiến binh mạnh nhất nhân loại Levi Ackerman với bộ trang thiết bị cơ động 3D cực kỳ chi tiết."
    }
];

function addProduct(id, name, price, image, hyperLink) {
    // 1. Tạo khung chứa 1 item
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item col-lg-3 col-md-4 col-sm-6 mb-4");

    // 2. Tạo khung chứa hình
    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image ratio ratio-1x1 overflow-hidden border rounded shadow-sm");

    const ImageNode = document.createElement("img");
    ImageNode.setAttribute("src", image);
    ImageNode.setAttribute("alt", name);
    ImageNode.setAttribute("class", "img-fluid object-fit-cover h-100");
    
    ImageNode.onerror = function() {
        this.src = "https://via.placeholder.com/300?text=No+Image";
    };
    productImage.appendChild(ImageNode);

    // 3. Tạo khung chứa thông tin
    const productInfo = document.createElement("div");
    productInfo.setAttribute("class", "product-info text-center mt-2");
    
    // Tên sản phẩm
    const productName = document.createElement("p");
    productName.setAttribute("class", "fw-bold mb-1 text-truncate px-2");
    productName.appendChild(document.createTextNode(name));
  
    // Giá sản phẩm (Sửa theo hình bạn gửi: thêm fw-bold và đơn vị)
    const productPrice = document.createElement("p");
    productPrice.setAttribute("class", "text-danger fw-bold mb-2 small");
    const productPriceText = document.createTextNode(price + " VNĐ"); 
    productPrice.appendChild(productPriceText);

    // Nút Xem chi tiết
    const productLink = document.createElement("a");
    productLink.appendChild(document.createTextNode("Xem chi tiết"));
    productLink.setAttribute("href", hyperLink + "?id=" + id);
    productLink.setAttribute("class", "btn btn-info btn-sm w-75 mx-auto d-block"); // Chỉnh btn-info cho giống hình

    // Gắn các thành phần vào productInfo
    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productLink);

    // Gắn Image và Info vào Item chính
    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    // 4. Gắn vào danh sách hiển thị trên Web
    const list = document.getElementById("product-list") || document.querySelector(".product-list");
    if(list) {
        list.appendChild(productItem);
    }
}

// 5. CHẠY VÒNG LẶP ĐỂ HIỂN THỊ (QUAN TRỌNG)
productList.forEach(item => {
    addProduct(item.id, item.name, item.price, item.image, item.productLink);
});

const productList = [
   {
        id: "01", 
        name: "Mô hình goku", 
        price: "27,231,000", 
        image: "../assets/images/goku.jpg",
        productLink: "product-detail.html",
        desc: "Mô hình Son Goku trạng thái Super Saiyan với độ chi tiết cao, thể hiện rõ các thớ cơ bắp và biểu cảm quyết liệt trong trận chiến. Từng lọn tóc vàng đặc trưng và hiệu ứng hào quang xung quanh được chế tác tỉ mỉ, mang lại vẻ ngoài mạnh mẽ và đầy uy lực cho nhân vật."
   },
   {
        id: "02", 
        name: "Figure Luffy Gear 5", 
        price: "24,361,000", 
        image: "../assets/images/lufygear5.jpg",
        productLink: "product-detail.html",
        desc: "Mô hình Luffy trạng thái thức tỉnh Gear 5 cực kỳ sống động, tái hiện hình ảnh Thần Mặt Trời Nika với mái tóc trắng bồng bềnh và nụ cười ngạo nghễ. Hiệu ứng khói mây xung quanh được làm từ nhựa trong suốt tạo cảm giác huyền ảo."
    },
    {
        id: "03", 
        name: "Mô hình rimuru tempest", 
        price: "17,115,000",
        image: "../assets/images/rimuru.jpg",
        productLink: "product-detail.html",
        desc: "Mô hình Rimuru Tempest trong trang phục Ma Vương uy nghiêm. Chi tiết thanh kiếm và tà áo choàng được thiết kế sắc sảo, đi kèm là hiệu ứng chiêu thức đẹp mắt, thể hiện đẳng cấp của một trong những nhân vật mạnh nhất thế giới Isekai."
    },
    {
        id: "04", 
        name: "Mô hình Naruto Sage Mode", 
        price: "25.500.000", 
        image: "../assets/images/naruto.jpg", 
        productLink: "product-detail.html",
        desc: "Mô hình Naruto trạng thái Hiền Nhân (Sage Mode) với chiếc áo khoác đỏ đặc trưng và cuộn bí kíp khổng lồ sau lưng. Đôi mắt có viền cam và các chi tiết sơn tay tỉ mỉ giúp tái hiện hoàn hảo khoảnh khắc hào hùng trong trận chiến với Pain."
    },
    {
        id: "05", 
        name: "Mô hình Zoro Tam Kiếm", 
        price: "35.520.000", 
        image: "../assets/images/zoro.jpg",
        productLink: "product-detail.html",
        desc: "Mô hình Roronoa Zoro trong tư thế chiến đấu đặc hữu với ba thanh kiếm danh bất hư truyền. Từng chi tiết từ vết sẹo trên ngực đến các đường vân trên lưỡi kiếm đều được hoàn thiện tỉ mỉ, toát lên khí chất mạnh mẽ của bậc thầy kiếm thuật."
    },
    {
        id: "06", 
        name: "Mô hình siêu xe", 
        price: "3.100.000", 
        image: "../assets/images/lamboghini.jpg",
        productLink: "product-detail.html",
        desc:"Mô hình siêu xe Lamborghini với tỉ lệ chuẩn, nước sơn bóng bẩy và các chi tiết nội thất được mô phỏng chính xác. Các khớp cửa và nắp máy có thể đóng mở linh hoạt, là món đồ trang trí đẳng cấp cho những người đam mê tốc độ."
    },
    {
        id: "07", 
        name: "Mô hình mercedes-benz trắng" ,
        price: "4.350.000", 
        image: "../assets/images/mercedes-benz.jpg",
        productLink: "product-detail.html",
        desc: "Mô hình xe Mercedes-Benz sang trọng với tông màu trắng tinh khôi. Thiết kế hiện đại, tinh tế đến từng chi tiết nhỏ như logo, hệ thống đèn và mâm xe, mang lại vẻ đẹp thanh lịch và cao cấp cho bộ sưu tập của bạn."
    },
    {
        id: "08", 
        name: "Mô hình Megumi Fushiguro", 
        price: "36,867,000", 
        image: "../assets/images/megumi.jpg", 
        productLink: "product-detail.html",
        desc: "Mô hình thức thần sư Megumi từ Jujutsu Kaisen, sản phẩm cao cấp giữ nguyên thần thái lạnh lùng đặc trưng. Đi kèm là các chi tiết biểu tượng cho kỹ thuật Thập Chủng Ảnh Pháp, được đúc từ chất liệu nhựa PVC bền bỉ và sắc nét."
    },
    {
        id: "09", 
        name: "Mô hình Anya Forger", 
        price: "2,350,000", 
        image: "../assets/images/anya.jpg",
        productLink: "product-detail.html",
        desc: "Mô hình cô bé ngoại cảm Anya Forger từ Spy x Family với biểu tượng khuôn mặt 'đáng yêu' kinh điển. Trang phục học viện Eden được tái hiện chính xác, mang lại sự dễ thương và vui nhộn cho góc làm việc hoặc học tập của bạn."
    },
    {
        id: "10", 
        name: "Mô hình Levi Ackerman", 
        price: "34,220,000", 
        image: "../assets/images/levi.jpg", 
        productLink: "product-detail.html",
        desc: "Mô hình Đại úy Levi Ackerman trong tư thế chiến đấu đặc trưng với bộ thiết bị cơ động đa chiều (3DMG). Từng đường nét trên gương mặt lạnh lùng và các chi tiết lưỡi kiếm được chế tác sắc sảo, tái hiện hoàn hảo hình ảnh 'chiến binh mạnh nhất nhân loại' trong cuộc chiến chống lại Titan."
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

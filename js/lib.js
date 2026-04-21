<script>
    const donggia = document.getElementsByClassName("dg");
    const soluong = document.getElementsByClassName("sl");
    const thanhtien = document.getElementsByClassName("tt");
    let tongthanhtoan = 0;

    for (let i = 0; i < donggia.length; i++) {
        let dg = Number(donggia[i].innerHTML);
        let sl = Number(soluong[i].innerHTML);
        
        let tt = dg * sl;
        thanhtien[i].innerHTML = tt;
        
        tongthanhtoan += tt;
    }

    const tongtt_element = document.getElementById("tongthanhtoan");
    tongtt_element.innerHTML = tongthanhtoan;
</script>
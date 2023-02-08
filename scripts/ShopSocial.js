let gridData = [
    {
        image: "https://i.ibb.co/2nSn3vj/Screenshot-2022-10-01-at-9-51-45-PM.png"
    },
    {
        image: "https://i.ibb.co/pnQQ9xc/Screenshot-2022-10-01-at-9-55-26-PM.png"
    }, {
        image: "https://i.ibb.co/18qn9Cb/Screenshot-2022-10-01-at-9-56-07-PM.png"
    }, {
        image: "https://i.ibb.co/583QpLY/Screenshot-2022-10-01-at-10-00-21-PM.png"
    }, {
        image: "https://i.ibb.co/jw7mtYB/Screenshot-2022-10-01-at-10-02-45-PM.png"
    }, {
        image: "https://i.ibb.co/YZWsGdY/Screenshot-2022-10-01-at-9-59-13-PM.png"
    }, {
        image: "https://i.ibb.co/SKqnkrx/Screenshot-2022-10-01-at-10-03-27-PM.png"
    }, {
        image: "https://i.ibb.co/ygB7xX4/Screenshot-2022-10-01-at-10-06-30-PM.png"
    }, {
        image: "https://i.ibb.co/6ZGLgGc/Screenshot-2022-10-01-at-10-07-17-PM.png"
    }, {
        image: "https://i.ibb.co/jLMqfDZ/Screenshot-2022-10-01-at-10-08-46-PM.png"
    }, {
        image: "https://i.ibb.co/Rhnd8rp/Screenshot-2022-10-01-at-10-09-25-PM.png"
    }, {
        image: "https://i.ibb.co/BqMxxSK/Screenshot-2022-10-01-at-10-11-47-PM.png"
    }, {
        image: "https://i.ibb.co/yd67qM8/Screenshot-2022-10-01-at-10-15-08-PM.png"
    }, {
        image: "https://i.ibb.co/SNxGkyj/Screenshot-2022-10-01-at-10-13-17-PM.png"
    }
]

let moreDataFuntion = (data) => {
    let grid_img_list = document.getElementById("grid-img-list");

    let shop_feed_list = document.createElement("div");
    shop_feed_list.setAttribute("id", "shop-feed-list");

    data.forEach((item) => {
        let div = document.createElement("div");
        div.addEventListener("click", () => {
            window.location.href = "shop_all.html";
        });

        let img = document.createElement("img");
        img.src = item.image;
        img.setAttribute("class", "grid-img");

        div.append(img);
        shop_feed_list.append(div);
    });
    grid_img_list.append(shop_feed_list);
};

moreDataFuntion(gridData);



let more_btn = document.getElementById("more");
more_btn.addEventListener("click", (e) => {
    moreDataFuntion(gridData);
});
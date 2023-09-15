var lists = [
    {
        video: true,
        profile: "https://pbs.twimg.com/profile_images/732565291255746560/SLxWyf7p_400x400.jpg",
        title: "Be mindful of character limits. YouTube's character limit for titles is 100",
        yt_name: "Tech Burner",
        url: "https://www.youtube.com/embed/tgbNymZ7vqY",
        verified: true,
        views: "563k . 5days ago",
        tags: ["mindful"," best movie"]
    },
    {
        video: true,
        profile: "https://yt3.ggpht.com/uwwZtdlyBJTTuKtDzHJpNn6ghxawd3NT3whA9K6hDTdRZPWS56USBAH3EUZm6ukELaZYAorjXIM=s68-c-k-c0x00ffffff-no-rj",
        title: "Pakistan vs Sri lanka Live Match Today - PAK vs SL Semi Final Asia Cup live Score",
        yt_name: "Dhurac Rathee",
        url: "https://www.youtube.com/embed/DorFCPdLyvY",
        verified: false,
        views: "563k . 5days ago",
        tags: []
    },
    {
        video: false,
        profile: "https://yt3.ggpht.com/-CSDtnM7CE_ugbhDzaEOHVScO-UMPm3Oe86ERX4_K9ed4a7UkfTuHXLqF36grlgYKq_HyRcI=s88-c-k-c0x00ffffff-no-rj",
        title: "2 October Dry Day Hai Bhai Stock Leke Rakhe Kya | Munna Bhai | Circuit | Best Funny Videos",
        yt_name: "T series",
        url: "https://marketplace.canva.com/EAEqfS4X0Xw/1/0/800w/canva-most-attractive-youtube-thumbnail-WwL5rLjjIuE.jpg",
        verified: true,
        views: "563k . 5days ago",
        tags: ["munna bhai"]
    },
    {
        video: true,
        profile: "https://yt3.ggpht.com/ge4X9WiCMHGKx4qPgbzXXBa_2M4aDYL4ueij7iQkZ1zxU2Xpgg2jd19_zpYu3e-t2vwMihqp=s68-c-k-c0x00ffffff-no-rj",
        title: "Bhagwaan Ka Diya Hua Sab Kuch Hai | Nana Patekar | Akshay Kumar | Paresh Rawal | Welcome",
        yt_name: "Goldmines",
        url: "https://www.youtube.com/embed/PofzRwd3q24",
        verified: true,
        views: "563k . 5days ago",
        tags: ["bollywood movie"," motivation"," paresh Rawal"]
    },
    {
        video: false,
        profile: "https://yt3.ggpht.com/ytc/AOPolaQMI0A3vsT2ACJ8u3SOuQsWQKgaS9HlEtzpPDDtAg=s68-c-k-c0x00ffffff-no-rj",
        title: "Brahmanandam Best Comedy Scene From Rowdy Baadshah | Jr Ntr & Kajal Aggarwal best Comedy Scene",
        yt_name: "Mr Proton",
        url: "https://i.ytimg.com/vi/FFZSgalRSQQ/maxresdefault.jpg",
        verified: false,
        views: "563k . 5days ago",
        tags: ["comedy"," Brahmanandam"]
    },
    {
        video: true,
        profile: "https://yt3.ggpht.com/ytc/AOPolaTb5Rq0zwg4Vy5iy3x-e37moIRBX833OlzWuSR1_c8=s68-c-k-c0x00ffffff-no-rj",
        title: "ब्रह्मानंदम बना अल्लू अर्जुन के लिए हनुमान और लगा दी दुश्मन की लंका में आग",
        yt_name: "Dear Sir",
        url: "https://www.youtube.com/embed/3qDnfdsjG70",
        verified: true,
        views: "563k . 5days ago",
        tags: []
    },
    {
        video: true,
        profile: "https://yt3.ggpht.com/w6uERehbCDAXSyqJ9txq8vKg85plkZxJ-LateeXoNe5JaGL_PeyHtIwtZIZ1oKg5ILvqi_tPpw=s68-c-k-c0x00ffffff-no-rj",
        title: "Exercise 8.4 Class 9 Complete Sindh Board | Class IX | Ex 8.4 All Questions | #newmathematicsbookk",
        yt_name: "Technology Gyan",
        url: "https://www.youtube.com/embed/2ULinT_oZe4",
        verified: true,
        views: "563k . 5days ago",
        tags: ["Maths"," class matric"]
    },
    {
        video: false,
        profile: "https://yt3.googleusercontent.com/ytc/AOPolaTi-H0QOHAvyLTNLqWB1cZ4TC1vIfHOqB699llnxA=s176-c-k-c0x00ffffff-no-rj",
        title: "कैसे होगा हमारा INDIA 2030 मैं | INDIA in 2030 | Future Of INDIA | Megaprojects In INDIA",
        yt_name: "Quick Facts",
        url: "https://img.freepik.com/premium-psd/new-modern-glow-effect-video-game-review-youtube-channel-thumbnail-web-banner-premium-psd-templa_623685-102.jpg?w=2000",
        verified: false,
        views: "2M . 1year ago ",
        tags: ["india in 2030"]
    }
]

for (var i = 0; i < lists.length; i++) {

    var main = document.getElementById("main");

    var sec_main = document.createElement("div");
    sec_main.setAttribute("class","sec_main");
    main.appendChild(sec_main);

    var sec_1 = document.createElement("div");
    sec_1.setAttribute("class", "sec-1");
    sec_main.appendChild(sec_1);

    if(lists[i].video === true){
        var thumbnail = document.createElement("iframe");
        thumbnail.setAttribute("src", lists[i].url);
        thumbnail.setAttribute("class", "thumbnail");
        sec_1.appendChild(thumbnail);
    }else{
        var vid_img = document.createElement("img");
        vid_img.setAttribute("class","vid_img");
        vid_img.setAttribute("src",lists[i].url);
        sec_1.appendChild(vid_img);
    }

    var sec_2 = document.createElement("div");
    sec_2.setAttribute("class", "sec-2");
    sec_main.appendChild(sec_2);

    var img_icon = document.createElement("div");
    sec_2.appendChild(img_icon);
    var icon = document.createElement("img");
    icon.setAttribute("src", lists[i].profile);
    icon.setAttribute("class", "icon");
    img_icon.appendChild(icon);

    var txt_video = document.createElement("div");
    txt_video.setAttribute("class", "txt-video");
    sec_2.appendChild(txt_video);

    var h4 = document.createElement("h4");
    h4.innerHTML = lists[i].title;
    txt_video.appendChild(h4);

    var para1 = document.createElement("span");
    para1.innerHTML = lists[i].yt_name;
    txt_video.appendChild(para1);
    if(lists[i].verified === true){
        var verified = document.createElement("img");
        verified.setAttribute("class", "verified");
        verified.setAttribute("src", " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEyWpgqfMhSbbh6JBE9uVnOZPuX8UpmC6W-ZIuzsFDT2aXD3iJxXpZwc-LsZdz3dyJlc&usqp=CAU");   
    }    
    txt_video.appendChild(verified);

    var br = document.createElement("br");
    txt_video.appendChild(br);

    var para2 = document.createElement("span");
    para2.innerHTML = lists[i].views;
    txt_video.appendChild(para2);

    var br2 = document.createElement("br");
    txt_video.appendChild(br2);

    for(var j=0;j<lists[i].tags.length;j++){
        if(j.length !== 0){
            var tags = document.createElement("span");
            tags.innerHTML = "Tags : "+ lists[i].tags
        }
    }
    txt_video.appendChild(tags);
    
}



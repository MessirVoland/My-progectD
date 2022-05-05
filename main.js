/*
class HardCodeBackEnd{
    images;
    constructor() {
        this.images=[];
        this.images.push("e4809fd9943b762a75fac4b4425add61.jpg");
        this.images.push("9c23fb3fea95ce560ed99eb44ac99041.jpg");
        this.images.push("1033987a4643f269a493b70810105657.jpg");
    }
}*/

class UserPost{
    constructor(userName, avatar, subTitle, image) {
        this.userName = userName;
        this.avatar = avatar;
        this.subTitle = subTitle;
        this.image = image;
    }
}

//HardCode BackEnd imitation
let userPosts = [];
userPosts.push(new UserPost("Normal User Name", "1033987a4643f269a493b70810105657.jpg", "by Messir Voland", "e4809fd9943b762a75fac4b4425add61.jpg"));



//let userName = document.getElementById("userName");
//let subTitle = document.getElementById("subTitle");
let postList = document.getElementById("postList");

for (let item of userPosts){

            let new_post_author_username = document.createElement("div");
            new_post_author_username.className = "postAuthor__userName";
            new_post_author_username.innerText = item.userName;

            let new_post_author_subtitle = document.createElement("div");
            new_post_author_subtitle.className = "postAuthor__subTitle";
            new_post_author_subtitle.innerText = item.subTitle;

        let new_post_author_username_and_subtitle = document.createElement("div");
        new_post_author_username_and_subtitle.appendChild(new_post_author_username);
        new_post_author_username_and_subtitle.appendChild(new_post_author_subtitle);

                let new_post_author_avatar_img = document.createElement("img");
                new_post_author_avatar_img.src = "image/" + item.avatar;
                new_post_author_avatar_img.alt = "User Avatar";

            let new_post_author_avatar = document.createElement("span");
            new_post_author_avatar.className = "postAuthor__avatar";
            new_post_author_avatar.appendChild(new_post_author_avatar_img);

        let new_post_author = document.createElement("div");
        new_post_author.className = "postAuthor";
        new_post_author.appendChild(new_post_author_avatar);
        new_post_author.appendChild(new_post_author_username_and_subtitle);

            let new_post_card_content_img = document.createElement("img");
            new_post_card_content_img.src = "image/" + item.image;
            new_post_card_content_img.className = "mb-3";
            new_post_card_content_img.alt = "example";

                let new_post_card_body_h = document.createElement("h5");
                new_post_card_body_h.innerHTML = "<b>Star Platinum</b>";

                let new_post_card_body_p = document.createElement("p");
                new_post_card_body_p.innerText = "ORA ORA ORA ORA !!!";
                new_post_card_body_p.className = "mb-1";

                    let new_post_card_body_div_span = document.createElement("span");
                    new_post_card_body_div_span.innerText = "by Messir Voland";
                    new_post_card_body_div_span.style.backgroundColor = "#dc45dc";  //background-color: rgb(170, 137, 231);
                    new_post_card_body_div_span.className = "tag";

                let new_post_card_body_div = document.createElement("div");
                new_post_card_body_div.className = "mb-2";
                new_post_card_body_div.appendChild(new_post_card_body_div_span);

            let new_post_card_body = document.createElement("div");
            new_post_card_body.className = "card-body";
            new_post_card_body.appendChild(new_post_card_body_h);
            new_post_card_body.appendChild(new_post_card_body_p);
            new_post_card_body.appendChild(new_post_card_body_div);

                let new_post_card_footer_row_jc_between = document.createElement("div");
                new_post_card_footer_row_jc_between.className = "row_jc_between";
                new_post_card_footer_row_jc_between.appendChild(new_post_card_body_div_span);

            let new_post_card_footer = document.createElement("div");
            new_post_card_footer.className = "card-footer";
            new_post_card_footer.innerText = item.subTitle;
            new_post_card_body.appendChild(new_post_card_footer_row_jc_between);


        let new_post_card_content = document.createElement("div");
        new_post_card_content.className = "cardContent curPointer";
        new_post_card_content.appendChild(new_post_card_content_img);
        new_post_card_content.appendChild(new_post_card_body);
        new_post_card_content.appendChild(new_post_card_footer);

    let new_card_header = document.createElement("div");
    new_card_header.className = "card-header";
    new_card_header.appendChild(new_post_author);
    new_card_header.appendChild(new_post_card_content);

    let new_card_white = document.createElement("div");
    new_card_white.className = "card-white";
    new_card_white.appendChild(new_card_header);

    postList.appendChild(new_card_white);
    //userName.innerText = item.userName;
    //subTitle.innerText = item.subTitle;
}
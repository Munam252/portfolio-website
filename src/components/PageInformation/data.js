import profile from "../../assets/profile.jpg";
import Insta from "../../assets/insta.png"
import Linkedin from "../../assets/linkedin.png"
import Github from "../../assets/github.png"
import Medium from "../../assets/medium.png"
import Facebook from "../../assets/fb.png"

const data = {
  profileImage: profile,
  name: "What about me?",
  description: `Hi, I am Abdullah and Welcome to my website 😊<br/> A Final Year Undergraduate Computer Science Student at <i><b>National University of Computer and Emerging Sciences FAST, Islamabad.</b></i>`,
  socialLinks: [
    { name: "Instagram", url: "https://www.instagram.com/abdullahh.tahir/", icon: Insta },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ababdullah216/", icon: Linkedin },
    { name: "Facebook", url: "https://www.facebook.com/ababdullah216", icon: Facebook} ,
    { name: "Github", url: "https://github.com/ABAbdulah", icon: Github },
    { name: "Medium", url: "https://medium.com/@ababdullah216", icon: Medium }
  ]
};

export default data;

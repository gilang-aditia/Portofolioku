const banner_help = `
██╗░░██╗███████╗██╗░░░░░██████╗░
██║░░██║██╔════╝██║░░░░░██╔══██╗
███████║█████╗░░██║░░░░░██████╔╝
██╔══██║██╔══╝░░██║░░░░░██╔═══╝░
██║░░██║███████╗███████╗██║░░░░░
╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░░░░                                                    
`;
const am_banner = `
░██████╗░██╗██╗░░░░░░█████╗░███╗░░██╗░██████╗░
██╔════╝░██║██║░░░░░██╔══██╗████╗░██║██╔════╝░
██║░░██╗░██║██║░░░░░███████║██╔██╗██║██║░░██╗░
██║░░╚██╗██║██║░░░░░██╔══██║██║╚████║██║░░╚██╗
╚██████╔╝██║███████╗██║░░██║██║░╚███║╚██████╔╝
░╚═════╝░╚═╝╚══════╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░                            
`;

const contact_banner = `
░█████╗░░█████╗░███╗░░██╗████████╗░█████╗░░█████╗░████████╗
██╔══██╗██╔══██╗████╗░██║╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝
██║░░╚═╝██║░░██║██╔██╗██║░░░██║░░░███████║██║░░╚═╝░░░██║░░░
██║░░██╗██║░░██║██║╚████║░░░██║░░░██╔══██║██║░░██╗░░░██║░░░
╚█████╔╝╚█████╔╝██║░╚███║░░░██║░░░██║░░██║╚█████╔╝░░░██║░░░
░╚════╝░░╚════╝░╚═╝░░╚══╝░░░╚═╝░░░╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░                          
`;

const src_banner = `
███╗░░░███╗██╗░░░██╗  ██████╗░██████╗░░█████╗░░░░░░██╗███████╗░█████╗░████████╗
████╗░████║╚██╗░██╔╝  ██╔══██╗██╔══██╗██╔══██╗░░░░░██║██╔════╝██╔══██╗╚══██╔══╝
██╔████╔██║░╚████╔╝░  ██████╔╝██████╔╝██║░░██║░░░░░██║█████╗░░██║░░╚═╝░░░██║░░░
██║╚██╔╝██║░░╚██╔╝░░  ██╔═══╝░██╔══██╗██║░░██║██╗░░██║██╔══╝░░██║░░██╗░░░██║░░░
██║░╚═╝░██║░░░██║░░░  ██║░░░░░██║░░██║╚█████╔╝╚█████╔╝███████╗╚█████╔╝░░░██║░░░
╚═╝░░░░░╚═╝░░░╚═╝░░░  ╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░╚════╝░╚══════╝░╚════╝░░░░╚═╝░░░                         
`;

const date_banner = `
██████╗░░█████╗░████████╗███████╗
██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
██║░░██║███████║░░░██║░░░█████╗░░
██║░░██║██╔══██║░░░██║░░░██╔══╝░░
██████╔╝██║░░██║░░░██║░░░███████╗
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░╚══════╝                              
`;

const UI_banner = `

██╗░░░██╗██╗░░░░██╗██╗░░░██╗██╗░░██╗  ██████╗░███████╗░██████╗██╗░██████╗░███╗░░██╗███████╗██████╗░
██║░░░██║██║░░░██╔╝██║░░░██║╚██╗██╔╝  ██╔══██╗██╔════╝██╔════╝██║██╔════╝░████╗░██║██╔════╝██╔══██╗
██║░░░██║██║░░██╔╝░██║░░░██║░╚███╔╝░  ██║░░██║█████╗░░╚█████╗░██║██║░░██╗░██╔██╗██║█████╗░░██████╔╝
██║░░░██║██║░██╔╝░░██║░░░██║░██╔██╗░  ██║░░██║██╔══╝░░░╚═══██╗██║██║░░╚██╗██║╚████║██╔══╝░░██╔══██╗
╚██████╔╝██║██╔╝░░░╚██████╔╝██╔╝╚██╗  ██████╔╝███████╗██████╔╝██║╚██████╔╝██║░╚███║███████╗██║░░██║
░╚═════╝░╚═╝╚═╝░░░░░╚═════╝░╚═╝░░╚═╝  ╚═════╝░╚══════╝╚═════╝░╚═╝░╚═════╝░╚═╝░░╚══╝╚══════╝╚═╝░░╚═╝                              
`;


const go_url = (url) => {
  const a = document.createElement("a");
  a.href = url;
  a.target = `_blank`;
  a.click();
};

const color = (clr, str) => {
  const colors = {
    blue: "#55f",
    green: "#4d4",
    grey: "#999",
    red: "#A00",
    yellow: "#FF5",
    violet: "#a320ce",
    white: "#fff",
  };

  if (colors[clr]) {
    return "[[;" + colors[clr] + ";]" + str + "]";
  } else {
    return str;
  }
};

const windowx = (url, windowName) => {
  newwindow = window.open(
    url,
    windowName,
    "left=700,top=10,height=400,width=600"
  );
  if (window.focus) {
    newwindow.focus();
  }
  return false;
};

// terminal
$("body").terminal(
  {
    // help
    help: function () {
      const help = $(`
        <span class="cmd">am</span> => my info
        <br>
        <span class="cmd">contact</span> => my contact
        <br>
        <span class="cmd">ping</span> => use to check your internet connection...
        <br>  
        <span class="cmd">date</span> => use to know current date-time
        <br>
        <span class="cmd">ui</span> => use to get Desain UI/UX of this project
        <br>
        <span class="cmd">src</span> => use to get source code of this project
        <br>
        <span class="cmd">cls</span> => clear or <span style="color:aqua;">(CTRL + C)</span>
        <br>
        `);
      const banner = `${color("green", banner_help)}`;
      this.echo(banner);
      this.echo(help);
    },
    // am
    am: function () {
      const am = $(`
        <span>Id : Gilang Aditia
        <br>
        Age : 22 years
        <br>
        Status : <span style="color:aqua">Alive</span>
        <br>
        Job: Frontend Developer
        <br>
        Description : Someone who works in the field of programming or more precisely as a Frontend Developer,<span style="color:aqua;"> I also have experience in the field of UI/UX Designer</span>.
        <br>
        protonmail :<span style="color:green;"> Gilang-aditia@proton.me</span>
        <br>
        Mail :<span style="color:green;"> gaditia744@gmail.com</span>
        <br>
        Github : <span style="color:green;"> <a href="https://github.com/gilang-aditia" </span>(<span class="cmd">enter</span> go github)</span>
        `);
      const banner = `${color("gray", am_banner)}`;
      this.echo(banner);
      this.echo(am);
    },

    // contact
    contact: function () {
      const contact = $(`
        <span>Telp : 0877-3288-6254
        <br>
        Mail :<span style="color:green;"> gaditia744@gmail.com</span>
        <br>
        Github : <span style="color:green;"> <a href="https://github.com/gilang-aditia" </span>(<span class="cmd">enter</span> go github)</span>
        <br>
        Linkedin : <span style="color:green;"> <a href="https://www.linkedin.com/in/gilang-aditia-b79461231/" </span>(<span class="cmd">enter</span> go linkedin)</span>
        `);
      const banner = `${color("yellow", contact_banner)}`;
      this.echo(banner);
      this.echo(contact);
    },

    //cls
    cls: function () {
      location.reload();
    },
    
    // date
    date: function () {
      const date = new Date();
      const ret = $(`<p>` + date + `</p>`);
      this.echo(date_banner);
      this.echo(ret);
    },
    //ping
    ping: function () {
      const inet = navigator.onLine;
      if (inet == true) {
        const istat = `${color("green", "I am connected to the internet...")}`;
        this.echo(istat);
      } else {
        const istato = `${color("red", "Disconnected...so sad!!!")}`;
        this.echo(istato);
      }
    },
    // UI
    ui: function () {
      const ui = $(`
      <h2>my_project UI/UX Designer & Research:$<span class="cursor">|</span></h2>
        UI Gotop : <span style="color:green;"> <a href="https://www.figma.com/file/zMlFF8vDUEL7r7d6nhAzrg/GOTOP?type=design&node-id=695%3A4181&mode=design&t=qKPf3esybypx1JbS-1" </span>(<span class="cmd">enter</span> go Project)</span>
        <br>
        UI Sedia.id : <span style="color:green;"> <a href="https://www.figma.com/file/3bco9kwkznfh4CsHqUy7sX/SEDIA.id?type=design&node-id=0%3A1&mode=design&t=DOweKiZH7BOW17AW-1" </span>(<span class="cmd">enter</span> go Project)</span>
        <br>
        UI Officely : <span style="color:green;"> <a href="https://www.figma.com/file/v3T7snuyNPpwaBRnPHxdHO/Team-UI%2FUX?type=design&node-id=199%3A1983&mode=design&t=vMtQ4gO6YkHM5vHC-1" </span>(<span class="cmd">enter</span> go Project)</span>
        <br>
        UI ELEK.Co : <span style="color:green;"> <a href="https://www.figma.com/file/HpRcDSs2wzHOrDnDkFpOwH/Elek?type=design&node-id=0%3A1&mode=design&t=pR2DGFITr3DbKST1-1" </span>(<span class="cmd">enter</span> go Project)</span>
        <br>
        
        `);
      const banner = `${color("green", UI_banner)}`;
      this.echo(banner);
      this.echo(ui);
    },
    // src
    src: function () {
      const src = $(`
      <h2>my_project Best Programming:$<span class="cursor">|</span></h2>
      PT Boga Eterna : <span style="color:green;"> <a href="https://gilang-aditia.github.io/PT_Boga/" </span>(<span class="cmd">enter</span> go Project)</span>
        <br>
        SDN 1 Teluk Purwokerto : <span style="color:green;"> <a href="https://developer-tim-sdn1-teluk.github.io/SD-Negeri-1-Teluk/" </span>(<span class="cmd">enter</span> go Project)</span>
        <br>
        Ssayomart : <span style="color:green;"> <a href="https://ssayomart.com/" </span>(<span class="cmd">enter</span> go Project)</span>
        <br>
        Compro Ssayomart : <span style="color:green;"> <a href="https://ssayomart.com/" </span>(<span class="cmd">enter</span> go Project)</span>
      <h1>other programming sourrce code projects:$<span class="cursor" style"color: white;">|</span></h1>
        Booking Room : <span style="color:green;"> <a href="https://github.com/gilang-aditia/bookingroom.git" </span>(<span class="cmd">enter</span> go Project)</span>
          <br>  
        Forsas : <span style="color:green;"> <a href="https://github.com/gilang-aditia/Forsas.git" </span>(<span class="cmd">enter</span> go Project)</span>
          <br>
        FilosofiKopi : <span style="color:green;"> <a href="https://github.com/gilang-aditia/filosofikopi.git" </span>(<span class="cmd">enter</span> go Project)</span>
          <br>
        `);
      const banner = `${color("blue", src_banner)}`;
      this.echo(banner);
      this.echo(src);
    },
    
    
  },
  {
    greetings: `

    ██░ ██ ▓█████  ██▓     ██▓     ▒█████      █     █░ ▒█████   ██▀███   ██▓    ▓█████▄ 
    ▓██░ ██▒▓█   ▀ ▓██▒    ▓██▒    ▒██▒  ██▒   ▓█░ █ ░█░▒██▒  ██▒▓██ ▒ ██▒▓██▒    ▒██▀ ██▌
    ▒██▀▀██░▒███   ▒██░    ▒██░    ▒██░  ██▒   ▒█░ █ ░█ ▒██░  ██▒▓██ ░▄█ ▒▒██░    ░██   █▌
    ░▓█ ░██ ▒▓█  ▄ ▒██░    ▒██░    ▒██   ██░   ░█░ █ ░█ ▒██   ██░▒██▀▀█▄  ▒██░    ░▓█▄   ▌
    ░▓█▒░██▓░▒████▒░██████▒░██████▒░ ████▓▒░   ░░██▒██▓ ░ ████▓▒░░██▓ ▒██▒░██████▒░▒████▓ 
     ▒ ░░▒░▒░░ ▒░ ░░ ▒░▓  ░░ ▒░▓  ░░ ▒░▒░▒░    ░ ▓░▒ ▒  ░ ▒░▒░▒░ ░ ▒▓ ░▒▓░░ ▒░▓  ░ ▒▒▓  ▒ 
     ▒ ░▒░ ░ ░ ░  ░░ ░ ▒  ░░ ░ ▒  ░  ░ ▒ ▒░      ▒ ░ ░    ░ ▒ ▒░   ░▒ ░ ▒░░ ░ ▒  ░ ░ ▒  ▒ 
     ░  ░░ ░   ░     ░ ░     ░ ░   ░ ░ ░ ▒       ░   ░  ░ ░ ░ ▒    ░░   ░   ░ ░    ░ ░  ░ 
     ░  ░  ░   ░  ░    ░  ░    ░  ░    ░ ░         ░        ░ ░     ░         ░  ░   ░    
                                                                                   ░   
                                  Hello User! I am Gilang
                            Use "help" command to get view "menu"
                            
                            ProtonMail : Gilang-aditia@proton.me
                                Mail : gaditia744@gmail.com

    `,
    prompt() {
      return `┌──(${color("green", "Gilang")}${color("yellow", "@Terminal")})-[${color(
        "blue",
        "~/"
      )}]
└─\$ `;
    },
    keymap: {
      "CTRL+C": function (e, original) {
        location.reload();
      },
    },
  }
);



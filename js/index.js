( async () => {

/* require */
require('mofron');
const Text=require("mofron-comp-text");
const Image=require("mofron-comp-image");
const Button=require("mofron-comp-ujarak");
const AppBase=require("mofron-comp-appbase");
const Table=require("mofron-comp-table");
const Click=require("mofron-event-click");
const Border=require("mofron-effect-border");
const efWidth=require("mofron-effect-width");
const Fade=require("mofron-effect-fade");
const HrzCent=require("mofron-layout-hrzcenter");
const loMargin=require("mofron-layout-margin");
const Grid=require("mofron-layout-grid");
const comutl=mofron.util.common;
const cmputl=mofron.util.component;
try {

    /* script (extern) */

    /* script (init) */
    let close_menu = () => {
        try {
            leftMenu.execEffect(2);
            mainConts.execEffect(2);
    	menubar_img.visible(true);
        } catch (e) {
            console.error(e.stack);
    	throw e;
        }
    }
    
    let open_menu = () => {
        try {
            leftMenu.execEffect(3);
            mainConts.execEffect(3);
    	menubar_img.visible(false);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    
    //.row([
    //            new Text({ size:'0.45rem', font:"'Nico Moji'", 'mainColor':[90,90,90], text:order[oidx].item }),
    //            new Text({ size:'0.45rem', font:"'Nico Moji'", 'mainColor':[90,90,90], text:order[oidx].count+"さら" }),
    //            new Text({ size:'0.45rem', font:"'Nico Moji'", 'mainColor':[90,90,90], text:"￥"+order[oidx].price*order[oidx].count })
    //        ]);
    

    /* template */

    /* component */
    let leftMenu_0_0=new Image();
    let leftMenu_0=new mofron.class.Component();
    let leftMenu_1_0=new Text();
    let leftMenu_1_1=new Text("Logs");
    let leftMenu_1_2=new Text("Data");
    let leftMenu_1_3=new Text("Access");
    let leftMenu_1_4=new Text("License");
    let leftMenu_1=new mofron.class.Component();
    let leftMenu=new mofron.class.Component();
    let menubar_img=new Image();
    let mainConts_0_0=new Button("Create API");
    let mainConts_0=new mofron.class.Component();
    let api_table=new Table();
    let mainConts_1=new mofron.class.Component();
    let mainConts=new mofron.class.Component();
    let cmp0_0=new mofron.class.Component();
    let cmp0=new AppBase();
    let root_cmp=new mofron.class.Component();
    leftMenu_0.child([leftMenu_0_0]);
    leftMenu_1.child([leftMenu_1_0,leftMenu_1_1,leftMenu_1_2,leftMenu_1_3,leftMenu_1_4]);
    leftMenu.child([leftMenu_0,leftMenu_1]);
    mainConts_0.child([menubar_img,mainConts_0_0]);
    mainConts_1.child([api_table]);
    mainConts.child([mainConts_0,mainConts_1]);
    cmp0_0.child([leftMenu,mainConts]);
    cmp0.child([cmp0_0]);
    root_cmp.child([cmp0]);
    leftMenu_0_0.config({size:new mofron.class.ConfArg("0.25rem","0.25rem"),style:{'margin':'0.1rem'},event:new Click(close_menu),src:"./img/left.svg"});
    leftMenu_0.config({style:{'display':'flex',' justify-content':'flex-end'}});
    leftMenu_1_0.config({size:"0.18rem",style:new mofron.class.ConfArg({'margin-top':'0.1rem'},{locked:true}),text:"APIs"});
    leftMenu_1_1.config({size:"0.18rem"});
    leftMenu_1_2.config({size:"0.18rem"});
    leftMenu_1_3.config({size:"0.18rem"});
    leftMenu_1_4.config({size:"0.18rem"});
    let lot1=new loMargin("top","0.1rem");
    let lot2=new loMargin("left","0.2rem");
    leftMenu_1.config({layout:[new loMargin("top","0.1rem"),[lot1,lot2]]});
    let eff3=new Border();
    eff3.config({position:"right",color:[180,180,180]});
    let eff4=new efWidth();
    eff4.config({eid:2,toValue:"0%",speed:300});
    let eff5=new efWidth();
    eff5.config({eid:3,toValue:"13%",speed:300});
    leftMenu.config({name:"leftMenu",style:{'overflow':'hidden'},effect:[eff3,eff4,eff5]});
    let evt6=new Click(open_menu);
    let eff7=new Fade(true,300);
    let eff8=new Fade(false,300);
    menubar_img.config({name:"menubar_img",visible:false,event:evt6,effect:[eff7,eff8],size:new mofron.class.ConfArg("0.25rem","0.25rem"),src:"./img/menubar.svg"});
    mainConts_0_0.config({size:new mofron.class.ConfArg("2rem","0.3rem")});
    let lot9=new loMargin("top","0.1rem");
    let lot10=new loMargin("left","0.2rem");
    mainConts_0.config({style:{'display':'flex'},layout:[lot9,lot10]});
    let cmp11=new Text("Name");
    let cmp12=new Text("ID");
    let cmp13=new Text("Status");
    let cmp14=new Text("Type");
    let cmp15=new Text("Expires");
    api_table.config({name:"api_table",rules:"under",rowHeight:"0.8rem",columnWidth:["1rem","1.5rem","1rem","1.5rem"],head:[cmp11,cmp12,cmp13,cmp14,cmp15]});
    mainConts_1.config({layout:new HrzCent(85),style:{'margin-top':'0.2rem'}});
    let eff16=new efWidth();
    eff16.config({eid:2,toValue:"99%",speed:300});
    let eff17=new efWidth();
    eff17.config({eid:3,toValue:"85%",speed:300});
    mainConts.config({name:"mainConts",style:{'min-height':'100vh'},effect:[eff16,eff17]});
    cmp0_0.config({layout:new Grid([13,85])});
    let cmp18=new Text();
    cmp18.config({text:"Sign-Out"});
    cmp0.config({title:"Kumiki-Search",mainColor:[255,255,255],header:new mofron.class.PullConf({navi:cmp18})});
    root_cmp.config({theme:{Text:{config:{font:"'M PLUS Rounded 1c'",mainColor:[80,80,80]}}}});

    /* script (before) */

    /* start visible */
    mofron.root.push(root_cmp);
    setTimeout(()=>{
        root_cmp.visible(true,() => {
            try{
            /* script (after) */

            } catch(e) {
                console.error(e.stack);
            }
        });
    },100);
} catch (e) {
    console.error(e.stack);
}

})();
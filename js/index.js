( async () => {

/* require */
require('mofron');
const Text=require("mofron-comp-text");
const Frame=require("mofron-comp-frame");
const Image=require("mofron-comp-image");
const Button=require("mofron-comp-ujarak");
const AppBase=require("mofron-comp-appbase");
const Table=require("mofron-comp-table");
const MenuText=require("mofron-comp-menutext");
const Split=require("mofron-comp-dev");
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
    
    let select_menu = (p1,p2,p3) => {
    }
    

    /* template */

    /* component */
    let leftMenu_0_0=new Image();
    let leftMenu_0=new mofron.class.Component();
    let leftMenu_1_0=new MenuText();
    let leftMenu_1=new mofron.class.Component();
    let leftMenu=new mofron.class.Component();
    let hrz_split_0=new mofron.class.Component();
    let hrz_split_1=new mofron.class.Component();
    let hrz_split=new Split();
    let cmp0_0=new mofron.class.Component();
    let cmp0=new AppBase();
    let root_cmp=new mofron.class.Component();
    leftMenu_0.child([leftMenu_0_0]);
    leftMenu_1.child([leftMenu_1_0]);
    leftMenu.child([leftMenu_0,leftMenu_1]);
    hrz_split.child([hrz_split_0,hrz_split_1]);
    cmp0_0.child([leftMenu,hrz_split]);
    cmp0.child([cmp0_0]);
    root_cmp.child([cmp0]);
    leftMenu_0_0.config({size:new mofron.class.ConfArg("0.25rem","0.25rem"),style:{'margin':'0.1rem'},event:new Click(close_menu),src:"./img/left.svg"});
    leftMenu_0.config({style:{'display':'flex',' justify-content':'flex-end'}});
    leftMenu_1_0.config({text:"APIs"});
    leftMenu_1_0.config({text:"Access"});
    leftMenu_1_0.config({text:"License"});
    leftMenu_1_0.config({text:"Support"});
    leftMenu_1_0.config({selectEvent:select_menu});
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
    hrz_split.config({name:"hrz_split",ratio:new mofron.class.ConfArg(55,45)});
    cmp0_0.config({layout:new Grid([13,85])});
    let cmp6=new Text();
    cmp6.config({text:"Sign-Out"});
    cmp0.config({title:new mofron.class.ConfArg("Kumiki-Search","./img/logo.png"),mainColor:[255,255,255],header:new mofron.class.PullConf({navi:cmp6})});
    root_cmp.config({theme:{Text:{config:{font:"'M PLUS Rounded 1c'",mainColor:[80,80,80]}}}});

    /* script (before) */
    hrz_split.height((window.innerHeight-50)+"px");

    /* start visible */
    mofron.root.push(root_cmp);
    setTimeout(()=>{
        root_cmp.visible(true,() => {
            try{
            /* script (after) */
        api_table.insert([
            new Frame({ size:new mofron.class.ConfArg("0.18rem","0.18rem") }),
            new Text({ text:"aaa", style:{"margin-left":"0.1rem;"} }),
            new Text({ text:"bbb", style:{"margin-left":"0.1rem;"} }),
            new Text({ text:"ccc", style:{"margin-left":"0.1rem;"} }),
            new Text({ text:"ddd", style:{"margin-left":"0.1rem;"} }),
            new Text({ text:"eee", style:{"margin-left":"0.1rem;"} }),
        ]);

            } catch(e) {
                console.error(e.stack);
            }
        });
    },100);
} catch (e) {
    console.error(e.stack);
}

})();
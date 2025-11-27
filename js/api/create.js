( async () => {

/* require */
require('mofron');
const Text=require("mofron-comp-text");
const AppBase=require("mofron-comp-appbase");
const Image=require("mofron-comp-image");
const Click=require("mofron-event-click");
const Grid=require("mofron-layout-grid");
const bodyfade=require("mofron-util-bodyfade");
const loMargin=require("mofron-layout-margin");
const MenuText=require("mofron-comp-menutext");
const Border=require("mofron-effect-border");
const comutl=mofron.util.common;
const cmputl=mofron.util.component;
try {

    /* script (extern) */

    /* script (init) */
    function back_event () {
        bodyfade.fadeout(() => {
            location.href = "./index.html";
        });
    }
    function select_menu () {
        try {
            
        } catch (e) {
            console.error(e.stack);
    	throw e;
        }
    }

    /* template */

    /* component */
    let leftMenu_0_0=new MenuText();
    let leftMenu_0=new mofron.class.Component();
    let leftMenu=new mofron.class.Component();
    let cmp0_0_0_0_0=new Image();
    let cmp0_0_0_0_1=new Text("Back");
    let cmp0_0_0_0=new mofron.class.Component();
    let cmp0_0_0=new mofron.class.Component();
    let cmp0_0=new mofron.class.Component();
    let cmp0=new AppBase();
    let root_cmp=new mofron.class.Component();
    leftMenu_0.child([leftMenu_0_0]);
    leftMenu.child([leftMenu_0]);
    cmp0_0_0_0.child([cmp0_0_0_0_0,cmp0_0_0_0_1]);
    cmp0_0_0.child([cmp0_0_0_0]);
    cmp0_0.child([leftMenu,cmp0_0_0]);
    cmp0.child([cmp0_0]);
    root_cmp.child([cmp0]);
    leftMenu_0_0.config({text:"APIs"});
    leftMenu_0_0.config({text:"Access"});
    leftMenu_0_0.config({text:"License"});
    leftMenu_0_0.config({text:"Support"});
    leftMenu_0_0.config({selectEvent:select_menu});
    let lot1=new loMargin("top","0.1rem");
    let lot2=new loMargin("left","0.2rem");
    leftMenu_0.config({layout:[new loMargin("top","0.1rem"),[lot1,lot2]]});
    let eff3=new Border();
    eff3.config({position:"right",color:[180,180,180]});
    leftMenu.config({name:"leftMenu",style:{'overflow':'hidden'},effect:eff3});
    cmp0_0_0_0_0.config({size:new mofron.class.ConfArg("0.3rem","0.3rem"),style:{'margin-left':'0.1rem'},event:new Click(back_event),src:"../img/left.svg"});
    cmp0_0_0_0_1.config({size:"0.23rem",style:{'margin-left':'0.1rem'},event:new Click(back_event)});
    cmp0_0_0_0.config({style:{'display':'flex','align-items':'center','margin-top':'0.1rem'}});
    cmp0_0.config({layout:new Grid([13,85])});
    let cmp4=new Text();
    cmp4.config({text:"Sign-Out"});
    cmp0.config({title:new mofron.class.ConfArg("Kumiki-Search","../img/logo.png"),mainColor:[255,255,255],header:new mofron.class.PullConf({navi:cmp4})});
    root_cmp.config({theme:{Text:{config:{font:"'M PLUS Rounded 1c'",mainColor:[80,80,80]}}}});

    /* script (before) */

    /* start visible */
    mofron.root.push(root_cmp);
    setTimeout(()=>{
        root_cmp.visible(true,() => {
            try{
            /* script (after) */
        bodyfade.speed(200,200);
        bodyfade.fadein();

            } catch(e) {
                console.error(e.stack);
            }
        });
    },100);
} catch (e) {
    console.error(e.stack);
}

})();
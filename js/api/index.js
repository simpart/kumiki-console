( async () => {

/* require */
require('mofron');
const Text=require("mofron-comp-text");
const CheckBox=require("../../mof/js/ComCheck.js");
const Image=require("mofron-comp-image");
const Button=require("mofron-comp-ujarak");
const AppBase=require("mofron-comp-appbase");
const Table=require("mofron-comp-table");
const MenuText=require("mofron-comp-menutext");
const Split=require("mofron-comp-hrzsplit");
const Click=require("mofron-event-click");
const Border=require("mofron-effect-border");
const efWidth=require("mofron-effect-width");
const Fade=require("mofron-effect-fade");
const HrzCent=require("mofron-layout-hrzcenter");
const loMargin=require("mofron-layout-margin");
const Grid=require("mofron-layout-grid");
const bodyfade=require("mofron-util-bodyfade");
const comutl=mofron.util.common;
const cmputl=mofron.util.component;
try {

    /* script (extern) */

    /* script (init) */
    let SEL_API_IDX = null;
    let select_api  = (s1,s2,s3) => {
        try {
            let tr_lst      = api_table.childDom().child();
    	let SEL_API_IDX = null;
    	for (let tidx in tr_lst) {
                let chk_cmp = tr_lst[tidx].child()[0].child()[0].component();
                if ((s1.id() == chk_cmp.id()) && (s2 === true)) {
                    tr_lst[tidx].style({ "background": "rgb(240,240,240)" });
    		SEL_API_IDX = parseInt(tidx);
    		continue;
    	    }
    	    tr_lst[tidx].style({ "background": "rgb(255,255,255)" });
    	}
    
    	// notify detail area
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    const MENU_URL_MAP = [
        "../api/index.html",
        "../credentials/index.html",
        "../license/index.html",
        "../plans/index.html",
        "../support/index.html"
    ];
    
    function select_menu (s1,s2,s3) {
        try {
            bodyfade.fadeout(() => {
    	    location.href = MENU_URL_MAP[s2];
    	});
        } catch (e) {
            console.error(e.stack);
    	throw e;
        }
    }
    function create_btn_event () {
        bodyfade.fadeout(() => {
            location.href = "./create.html";
        });
    }

    /* template */

    /* component */
    let left_menu=new MenuText();
    let leftMenu_0=new mofron.class.Component();
    let leftMenu=new mofron.class.Component();
    let api_area_0_0_0=new Button("Create API");
    let api_area_0_0=new mofron.class.Component();
    let api_table=new Table();
    let api_area_0_1=new mofron.class.Component();
    let api_area_0=new mofron.class.Component();
    let api_area_1=new mofron.class.Component();
    let api_area=new Split();
    let appbase_0=new mofron.class.Component();
    let appbase=new AppBase();
    let root_cmp=new mofron.class.Component();
    leftMenu_0.child([left_menu]);
    leftMenu.child([leftMenu_0]);
    api_area_0_0.child([api_area_0_0_0]);
    api_area_0_1.child([api_table]);
    api_area_0.child([api_area_0_0,api_area_0_1]);
    api_area.child([api_area_0,api_area_1]);
    appbase_0.child([leftMenu,api_area]);
    appbase.child([appbase_0]);
    root_cmp.child([appbase]);
    left_menu.config({text:"APIs"});
    left_menu.config({text:"Credentials"});
    left_menu.config({text:"License"});
    left_menu.config({text:"Plans"});
    left_menu.config({text:"Support"});
    left_menu.config({name:"left_menu",selectEvent:select_menu});
    let lot0=new loMargin("top","0.1rem");
    let lot1=new loMargin("left","0.2rem");
    leftMenu_0.config({layout:[new loMargin("top","0.1rem"),[lot0,lot1]]});
    let eff2=new Border();
    eff2.config({position:"right",color:[180,180,180]});
    leftMenu.config({name:"leftMenu",style:{'overflow':'hidden'},effect:eff2});
    api_area_0_0_0.config({size:new mofron.class.ConfArg("2rem","0.3rem"),clickEvent:create_btn_event});
    let lot3=new loMargin("top","0.2rem");
    let lot4=new loMargin("left","0.2rem");
    api_area_0_0.config({style:{'display':'flex'},layout:[lot3,lot4]});
    let cmp5=new Text(" ");
    let cmp6=new Text("Name");
    cmp6.config({style:{'margin-left':'0.1rem'}});
    let cmp7=new Text("Index-ID");
    cmp7.config({style:{'margin-left':'0.1rem'}});
    let cmp8=new Text("Status");
    cmp8.config({style:{'margin-left':'0.1rem'}});
    let cmp9=new Text("Type");
    cmp9.config({style:{'margin-left':'0.1rem'}});
    let cmp10=new Text("Expires");
    cmp10.config({style:{'margin-left':'0.1rem'}});
    api_table.config({name:"api_table",rules:"under",rowHeight:"0.4rem",mainColor:[230,230,230],columnWidth:["0.6rem","2rem","1.5rem","1rem","1.5rem"],align:["center","left","left","left","left","left"],head:[cmp5,cmp6,cmp7,cmp8,cmp9,cmp10]});
    api_area_0_1.config({layout:new HrzCent(85),style:{'margin-top':'0.2rem'}});
    api_area.config({name:"api_area",ratio:new mofron.class.ConfArg(40,60)});
    appbase_0.config({layout:new Grid([13,85])});
    let cmp11=new Text();
    cmp11.config({text:"Sign-Out"});
    appbase.config({name:"appbase",title:new mofron.class.ConfArg("Kumiki-Search","../img/logo.png"),mainColor:[255,255,255],header:new mofron.class.PullConf({navi:cmp11})});
    root_cmp.config({theme:{Text:{config:{font:"'M PLUS Rounded 1c'",mainColor:[80,80,80]}}}});

    /* script (before) */
    api_area.height((window.innerHeight-50)+"px");

    /* start visible */
    mofron.root.push(root_cmp);
    setTimeout(()=>{
        root_cmp.visible(true,() => {
            try{
            /* script (after) */
        api_table.insert([
            new CheckBox({ image:"../img/check.svg", changeEvent:select_api }),
            new Text({ text:"aaa", style:{"margin-left":"0.1rem;"} }),
            new Text({ text:"bbb", style:{"margin-left":"0.1rem;"} }),
            new Text({ text:"ccc", style:{"margin-left":"0.1rem;"} }),
            new Text({ text:"ddd", style:{"margin-left":"0.1rem;"} }),
            new Text({ text:"eee", style:{"margin-left":"0.1rem;"} }),
        ]);
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
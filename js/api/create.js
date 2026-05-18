( async () => {

/* require */
require('mofron');
const Text=require("mofron-comp-text");
const AppBase=require("mofron-comp-appbase");
const Image=require("mofron-comp-image");
const ErrorMsg=require("mofron-comp-errmsg");
const Button=require("mofron-comp-ujarak");
const PlanFrame=require("../../mof/js/PlanFrame.js");
const Input=require("../../mof/js/Input.js");
const Fade=require("mofron-effect-fade");
const Click=require("mofron-event-click");
const Grid=require("mofron-layout-grid");
const HrzCenter=require("mofron-layout-hrzcenter");
const loMargin=require("mofron-layout-margin");
const bodyfade=require("mofron-util-bodyfade");
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
    
    function plan_select_evt (s1,s2,s3) {
        try {
            let plan_lst = plans.child();
            let desc_lst = plan_desc.child();
    
            for (let idx in plan_lst) {
    	    if (s1.id() === plan_lst[idx].id()) {
                    plan_lst[idx].select(true);
                    desc_lst[idx].visible(true);
    	    } else {
                    plan_lst[idx].select(false);
    		desc_lst[idx].visible(false);
                }
    	}
            plan_desc.child()[plan_idx].visible();;
    
        } catch (e) {
            console.error(e.stack);
    	throw e;
        }
    }
    
    function create_evt (c1,c2,c3) {
        try {
            const name_raw = api_name.value();
            // null check
            if (name_raw === null || name_raw === undefined) {
                error.error("API Name is required.");
                return;
            }
    
            // trim to check empty / spaces-only
            const name = name_raw.trim();
            if (name === "") {
                error.error("API Name cannot be empty or whitespace only.");
                return;
            }
    
            // 半角英数字だけ（必要なら _ と - を追加）
            // 今は a-z0-9 のみ
            const re = /^[A-Za-z][A-Za-z0-9_-]*$/
            if (!re.test(name)) {
                error.error("API Name must start with a letter and contain only letters, numbers, hyphens (-), or underscores (_).");
                return;
            }
    
    	if (name.length < 3 || name.length > 32) {
    	    error.error("API Name must be between 3 and 32 characters.");
    	    return;
            }
            
            const desc_raw = api_desc.value();
            // desc はオプションなので、null/undefined は許可
            if (desc_raw != null) {
                const desc = desc_raw.trim();
                
                // 改行を禁止（1行のみ）
                if (/\r|\n/.test(desc)) {
                    error.error("Description must be a single line (no line breaks).");
                    return;
                }
                
                // ASCII printable のみ許可 (0x20〜0x7E)
                const re_desc = /^[\x20-\x7E]*$/;
                if (!re_desc.test(desc)) {
                    error.error("Description may contain only alphanumeric and standard ASCII symbols.");
                    return;
                }
                
                // 長さチェック
                if (desc.length > 64) {
                    error.error("Description must be 64 characters or fewer.");
                    return;
                }
            }
            
            let plan_lst = plans.child();
            let selected = false;
            for (let pidx in plan_lst) {
                if (plan_lst[pidx].select() === true) {
                    selected = true;
                    break;
                }
            }
            
            if (selected === false) {
                error.error("Please select a plan for this API.");
    	    return;
            }
    
    	error.error(null);
        } catch (e) {   
            console.error(e.stack);
            throw e;        
        }
    }
    const MENU_URL_MAP = [
        "../api/index.html",
        "../usage/index.html",
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

    /* template */

    /* component */
    let left_menu=new MenuText();
    let leftMenu_0=new mofron.class.Component();
    let leftMenu=new mofron.class.Component();
    let cmp0_0_0_0=new Text("Create New Search Index");
    let cmp0_0_0_1_0=new Image();
    let cmp0_0_0_1_1=new Text("Back");
    let cmp0_0_0_1=new mofron.class.Component();
    let error=new ErrorMsg();
    let api_name=new Input();
    let cmp0_0_0_2_0=new mofron.class.Component();
    let api_desc=new Input();
    let cmp0_0_0_2_1=new mofron.class.Component();
    let cmp0_0_0_2_2_0=new Text("Deployment Plan:");
    let plans_0=new PlanFrame();
    let plans_1=new PlanFrame();
    let plans_2=new PlanFrame();
    let plans=new mofron.class.Component();
    let plan_desc_0=new Text("Runs on cost-efficient shared infrastructure. Resources are shared across multiple users, while all data is strictly isolated. Ideal for trying out core API features with minimal setup.");
    let plan_desc_1=new Text("Runs on an isolated resource stack dedicated to your API. The execution environment is not shared with other users, providing full isolation. This ensures consistent performance and stability without external interference.");
    let plan_desc_2=new Text("Runs within your own AWS account. While the service is managed by us, the underlying infrastructure remains under your control. Ensures full data sovereignty, security, and compliance while using our API platform.");
    let plan_desc=new mofron.class.Component();
    let cmp0_0_0_2_2=new mofron.class.Component();
    let cmp0_0_0_2_3_0=new Button();
    let cmp0_0_0_2_3=new mofron.class.Component();
    let cmp0_0_0_2_4=new mofron.class.Component();
    let cmp0_0_0_2=new mofron.class.Component();
    let cmp0_0_0=new mofron.class.Component();
    let cmp0_0=new mofron.class.Component();
    let cmp0=new AppBase();
    let root_cmp=new mofron.class.Component();
    leftMenu_0.child([left_menu]);
    leftMenu.child([leftMenu_0]);
    cmp0_0_0_1.child([cmp0_0_0_1_0,cmp0_0_0_1_1]);
    cmp0_0_0_2_0.child([api_name]);
    cmp0_0_0_2_1.child([api_desc]);
    plans.child([plans_0,plans_1,plans_2]);
    plan_desc.child([plan_desc_0,plan_desc_1,plan_desc_2]);
    cmp0_0_0_2_2.child([cmp0_0_0_2_2_0,plans,plan_desc]);
    cmp0_0_0_2_3.child([cmp0_0_0_2_3_0]);
    cmp0_0_0_2.child([error,cmp0_0_0_2_0,cmp0_0_0_2_1,cmp0_0_0_2_2,cmp0_0_0_2_3,cmp0_0_0_2_4]);
    cmp0_0_0.child([cmp0_0_0_0,cmp0_0_0_1,cmp0_0_0_2]);
    cmp0_0.child([leftMenu,cmp0_0_0]);
    cmp0.child([cmp0_0]);
    root_cmp.child([cmp0]);
    left_menu.config({text:"APIs"});
    left_menu.config({text:"Usage"});
    left_menu.config({text:"Support"});
    left_menu.config({name:"left_menu",selectEvent:select_menu});
    let lot1=new loMargin("top","0.1rem");
    let lot2=new loMargin("left","0.2rem");
    leftMenu_0.config({layout:[new loMargin("top","0.1rem"),[lot1,lot2]]});
    let eff3=new Border();
    eff3.config({position:"right",color:[180,180,180]});
    leftMenu.config({name:"leftMenu",style:{'overflow':'hidden'},effect:eff3});
    cmp0_0_0_0.config({size:"0.3rem",weight:700,style:{'text-align':'center','margin-top':'0.1rem'}});
    cmp0_0_0_1_0.config({size:new mofron.class.ConfArg("0.25rem","0.25rem"),style:{'margin-left':'0.1rem'},event:new Click(back_event),src:"../img/left.svg"});
    cmp0_0_0_1_1.config({size:"0.2rem",style:{'margin-left':'0.1rem'},event:new Click(back_event)});
    cmp0_0_0_1.config({style:{'display':'flex','align-items':'center','margin-top':'0.1rem','position':'relative','top':'-0.5rem'}});
    let eff4=new Fade();
    error.config({name:"error",effect:eff4});
    api_name.config({name:"api_name",label:"Index Name:",width:"5rem",font:"'M PLUS Rounded 1c'"});
    api_desc.config({name:"api_desc",label:"Description:",width:"8rem",font:"'M PLUS Rounded 1c'"});
    cmp0_0_0_2_2_0.config({size:"0.2rem"});
    plans_0.config({selectEvent:plan_select_evt,planName:"Free",price:"$0",request:"10K",deploy:"Shared Infra",indexSize:"10MB"});
    plans_1.config({selectEvent:plan_select_evt,planName:"Standard",price:"$200/Annual",request:"100K",deploy:"Dedicated Tenant",indexSize:"300MB"});
    plans_2.config({selectEvent:plan_select_evt,planName:"Pro",price:"Coming Soon",request:"Unlimited",deploy:"BYOC Deployment(AWS)",indexSize:"1000MB+"});
    plans.config({name:"plans",layout:new Grid([33,33,33]),style:{'margin-top':'0.1rem'}});
    plan_desc_0.config({size:"0.2rem",visible:false});
    plan_desc_1.config({size:"0.2rem",visible:false});
    plan_desc_2.config({size:"0.2rem",visible:false});
    plan_desc.config({name:"plan_desc",style:{'margin-top':'0.1rem'}});
    cmp0_0_0_2_3_0.config({size:new mofron.class.ConfArg("2.5rem","0.3rem"),clickEvent:create_evt,style:{'display':'block','margin':'0 auto'},text:"Next"});
    let lot5=new HrzCenter(80);
    let lot6=new loMargin("top","0.4rem");
    cmp0_0_0_2.config({layout:[lot5,lot6]});
    cmp0_0.config({layout:new Grid([13,85])});
    let cmp7=new Text();
    cmp7.config({text:"Sign-Out"});
    cmp0.config({title:new mofron.class.ConfArg("Kumiki-Search","../img/logo.png"),mainColor:[255,255,255],header:new mofron.class.PullConf({navi:cmp7})});
    root_cmp.config({theme:{Text:{config:{font:"'M PLUS Rounded 1c'",mainColor:[80,80,80]}}}});

    /* script (before) */
    left_menu.initialIndex(0);

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
/**
 * @file PlanFrame.js
 * @brief  plan frame component for kumiki
 */
const Frame     = require("mofron-comp-frame");
const Text      = require("mofron-comp-text");
const loMargin  = require("mofron-layout-margin");
const Button    = require("mofron-comp-ujarak");
const Line      = require("mofron-comp-line");
const MouseOver = require("mofron-event-mouseover");
const MouseOut  = require("mofron-event-mouseout");
const efWidth   = require("mofron-effect-width");
const Border    = require("mofron-effect-border");
const comutl    = mofron.util.common;
const ConfArg   = mofron.class.ConfArg;

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("PlanFrame");
            this.shortForm("");
            
            /* init config */
            this.confmng().add('selectEvent', { type:'event', list:true });
	    this.confmng().add('selected', { type:'boolean', init:false });
            
            if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts () {
        try {
	    super.initDomConts();

            /* frame */
            this.frame().config({
	        size:   new ConfArg('95%', null),
	        style:  { 'margin':'0 auto', 'text-align':'center' },
	        layout: new loMargin('top','0.15rem'),
		effect: [
                    new Border({ eid:2, speed:150, color:"#37474f", width:"0.04rem" }),
		    new Border({ eid:3, speed:150, color:[90,90,90], width:"0.01rem" })
		],
		event:  [
		    new MouseOver(new ConfArg(this.mouseEvent,[this,"over"])),
		    new MouseOut(new ConfArg(this.mouseEvent,[this,"out"]))
		],
	        baseColor: "#f8f8f8",
            });
	    this.child(this.frame());
            
            /* plan */
	    this.planName().weight(700);
	    this.planName().size("0.3rem");
            let plan_area = new mofron.class.Component({
	                        style: { 'padding-bottom': '0.15rem' },
				child: [this.planName(),this.line()]
			    });
	    this.frame().child(plan_area);		
            
            /* price */
	    this.price().size("0.25rem");
	    this.frame().child(this.price());
            
            /* request limit */
            this.request().size("0.25rem");
            this.frame().child(this.request());
            
	    /* deploy type */
	    this.deploy().size("0.25rem");
	    this.frame().child(this.deploy());
            
            this.indexSize().size("0.25rem");
	    this.frame().child(this.indexSize());

            /* detail */
            //this.detail().size('0.2rem');
            //this.detail().text('View Details');
            //this.frame().child(this.detail());
            
            /* select */
//            this.button().config({
//                text: 'Select',
//                width: '70%', height:'0.3rem',
//		baseColor: [255,255,255],
//		clickEvent: new ConfArg(
//		                (c1,c2,c3) => {
//		                    let evt = c3.selectEvent();
//				    evt.forEach((item,idx) => { item[0](c3,null,item[1]); });
//		                },
//				this
//                            )
//            });
//	    this.frame().child(this.button());

            /* padding */
            this.frame().child(
                new mofron.class.Component({
                    height: '0.2rem',
                    width:  '100%'
                })
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    mouseEvent (p1,p2,p3) {
        try {
            let frame = p3[0];
	    let eid   = 2;
            if (p3[1] == "out") {
                eid = 3;
	    }
	    frame.line().execEffect(eid);

	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    selectEvent (fnc,prm) {
        try {
            if (undefined === fnc) {
                return this.confmng('selectEvent');
            }
            this.confmng('selectEvent', [fnc,prm]);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    select (flg) {
        try {
	    if (flg === undefined) {
                return this.confmng('selected');
	    }
	    this.confmng('selected', flg);
	    this.frame().event({ modname:"MouseOut" }).suspend(flg);
            if (flg === true) {
	        this.frame().execEffect(2);
            } else {
                this.line().width("0rem");
		this.frame().execEffect(3);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    line (prm) {
        try {
            if (comutl.isinc(prm,"line")) {
                prm.config({
                    style: { 'margin':'auto' },
                    width: '0rem',
                    thickness: '0.03rem',
                    baseColor: [195,154,96],
                    effect:    [
                        new efWidth({ eid:2, speed:150, toValue:'2rem' }),
                        new efWidth({ eid:3, speed:150, toValue:'0rem' }),
                    ]
                });
            }
            return this.innerComp('line', prm, Line);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    frame (prm) {
        try {
            return this.innerComp('frame', prm, Frame);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    planName (prm) {
        try {
            return this.innerComp('planName', prm, Text);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    deploy (prm) {
        try {
            return this.innerComp('deploy', prm, Text);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }

    price (prm) {
        try {
//            let set_prm = prm
//            if (typeof prm === 'number') {
//                set_prm = '$' + set_prm + '/month';
//            }
            return this.innerComp('price', prm, Text);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    request (prm) {
        try {
	     let set_prm = prm;
	     if ("Unlimited" == prm) {
	         set_prm = prm;
             } else if (typeof prm === 'string') {
                 set_prm = set_prm + ' req/month';
	     }
            return this.innerComp('request', set_prm, Text);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }

    indexSize(prm) {
        try {
	    let set_prm = prm;
	    if (typeof prm === 'string') {
                set_prm = set_prm + ' index';
	    }
            return this.innerComp('indexSize', set_prm, Text);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }

    remain (prm) {
        try {
            return this.innerComp('remain', prm, Text);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    detail (prm) {
        try {
            return this.innerComp('detail', prm, Text);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    button (prm) {
        try {
            return this.innerComp('button', prm, Button);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}

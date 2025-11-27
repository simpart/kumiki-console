/**
 * @file mofron-comp-comcheck/index.js
 * @brief common checkbox mofron component
 * @license MIT
 */
const CheckBox = require("mofron-comp-checkbox");
const Frame    = require("mofron-comp-frame");
const Image    = require("mofron-comp-image");
const Click    = require("mofron-event-click");
const comutl   = mofron.util.common;
const ConfArg  = mofron.class.ConfArg;

module.exports = class extends CheckBox {
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
            this.modname("ComCheck");
            this.shortForm("");
            
            /* init config */
            this.confmng().add("checked", { type:'boolean', init:false })
            
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
            this.rootDom(
                new mofron.class.Dom("div", this)
            );
            
            let comp = this;
            
	    /* frame config */
	    this.frame().config({
                size: new ConfArg('0.18rem','0.18rem'),
		event: new Click(()=>{ comp.checked(!comp.checked()) })
	    });
	    
	    /* image config */
            this.image().config({
	        size:  new ConfArg("0.15rem","0.15rem"),
		visible: false
            });
	    this.frame().child(this.image());
            
            this.child(this.frame());
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

    image (prm) {
        try {
            if (typeof prm === 'string') {
                this.image().src(prm);
                return;
            }
            return this.innerComp('image', prm, Image);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    checked (prm) {
        try {
            if (prm === undefined) {
                return this.confmng("checked");
            }
            
            this.image().visible(prm);
            this.confmng("checked", prm);

	    let evt  = this.changeEvent();
	    let comp = this;
            evt.forEach((e) => { e[0](comp,prm,e[1]); });
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

}

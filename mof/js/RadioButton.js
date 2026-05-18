/**
 * @file RadioButton.js
 * @brief kumiki radio-button component
 */
const CheckBox = require("mofron-comp-radio");
const Circle   = require("mofron-comp-circle");
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
            this.modname("RadioButton");
            //this.shortForm("");
            
            /* init config */
            this.confmng().add("selected", { type:'boolean', init:false })
            
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
	    this.circle().config({
                size:  new ConfArg('0.2rem','0.2rem'),
		event: new Click(()=>{ comp.selected(!comp.selected()) }),
		style: {
                    'display':         'flex',
                    'align-items':     'center',
                    'justify-content': 'center'
                }
	    });
	    this.circle().style(
	        { 'border-width':'0.01rem' },
		{ forced:true }
            )
	    
	    /* inner circle */
            this.innerCircle().config({
                size:      new ConfArg("0.15rem","0.15rem"),
                baseColor: [150,150,150],
                visible:   false
            });
            this.circle().child(this.innerCircle());
            
            this.child(this.circle());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    circle (prm) {
        try {
            return this.innerComp('circle', prm, Circle);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    innerCircle (prm){
        try {
            return this.innerComp('innerCircle', prm, Circle);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

//    image (prm) {
//        try {
//            if (typeof prm === 'string') {
//                this.image().src(prm);
//                return;
//           }
//            return this.innerComp('image', prm, Image);
//        } catch (e) {
//            console.error(e.stack);
//            throw e;
//        }
//    }
    
    selected (prm, opt) {
        try {
            if (prm === undefined) {
                return this.confmng("selected");
            }
            
            this.innerCircle().visible(prm);
            this.confmng("selected", prm);
            
	    /* 2. オプションのチェック (デフォルトはイベントを発火する) */
	    let is_evt = (opt && typeof opt === 'object' && opt.event !== undefined) ? opt.event : true;
            if (true === is_evt) {
	        let evt  = this.changeEvent();
	        let comp = this;
                evt.forEach((e) => { e[0](comp,prm,e[1]); });
            }
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

}

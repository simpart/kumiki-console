/**
 * @file Inputjs
 * @brief input component
 * @license MIT
 */
const Input = require("mofron-comp-input");
const Text  = require("mofron-comp-text");
const efStyle = require("mofron-effect-style");
const Move    = require("mofron-effect-move");
const comutl   = mofron.util.common;
const ConfArg  = mofron.class.ConfArg;

module.exports = class extends Input {
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
            this.modname("Input");
            this.shortForm("");
            
            /* init config */
            
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
            
	    this.childDom().parent().style({
	        'border-bottom': '0.01rem solid rgb(90,90,90)',
		'height':        '0.5rem',
		'width':         '1.5rem',
		'position':      'relative'

            });
            this.effect({modname:"Border"}).width("0rem");

	    this.height("0.4rem");
	    this.style({
	        'font-size': '0.25rem',
		'position':  'absolute',
		'bottom':    '0rem'
            });
            
	    /* label setting */
	    this.label().style({
	        'font-size': '0.2rem',
                'position':  'absolute',
		'z-index':   '2',
		'bottom':    '0rem'
	    });
	    this.label().effect([
                new efStyle({
                    transition: "font-size",
                    style: { "font-size": "0.14rem" },
                    speed: 150,
                    eid: 2
                }),
		new Move({
		    toValue: "0.32rem",
		    type:    "bottom",
                    eid:     2,
		    speed:    150
		}),
                new efStyle({
                    transition: "font-size",
                    style: { "font-size": "0.2rem" },
                    speed: 150,
                    eid: 3
                }),
		new Move({
		    toValue: "0rem",
	            type:    "bottom",
                    eid:     3,
		    speed:   150
		})
	    ]);
            

            this.focusEvent(this.labelEffect,this)
	    
	    //this.childDom(this.childDom().parent());
	    //this.child(new Text("Label Test"))
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    labelEffect (p1,p2,p3) {
        try {
	    let eid = 2;
            if (p2 === false) {
	        if (p3.value() !== null) {
                    return;
		}
	        eid = 3;
	    }
	    p3.label().execEffect(eid);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    width (prm, opt) {
        try {
            if (prm !== undefined) {
                this.childDom().parent().style({ 'width':prm });
            }
            super.width(prm,opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }



//    afterRender () {
//        try {
//            this.childDom().style({
//                 'border': 'none',
//                'border-bottom': '0.01rem solid rgb(90, 90, 90)'
//            });
//	} catch (e) {
//            console.error(e.stack);
//            throw e;
//        }
//    }
    
}

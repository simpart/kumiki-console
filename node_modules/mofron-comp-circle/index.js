/**
 * @file mofron-comp-circle/index.js
 * @brief menu item component for mofron
 *        this is interface component
 * @license MIT
 */
const Frame = require("mofron-comp-frame");
const comutl = mofron.util.common;

module.exports = class extends Frame {
    /**
     * initialize component
     * 
     * @param (dict) component config
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.modname("Circle");
            
            /* set config */
	    if (undefined !== prm) {
                this.config(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    initDomConts () {
        super.initDomConts();
	this.style({ 'border-width': '0rem' }, { lock:true });
    }
    
    /**
     * circle size setter/getter
     * 
     * @param (string(size)) circle size
     * @param (none) for super class, not use
     * @return (string(size)) circle size
     * @type parameter
     */
    size (x, y) {
        try {
	    let ret = this.width(x);
	    if (undefined === x) { 
                return ret;
	    }
	    super.height(x);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * circle size setter/getter
     *
     * @param (string(size)) circle size
     * @param (dict) style option
     * @return (string(size)) circle size
     * @type parameter			      
     */
    width (prm, opt) {
        try {
	    let ret = super.width(prm, opt);
	    if (undefined === prm) {
                return ret;
	    }
	    let siz = comutl.getsize(prm);
	    siz.value((siz.value()+0.02)/2);
            this.radius(siz.toString());
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * circle size setter/getter
     *
     * @param (string(size)) circle size
     * @param (dict) style option
     * @return (string(size)) circle size
     * @type parameter                        
     */
    height (prm, opt) {
        try {
            let ret = super.height(prm, opt);
            if (undefined === prm) {
                return ret;
	    }
	    let siz = comutl.getsize(prm);
	    siz.value((siz.value()+0.02)/2);
	    this.radius(siz.toString());
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */

/**
 * @file mofron-comp-errmsg/index.js
 * @brief error message component
 *        message component with default mainColor config
 * @license MIT
 */
const Message = require('mofron-comp-message');
const comutl = mofron.util.common;
module.exports = class extends Message {
    /**
     * initialize component
     * 
     * @param (mixed) mofron-comp-message parameter
     * @short text
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.modname('ErrMsg');
            /* init config */
            this.confmng().add("mainColor", { type:"color" });
	    /* set config */
	    if (undefined !== prm) {
                this.config(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     *
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.color([255,50,50], [255,240,240], [255,50,50]);
	    this.closeComp().visible(false);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
   
    /**
     * error message text setter/getter
     * 
     * @param (mixed) string: error message string
     *                moforn-comp-text: error message text component
     *                undefined: call as getter
     * @return (mofron-comp-text) error message text component
     * @type parameter
     */
    text (prm) {
        try {
	    let ret = super.text(prm);
	    if (undefined !== prm) {
                this.mainColor(this.confmng("mainColor"),{ passive: true });
            }
	    return ret;
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }

    error (msg) {
        try {
            if (null === msg) {
                this.visible(false);
		return;
            }
            this.text(msg);
            this.visible(true);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * message text color setter/getter
     * 
     * @param (mixed(color)) string: color name, #hex
     *                       array: [red, green, blue, (alpha)]
     *                       undefined: call as getter        
     * @param (key-value) style option (not required)
     * @return (mixed) string: color value
     *                 null: not set
     * @type private
     */
    mainColor (prm,opt) {
        try {
	    this.confmng("mainColor",prm);
            return super.mainColor(prm,opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */

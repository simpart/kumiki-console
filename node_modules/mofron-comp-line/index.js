/**
 * @file mofron-comp-line/index.js
 * @brief line component for mofron
 * @license MIT
 */
module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) size: line length
     *                key-value: component config
     * @short length
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("line");
	    this.shortForm("length");
            
	    /* init config */

	    if (0 < arguments.length) {
                this.config(p1);
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
	    this.baseColor([120,120,120]);
	    this.size("1rem", "0.01rem");
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * line length setter/getter
     * 
     * @param (mixed (size)) line length
     * @param (dict) style option
     * @type parameter
     */
    length (prm,opt) {
        try {
            return this.width(prm,opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * line thickness setter/getter
     * 
     * @param (mixed (size)) line thickness
     * @param (dict) style option
     * @type parameter
     */
    thickness (prm,opt) {
        try {
            return this.height(prm,opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * line angle setter
     * 
     * @param (number) line angle value
     * @type parameter
     */
    angle (prm) {
        try {
            this.style({ "transform" : "rotate("+ prm +"deg)" });
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */

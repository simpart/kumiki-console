/**
 * @file mofron-effect-shadow/index.js
 * @brief shadow effect for mofron
 *        this effect makes the component has a shadow.
 * @feature the size changes according to the value of the 'value' parameter.
 *          the blur percentage changes according to the value of the 'blur' parameter.
 * @license MIT
 */
const comutl = mofron.util.common;

module.exports = class extends mofron.class.Effect {
    /**
     * initialize effect
     *
     * @param (mixed) value parameter
     *                key-value: effect config
     * @param color parameter
     * @short value,color
     * @type private
     */
    constructor (p1, p2) {
        try {
            super();
            this.modname('Shadow');
            this.shortForm('value', 'color');
            
            this.transition([
	        "box-shadow",
		"webkit-box-shadow",
		"-moz-box-shadow",
                "-o-box-shadow",
                "-ms-box-shadow"
            ]);

            /* init config */
            this.confmng().add("value", { type: "size", init: "0.06rem" });
            this.confmng().add("blur",  { type: "size", init: "0.03rem" });
            this.confmng().add('color', { type: "color", init: [190,190,190] });
            
            /* set config */
	    if (0 < arguments.length) {
                this.config(p1,p2);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * shadow size
     *
     * @param (string (size)) shadow size (css value)
     * @return (string (size)) shadow size (css value)
     * @type parameter
     */
    value (prm) {
        try {
	    return this.confmng("value", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * blur size value
     * 
     * @param (string (size)) blur size value
     * @return (string (size)) blur size value
     * @type parameter
     */
    blur (prm) {
        try {
	    return this.confmng("blur", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * shadow color
     *
     * @param (string (size)) shadow color (css value)
     * @return (string (size)) shadow color (css value)
     * @type parameter
     */
    color (prm) {
        try {
	    return this.confmng("color", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * effect contents
     * 
     * @param (component) target componet
     * @type private
     */
    contents (cmp) {
        try {
	    let str_val = this.value().toString();
	    let set_val = {
	        "box-shadow" : str_val + ' ' + str_val + ' ' + this.blur().toString() + ' ' + '0rem ' + this.color().toString()
            }
            cmp.style(set_val, { bpref: true });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */

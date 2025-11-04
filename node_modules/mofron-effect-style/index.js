/**
 * @file mofron-effect-style/index.js
 * @brief style effect for mofron
 *        it is possible to set style that work with some event by using 'eid' parameter.
 * @license MIT
 */

module.exports = class extends mofron.class.Effect {
    /**
     * initialize style effect
     * 
     * @param (mixed) style parameter
     *                key-value: effect config
     * @short style,options
     * @type private
     */
    constructor (p1,p2) {
        try {
            super();
            this.modname('Style');
	    this.shortForm('style', 'options');
            /* init config */
            this.confmng().add("style", { type: "key-value" });
	    this.confmng().add("options", { type: "key-value" });
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
     * effect contents
     * 
     * @param (component) effect target component
     * @type private
     */
    contents (cmp) {
        try {
            let style = this.style();
            if (0 === Object.keys(style).length) {
                return;
            }
	    let opt = this.options();
            cmp.styleDom().style(
	        style,
		(0 < Object.keys(opt).length) ? opt : undefined
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * effect style
     * 
     * @param (mixed) string: style contents string
     *                key-value: style contents
     * @return (key-value) style contents
     * @type parameter
     */
    style (prm) {
        try {
	    if ("string" === typeof prm) {
                prm = this.txt2style(prm);
	    }
	    return this.confmng('style', prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * convert text to style object
     * 
     * @param (string) style contents in string (without {})
     * @return (key-value) style contents
     * @type private
     */
    txt2style (txt) {
        try {
            /* delete space */
            let ret     = {};
            let nsp     = txt.split(' ');
            let nsp_str = "";
            for (let nsp_idx in nsp) {
                nsp_str += nsp[nsp_idx];
            }
            /* set every element */
            let sp_txt = nsp_str.split(';');
            sp_txt.pop();
            let sp_elm = null;
            let buf    = "";
            for (let sp_idx in sp_txt) {
                sp_elm = sp_txt[sp_idx].split(':');
                if (2 !== sp_elm.length) {
                    throw new Error('invalid style');
                }
                ret[sp_elm[0]] = sp_elm[1];
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * style options
     * 
     * @param (key-value) style option
     * @return (key-value) style option
     * @type parameter
     */
    options (prm) {
        try {
            return this.confmng("options", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */

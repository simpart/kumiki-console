/**
 * @file mofron-layout-grid/index.js
 * @brief grid layout for mofron
 *        it makes component size to a specified size, and positions by horizontal.
 *        when it positioned at the horizontal end, it turns back on the left side and positions under its.
 * @attention please specify either the ratio parameter or the width parameter
 *            it gives priority to ratio parameter if users specified both
 * @license MIT
 */
const comutl = mofron.util.common;

module.exports = class extends mofron.class.Layout {
    /**
     * initialize layout
     * 
     * @param (mixed) ratio parameter
     *                key-value: layout config
     * @short ratio
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("Grid");
            this.shortForm("ratio");
            /* init config */
            this.confmng().add("ratio",  { type: "array", init: [25,25,25,25] });
            this.confmng().add("width",  { type: "array" });
            this.confmng().add("height", { type: "size" });
	    /* set config */
	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * layout contents
     * 
     * @param (number) child index
     * @param (component) layout target component
     * @type private
     */
    contents (idx, tgt) {
        try {
	    let wid = this.width();
            if (0 === idx) {
                this.component().style({
                    "display"   : "flex",
                    "flex-wrap" : "wrap"
                });
		if (null !== wid) {
                    let cmp_wid = null;
		    for (let widx in wid) {
                        cmp_wid = comutl.sizesum(cmp_wid, wid[widx]);
		    }
		    this.component().width(cmp_wid);
		}
            }
	    /* set width */
            if (null !== this.width()) {
                tgt.width(this.width()[(idx % this.width().length)]);
	    } else {
                tgt.width(this.ratio()[(idx % this.ratio().length)] + '%');
	    }
	    /* set height */
	    if (null !== this.height()) {
                tgt.height(this.height());
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * units width ratio of grid
     * 
     * @param (array) units width ratio [number,number,..]
     * @return (array) units width ratio
     * @attention parameter sum should be 100
     * @type parameter
     */
    ratio (prm) {
        try {
	    let ret = this.confmng("ratio", prm);
	    if (undefined !== prm) {
                for (let pidx in prm) {
                    if ("number" !== typeof prm[pidx]) {
                        throw new Error("invalid parameter");
		    }
		}
	    }
	    return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * width size for grid target
     * 
     * @param (array) width size for grid target [string,string,..]
     * @return (array) width size for grid target
     * @type parameter
     */
    width (prm) {
        try {
            let ret = this.confmng("size", prm);
            if (undefined !== prm) {
                for (let pidx in prm) {
		    comutl.getsize(prm[pidx]);
                }
            }
            return ret;
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * height size for grid target
     *
     * @param (string (size)) height size for grid target
     * @return (string (size)) height size for grid target
     * @type parameter
     */
    height (prm) {
        try {
            return this.confmng("height", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */

/**
 * @file mofron-comp-text/index.js
 * @brief text component for mofron
 * @license MIT
 */
const comutl = mofron.util.common;
const cmputl = mofron.util.component;

module.exports = class extends mofron.class.Component {
    /**
     * constructor
     * 
     * @param (mixed) short-form parameter
     *                key-value: component config
     * @short text
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.modname('Text');
            this.shortForm('text');
            
	    /* init config */
            this.confmng().add("heiWeight", { init:1.5, type:"number" });
	    this.confmng().add(
                "weight",
                { type: "number", select: [100,200,300,400,500,600,700,800,900] }
            );
            
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
            this.text('');
            this.size("0.16rem", { private:true });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text setter/getter
     * 
     * @param (mixed) string: text value
     *                undefined: call as getter
     * @return (string) text value
     * @type parameter
     */
    text (val) {
        try {
	    return this.childDom().text(val);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text getter
     * 
     * @return (string) text value
     * @type function
     */
    toString () {
        try {
            return this.text();
	} catch (e) {
            console.error(e.stack);
	    throw e;
	}
    }
    
    /**
     * text size setter/getter
     *
     * @param (mixed) string (size): text size
     *                undefined: call as getter
     * @param (key-value) style option [not required]
     * @return (mixed) string: text size (default is "0.16rem")
     *                 null: not set
     * @type parameter
     */
    size (val, opt) {
        try {
	    return cmputl.size(this, "font-size", val, opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text height setter/getter
     * 
     * @param (mixed) string (size): text size
     *                undefined: call as getter
     * @param (key-value) style option [not required]
     * @return (mixed) string: text height (default is "0.24rem")
     *                 null: not set
     * @type parameter
     */
    height (prm, opt) {
        try {
	    let siz = comutl.getsize(
                (undefined === prm) ? this.size() : prm
	    );
	    let siz_buf = null;
            if ( ('rem' === siz.type()) || ('px' === siz.type()) ) {
	        if (undefined === prm) {
                    siz_buf = siz.value()*this.heiWeight();
		} else {
                    siz_buf = siz.value()/this.heiWeight();
		}
		siz_buf = comutl.roundup(siz_buf) + siz.type();
            } else {
                siz_buf = siz.toString();
	    }
            
            if (undefined === prm) {
	        /* gettter */
                return siz_buf;
	    }
            this.size(siz_buf, opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * height weight setter/getter
     * this value to make 'height' parameter and real dom size the same
     * it needs to adjust depending on font difference.
     * 
     * @param (mixed) number: height weight rate
     *                undefined: call as getter
     * @return (number) height weight rate
     * @type private
     */
    heiWeight (prm) {
        try {
	    return this.confmng("heiWeight", prm);
	} catch (e) {
	    console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * text color setter/getter
     * 
     * @param (mixed (color)) string: color name, #hex
     *                array: [red, green, blue, (alpha)]
     * @param (key-value) style option [not required]
     * @return (mixed) string: text color
     *                 null: not set
     * @type parameter
     */
    mainColor (val, opt) {
        try {
	    return cmputl.color(this, 'color', val, opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text font setter/getter
     * 
     * @param (mixed) string: font name (variable arguments)
     *                undefined: call as getter
     * @return (mixed) array: font name
     *                 null: not set
     * @type parameter
     */
    font () {
        try {
            if (0 === arguments.length) {
                /* getter */
		return this.style("font-family");
	    }
	    /* setter */
	    let set_fnt = "";
            for (let aidx=0;aidx < arguments.length; aidx++) {
                if ("string" !== typeof arguments[aidx]) {
                    throw new Error("invalid parameter");
		}
                set_fnt += arguments[aidx] + ",";
	    }
	    set_fnt = set_fnt.substring(0, set_fnt.length-1);
	    this.style({ "font-family": set_fnt });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * character spacing setter/getter
     *
     * @param (mixed) string(size): spacing size
     *                undefined: call as getter
     * @param (key-value) style option [not required]
     * @return (mixed) string: spacing size
     *                 null: not set
     * @type parameter
     */
    space (val, opt) {
        try {
	    return cmputl.size(this, 'letter-spacing', val, opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text thickness setter/getter
     *
     * @param (mixed) number: thickness value [100-900]
     *                null: delete thickness
     *                undefined: call as getter
     * @param (key-value) style option [not required]
     * @return (number) thickness value
     * @type parameter
     */
    weight (val, opt) {
        try {
	    if (undefined === val) {
	        /* getter */
                return this.style("font-weight");
	    }
	    /* setter */
	    this.style({ 'font-weight' : val }, opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */

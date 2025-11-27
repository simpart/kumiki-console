/**
 * @file mofron-effect-move/index.js
 * @brief move effect for mofron component
 * @license MIT
 */
module.exports = class extends mofron.class.Effect {
    /**
     * initialize effect
     * 
     * @param (mixed) string: move type
     *                key-value: effect config
     * @param (size)  moved position
     * @short type,toValue
     * @type private
     */
    constructor (p1,p2) {
        try {
            super();
            this.modname("Move");
	    this.shortForm("type", "toValue");
            /* init config */
            this.confmng().add("type",      { type: "string", select: ["top", "left", "bottom", "right"] });
	    this.confmng().add("fromValue", { type: "size" });
	    this.confmng().add("toValue",   { type: "size" });
            
            this.speed(1000);
            this.beforeEvent(
                (eff) => {
                    try {
                        eff.transition(eff.type());
                        let tp = {};
			let fval = this.fromValue();
                        tp[eff.type()] = (null === fval) ? undefined : fval;
                        eff.component().style(tp);
                        eff.component().style(
                            { "position" : "relative" },
                            { passive: true }
                        );
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }
            );

	    if (0 < arguments.length) {
                this.config(p1,p2);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * 
     * @type private
     */
    contents (cmp) {
        try {
            let tp = {};
            tp[this.type()] = this.toValue();
	    cmp.style(tp);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    fromValue (prm) {
        try {
            return this.confmng("fromValue", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    toValue (prm) {
        try {
            return this.confmng("toValue", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    type (prm) {
        try {
            return this.confmng("type", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */

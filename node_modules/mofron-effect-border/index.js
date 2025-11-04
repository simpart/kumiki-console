/**
 * @file mofron-effect-border/index.js
 * @brief border effect for mofron
 *        set border style to target component
 * @license MIT
 */
module.exports = class extends mofron.class.Effect {
    /**
     * initialize effect
     * 
     * @param (mixed) width parameter
     *                key-value: effect config
     * @param (mixed) color parameter
     * @short width,color
     * @type private
     */
    constructor (p1, p2) {
        try {
            super();
            this.modname('Border');
            this.shortForm('width','color');
	    
	    this.transition([
	        "border-width", "border-top-width", "border-bottom-width", "border-left-width",
		"border-right-width", "border-top-left-width", "border-top-right-width",
		"border-bottom-left-width", "border-bottom-right-width",
                "border-color", "border-top-color", "border-bottom-color", "border-left-color",
                "border-right-color", "border-top-left-color", "border-top-right-color",
                "border-bottom-left-color", "border-bottom-right-color"
            ]);
            
	    /* init config */
	    this.confmng().add('width', { type: 'size', init: "0.01rem" });
            this.confmng().add(
	        'style',
	        {
		    type: 'string', init: 'solid',
                    select: ['none','hidden','solid','double','groove','ridge','inset','outset','dashed','dotted']
		}
            );
            this.confmng().add(
	        'position',
		{
		    type: 'string', init: 'all',
                    select: ['all','top','bottom','left','right','top-left','top-right','bottom-left','bottom-right']
		}
            );
            this.confmng().add('color', { type: 'color', init: [90,90,90] })
            
            /* set config */
            if (0 < arguments.length) {
                this.config(p1, p2);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * effect config
     * 
     * @param (component) effect target component
     * @type private
     */
    contents (cmp) {
        try {
            let set_style = {};
            let pos = ('all' === this.position()) ? 'border-' : 'border-' + this.position() + '-';
            set_style[pos + 'width'] = this.width().toString();
            set_style[pos + 'style'] = this.style();
            set_style[pos + 'color'] = this.color().toString();
            cmp.style(set_style);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * border width
     * 
     * @param (string) css value of border width
     * @return (string) css value of border width
     * @type parameter
     */
    width (prm) {
        try {
	    return this.confmng('width', prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter border style
     *
     * @param (string) css value of border style (default is 'solid')
     *                 ('none', 'hidden', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'dashed', 'dotted')
     * @return (string) css value of border style
     * @type parameter
     */
    style (prm) {
        try {
            return this.confmng('style', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * border position
     * 
     * @param (string) border target position (default is 'all')
     *                 ('all', 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right')
     * @return (string) css value of border type
     * @type parameter
     */
    position (prm) {
        try {
            return this.confmng('position', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * border color
     * 
     * @param (mixed (color)) string: color name, #hex
     *                        array: [red, green, blue, (alpha)]
     * @return (mixed (color)) border color
     * @type parameter
     */
    color (prm) {
        try {
            return this.confmng('color', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */

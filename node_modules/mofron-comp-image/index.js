/**
 * @file mofron-comp-image/index.js
 * @brief image component for mofron
 * @license MIT
 */

module.exports = class extends mofron.class.Component {
    /**
     * initialize image component
     *
     * @param (mixed) path parameter
     *                key-value: component option
     * @short path
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("Image");
            this.shortForm("path");
            
            this.confmng().add("src", { type: "string" });
	    this.confmng().add("base64", { type: "string" });
            
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
	    super.initDomConts('img');
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * image path
     *
     * @param (string) path to image
     * @return (string) path to image
     * @type parameter
     */
    path (prm) {
        try {
            return this.src(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * base64 image value
     *
     * @param (number) base64 image value
     * @return (number) base64 image value
     * @type parameter
     */
    base64 (prm) {
        try {
            if (undefined === prm) {
                if (null !== this.src()) {
                    /* convert to base64 */
                    let cvs    = document.createElement('canvas');
		    cvs.width  = this.childDom().getRawDom().width;
		    cvs.height = this.childDom().getRawDom().height;
		    let ctx    = cvs.getContext('2d');
                    ctx.drawImage(this.childDom().getRawDom(), 0, 0);
                    
		    this.childDom().getRawDom().crossOrigin = 'Anonymous';
                    let sp_src = this.src().split('.');
                    return cvs.toDataURL("image/" + sp_src[sp_src.length-1]);
		}
	    }
            this.value(prm);
	    return this.confmng("base64", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * src value of dom attribute
     * 
     * @param (string) path to image file
     * @return (string) path to image file
     * @type parameter
     */
    src (prm) {
        try {
	    this.value(prm);
	    return this.confmng("src", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * src value of dom attribute
     * 
     * @param (mixed) string: path to image
     *                number: base64 value
     * @return (mixed) src value of dom attribute
     * @type private
     */
    value (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return this.childDom().attrs('src');
            }
            /* setter */
            if (('string' !== typeof prm) && ('number' !== typeof prm)) {
                throw new Error('invalid parameter');
            }
            this.childDom().attrs({ src : prm });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */

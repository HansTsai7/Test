grn.base.namespace("grn.component.autofit"),grn.component.autofit.autofit=function(img,parent,maxHeight,maxWidth){var w=img.width,h=img.height;(h>maxHeight||w>maxWidth)&&(w/h>maxWidth/maxHeight?(img.width=maxWidth,img.height=h*(maxWidth/w)):(img.height=maxHeight,img.width=w*(maxHeight/h)));var element=$(parent);element.removeClass?element.removeClass("autofit-hidden"):element.removeClassName("autofit-hidden")};
//# sourceMappingURL=autofit.js.map
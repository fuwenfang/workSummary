/**
 * Created by uncle on 2017/3/4.
 */

const domUtil = {
	//获取元素的绝对位置
	getElementOffSet(HTMLDom) {
		return HTMLDom ? {
				top: HTMLDom.offsetTop,
				left: HTMLDom.offsetLeft
			} :
			console.error('元素不存在！')
	},
	isParent (obj, parentObj){
		while (obj != undefined && obj != null && obj.tagName.toUpperCase() != `BODY`) {
			if (obj == parentObj) {
				return true;
			}
			obj = obj.parentNode;
		}
		return false;
	}
};


export default domUtil;

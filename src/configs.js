/**
 * 配置编译环境和线上环境之间的切换
 *
 * urlWebHttp: 域名地址
 * toastime: toast时间
 *
 */
const toastime = 3000;
const timeout = 10000;
const ak = 'YEC9IHhGrw5361ioh6ugEsIqKIkPIwy7';
const filename = '/o2omallwx';
const accuracy = false;//是否开启精准定位 不开启定位失败就默认北京天安门

let urlWebHttp;
let plant = '';
let get_signature = '';

console.log(process.env)
//切换环境 //线上https://healthapi.zhiscity.com/wmp/rest/weixinShare/getBase4JsSdk/ff8080815d2a2b25015d83703046009a
switch (process.env.srconfig) {
	case 'dev':
		urlWebHttp = 'http://10.6.80.94';
		get_signature = 'https://healthapi.zhiscity.com/wmp/rest/weixinShare/getBase4JsSdk/ff8080815cd3833d015cd38e0c010004?';
		break;
	case 'beta':
		urlWebHttp = 'https://devo2o.zhiscity.com';
		get_signature = 'https://healthapi.zhiscity.com/wmp/rest/weixinShare/getBase4JsSdk/ff8080815cd3833d015cd38e0c010004?';
		break;
	case 'pro':
		urlWebHttp = 'https://drugo2o.zhiscity.com';
		get_signature = 'https://healthapi.zhiscity.com/wmp/rest/weixinShare/getBase4JsSdk/ff8080815d2a2b25015d83703046009a?';
		break;
	case 'testdev':
		urlWebHttp = 'https://devtesto2o.zhiscity.com';
		get_signature = 'https://healthapi.zhiscity.com/wmp/rest/weixinShare/getBase4JsSdk/ff8080815cd3833d015cd38e0c010004?';
		break;
	default://默认开发
		urlWebHttp = 'http://devo2o.zhiscity.com';
		get_signature = 'https://healthapi.zhiscity.com/wmp/rest/weixinShare/getBase4JsSdk/ff8080815cd3833d015cd38e0c010004?';
		break;
}
//判断平台
if(navigator.userAgent.match(/MicroMessenger/igm)){
	plant = 'weixin';
}


export default{
	urlWebHttp,
	toastime,
	timeout,
	ak,
	filename,
	accuracy,
	plant,
	get_signature
}

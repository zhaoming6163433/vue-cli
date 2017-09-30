import Vue from 'vue';
import appConfigs from 'src/configs'
import util from 'src/util/util.js'

export default async(apiurl = '', params = {}, type = 'GET', method = '') => {
	type = type.toUpperCase();
	if(method == 'ajax'){
		return new Promise((resolve, reject) => {
			$.ajax({
		        url:apiurl,
		        dataType:'jsonp',
		        data:params,
		        jsonp:'callback',
		        success:function(res) {
		            resolve(res);
		        },
		        error: function(res){
	            	reject(res);
	            },
		        timeout:appConfigs.timeout
		    });
	    });
	}else{
		return new Promise((resolve, reject) => {
			Vue.http({
				method : type,
				url : apiurl + '&clientId=""',
				timeout:appConfigs.timeout,
				headers : {
					'Content-Type':'application/json;charset=utf-8',
				},
				body : type == 'POST' ? params: '',
				params: type == 'GET' ? params: ''
			}).then(res => {
				if(res.body&&res.body.respCode == 0 || res.body&&res.body.success == true){
					if(res.body.attributes){
						resolve(res.body.attributes);
					}else{
						resolve(res.body.result);
					}
				}else
				if(res.body&&res.body.respCode == 1000||res.body&&res.body.respCode == 1001||res.body&&res.body.respCode == 1002){//未登录直接跳转
					reject(res);
					util.vueEvent.$emit("disloading");
					if(params&&params.nogoto == true){//判断登录不跳转
						
					}else{
						window.location = res.body.result.jumpUrl
					}
				}else{
					util.vueEvent.$emit("disloading");
					reject(res)
				}
			}).catch(err => {
				util.vueEvent.$emit("disloading");
				reject(err)
			})
		});
	}	
}
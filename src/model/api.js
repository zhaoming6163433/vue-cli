import appConfigs from 'src/configs'
import vueRequest from './vueRequest'

/**
 * 获取资讯信息
 */
export const get_healthInformationCategoryList = (params) => vueRequest(appConfigs.urlWebHttp + '/mall/news/healthInformationCategoryList?', params, 'GET');

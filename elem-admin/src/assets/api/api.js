/**
 * @description 定义请求接口
 */
import API_URL from './api_url'

var api = {};
// 获取导航item
api.menus = API_URL + '/cloud/uac/v1/resource/menus2'

export default api
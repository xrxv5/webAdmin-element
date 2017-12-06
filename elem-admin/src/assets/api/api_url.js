/**
 * @description 根据环境不同定义相应的请求前缀
 */
import ENV from '../ENV/env';

var API_URL = '';
if (ENV == 1) {
    API_URL = 'http://192.168.1.203:9696'
} else if (ENV == 2) {
    API_URL = 'http://apitest.ibabygroup.cn'
} else if (ENV == 3) {
    API_URL = 'http://api.ibabygroup.cn'
}

export default API_URL
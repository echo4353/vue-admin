/**
 * 环境配置封装
 */

const env = process.env.NODE_ENV || 'prod'
console.log(env, 'envenvenv')
const EnvConfig = {
  dev: {
    baseApi: '/api',
    mockApi:
      'https://www.fastmock.site/mock/7443f444a9d47d393f1e8f44327de2f0/api'
  },
  test: {
    baseApi: 'test.futurefe.com/api',
    mockApi:
      'https://www.fastmock.site/mock/e4fa4dc7d738fa08450958ef95b3ba4c/api'
  },
  prod: {
    baseApi: 'futurefe.com/api',
    mockApi:
      'https://www.fastmock.site/mock/e4fa4dc7d738fa08450958ef95b3ba4c/api'
  }
}
export default {
  env,
  mock: false,
  namespace: 'manager',
  ...EnvConfig[env]
}

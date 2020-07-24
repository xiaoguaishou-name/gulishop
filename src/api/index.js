import Ajax from '@/ajax/Ajax'
import mockAjax from '@/ajax/mockAjax'
//请求首页三级分类
export const reqCategoryList = () => Ajax({
  url: '/product/getBaseCategoryList',
  method: 'GET'
})
//mock banner数据
export const reqBannerList = () => mockAjax.get('/banner')
//mock floor数据
export const reqFloorList = () => mockAjax.get('/floor')
//请求搜索商品数据
export const reqGoodsList = (searchParams) => Ajax.post('/list', searchParams)

//请求商品详情页数据
export const reqGoodsDetailInfo = (skuId) => Ajax.get(`/item/${skuId}`)

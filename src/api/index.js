import Ajax from '@/ajax/Ajax'
import mockAjax from '@/ajax/mockAjax'
export const reqCategoryList = () => Ajax({
  url: '/product/getBaseCategoryList',
  method: 'GET'
})
export const reqBannerList = () => mockAjax.get('/banner')
export const reqFloorList = () => mockAjax.get('/floor')

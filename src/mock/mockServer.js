import Mock from 'mockjs'
import banner from '@/mock/banner'//引入banner json文件
import floor from '@/mock/floor'//yinru floor json 文件
Mock.mock('/mock/banner', { code: 200, data: banner })
Mock.mock('/mock/floor', {
  code: 200,
  data: floor
})

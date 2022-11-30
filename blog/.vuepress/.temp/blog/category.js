export const categoryMap = {"category":{"/":{"path":"/category/","map":{"book":{"path":"/category/book/","keys":["v-5616977e"]}}}},"tag":{"/":{"path":"/tag/","map":{"book":{"path":"/tag/book/","keys":["v-5616977e"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}

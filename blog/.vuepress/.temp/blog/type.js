export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-df8b6e0c","v-6e19edb7","v-f0ec4556","v-24b7c48d","v-2bc6566a","v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d","v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712","v-184f4da6","v-2e3eac9e","v-4e65ec78","v-c151bf32","v-438ffe52","v-1473bf53"]},"/zh/":{"path":"/zh/article/","keys":["v-56a32aab","v-62ced1a6","v-f5ca1ef4","v-f933d032","v-46587e86","v-fc9d8170","v-3fbd497c","v-4ba29552","v-9ef49308","v-4edd03ab","v-4d282b0c","v-4b73526d","v-49be79ce","v-738aa55e","v-71d5ccbf","v-7020f420","v-6e6c1b81","v-858cfdd6","v-269ae70f","v-c1942916","v-65c00218","v-36295574","v-2b64e284"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-c151bf32"]},"/zh/":{"path":"/zh/encrypted/","keys":["v-65c00218"]}},"slide":{"/":{"path":"/slide/","keys":["v-2e3eac9e"]},"/zh/":{"path":"/zh/slide/","keys":["v-269ae70f"]}},"star":{"/":{"path":"/star/","keys":["v-df8b6e0c","v-6e19edb7","v-7bbc18fc","v-696d9fb1"]},"/zh/":{"path":"/zh/star/","keys":["v-56a32aab","v-62ced1a6","v-f5ca1ef4","v-4b73526d","v-7020f420"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-df8b6e0c","v-f0ec4556","v-24b7c48d","v-2bc6566a","v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d","v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712","v-6e19edb7"]},"/zh/":{"path":"/zh/timeline/","keys":["v-f5ca1ef4","v-56a32aab","v-f933d032","v-46587e86","v-fc9d8170","v-3fbd497c","v-4ba29552","v-9ef49308","v-4edd03ab","v-4d282b0c","v-4b73526d","v-49be79ce","v-738aa55e","v-71d5ccbf","v-7020f420","v-6e6c1b81","v-62ced1a6"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}

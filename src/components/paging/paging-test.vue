<template>
    <Pag-ing
    :count='40'
    :start='1'
    :end='10'
     />
</template>

<script>
import PagIng from './paging'
export default {
  components:{PagIng}
}
</script>


<style lang="scss" scoped>

</style>
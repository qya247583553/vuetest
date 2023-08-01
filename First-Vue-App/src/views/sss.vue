<template>
    1111
    <table>
        <tr>
            <td>编号</td>
            <td>名字</td>
            <td>密码</td>
        </tr>
        <tr v-for="item in users1">
            <td>{{ item.aid }}</td>
            <td>{{ item.username }}</td>
            <td>{{ item.password }}</td>
        </tr>

    </table>
</template>

<script>
export default {
    data() {
       return{
        users1:[]
       }
    },
    created(){
        this.getUsers();
    },
    methods:{
        getUsers:function(){
            const vm = this;
           vm.$http.get("/getall").then(function (response){
                console.log(response.data);
                vm.users1=response.data
            })
        }
    }
}
</script>
<template>
    <div class='healthbar'>
        <button 
            type="button"
            class="btn btn-primary"
            @click='minusHp'>Uderz</button>
        <div class="progress">
            <div
                :class='{ active: animated }'
                class="progress-bar progress-bar-danger progress-bar-striped" 
                role="progressbar" 
                aria-valuenow="100" 
                aria-valuemin="0" 
                aria-valuemax="100" 
                :style="{ width: healthbarWidth }"
                @click='animated = !animated'
            >
                {{health}}/{{maxHealth}} HP
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            health: Number,
            maxHealth: Number
        },
        data: () => ({
            animated: false
        }),
        methods:{
            minusHp(){
                //this.$emit('changeHp', this.health-10);
            },
            respawn(){
                //this.$emit('changeHp', this.maxHealth);
            }
        },
        computed:{
            healthbarWidth(){
                return (this.health / this.maxHealth) * 100 + '%';
            }
        },
        watch:{
            health(newValue){
                if(newValue < 0){
                    this.respawn();
                }
            }
        }
    }
</script>

<style>
 .healthbar{
     display:flex;
     align-items: center;
 }

 .progress{
     width:100%;
     margin: 0;
     margin-left: 10px;
 }
</style>
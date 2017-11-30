<script lang="ts">
    import Vue, { ComponentOptions } from 'vue';
    import _ from 'lodash'

    interface ComponentDirtyManagerComponent extends Vue{
        componentDirtiManagerDirty: boolean;
        clean();
        dirt();
        dirty: boolean;
        isDirty() : boolean;
        setDirty(value : boolean)
    }

    export {
        ComponentDirtyManagerComponent as ComponentDirtyManagerComponentInterface
    }

    export default {
        mounted(){
            let children = this.$children;
            _.each(children, (el) => {
                if(!el.$attrs['listen-for-dirty']){
                    return;
                }

                el.$on('input', () => {
                    this.componentDirtiManagerDirty = true;
                })

                el.$on('change', () => {
                    this.componentDirtiManagerDirty = true;
                })
            })
        },
        methods: {
            clean(){
                this.componentDirtiManagerDirty = false;
            },
            dirt(){
                this.componentDirtiManagerDirty = true;
            },
            isDirty() : boolean{
                return this.componentDirtiManagerDirty;
            },
            setDirty(value : boolean){
                this.componentDirtiManagerDirty = value;
            }
        },
        computed:{
            dirty: {
                cache: false,
                get(){
                    return this.componentDirtiManagerDirty;
                },
                set(val){
                    this.componentDirtiManagerDirty = val;
                    this.$nextTick(() => {
                        this.$forceUpdate();
                    })
                }
            }
        }
    } as ComponentOptions<ComponentDirtyManagerComponent>;
</script>
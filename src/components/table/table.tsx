import { defineComponent } from "vue";
import 'element-plus/es/components/table/style/css';
import { ElTable, ElTableColumn } from 'element-plus';

export const Table = defineComponent({
    props: {
        data: {
            type: Array<any>,
            default: []
        }
    },
    setup(props) {
        return () => <div>
            {
                props.data.length === 0 ? '暂无数据' : 
                <ElTable data={props.data}>
                    {
                        props.data.map((item) => {
                            return <ElTableColumn>{item}</ElTableColumn>
                        })
                    }
                </ElTable>
            }
        </div>
    }
})
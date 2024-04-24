import { defineComponent } from "vue";

export default defineComponent({
    props: {
        data: {
            type: Array<string>,
            default: []
        }
    },
    setup(props) {
        return () => <table>
            {
                props.data.map((item) => {
                    return <tr>{item}</tr>
                })
            }
        </table>
    }
})
<template>
    <el-table role="cf-table" v-bind="props">
        <el-table-column v-for="(column, index) in columns" :key="index" :prop="column" :lable="column"></el-table-column>
    </el-table>
</template>

<script lang="ts">
import { ElTable, ElTableColumn } from 'element-plus';
import defaultProps from 'element-plus/es/components/table/src/table/defaults.mjs';
import 'element-plus/es/components/table/style/css';

const SFTableProps = () => defaultProps;

export default {
    name: 'CFTable',
    props: SFTableProps(),
    components: {
        ElTable,
        ElTableColumn
    },
    setup(props, {}) {
        const columns = Object.keys(props.data[0] || {});
        return {
            columns,
            props: props
        };
    }
}



</script>
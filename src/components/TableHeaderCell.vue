<template>
    <div class="cell_container">
        <div :class="selectedColumn ? 'container_focused' : ''" class="table_head_title_container">
            <span :class="selectedColumn ? 'selectedColumn' : ''">
                {{
                    props.text.toUpperCase()
                }}
            </span>
            <div class="arrows_container">
                <q-icon
                    id="arrow_top"
                    :class="selectedColumn && !store.pagination.descending ? 'selectedColumn' : ''"
                    name="arrow_drop_up"
                />
                <q-icon
                    id="arrow_bottom"
                    :class="selectedColumn && store.pagination.descending ? 'selectedColumn' : ''"
                    name="arrow_drop_down"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, type ComputedRef } from 'vue';
import { useContactStore } from '@/stores/contacts'

const store = useContactStore();

const props = withDefaults(
    defineProps<{
        text?: string;
        column?: string;
    }>(),
    {
        text: 'thead',
        column: '',
    }
);

const selectedColumn: ComputedRef<boolean> = computed(() => {
    return store.pagination.sortBy === props.column;
});

</script>

<style scoped lang="scss">
.cell_container {
    display: inline-block;
    color: grey;
}
.selectedColumn {
    color: #1876d2;
}

.table_head_title_container {
    display: flex;
    user-select: none;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 0px 5px 0px 10px;
}

.container_focused {
    background-color: #edf2fc;
}

.arrows_container {
    display: flex;
    flex-direction: column;
    font-size: 14px;

    #arrow_top {
        position: relative;
        top: 4px;
    }

    #arrow_bottom {
        position: relative;
        bottom: 4px;
    }
}
</style>

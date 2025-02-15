import { onMounted } from 'vue';
import CountDown from './components/CountDown.vue';
onMounted(() => {
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// @ts-ignore
/** @type { [typeof CountDown, ] } */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(CountDown, new CountDown({
    targetDate: ("2025-02-21T18:00:00"),
    message: ("Contador de tempo até ver o FOFOF"),
}));
const __VLS_1 = __VLS_0({
    targetDate: ("2025-02-21T18:00:00"),
    message: ("Contador de tempo até ver o FOFOF"),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
var __VLS_5 = {};
var __VLS_4;
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            CountDown: CountDown,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */

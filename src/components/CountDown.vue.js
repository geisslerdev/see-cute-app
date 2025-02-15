import { ref, onMounted, onUnmounted } from "vue";
const props = defineProps();
const timeLeft = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });
const messageView = ref('');
const finalDay = ref('');
const unitLabels = {
    days: "Dias",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos"
};
const calculateTimeLeft = () => {
    const difference = new Date(props.targetDate).getTime() - new Date().getTime();
    if (difference > 0) {
        timeLeft.value = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }
};
let timer = ref();
onMounted(() => {
    messageView.value = props.message.toUpperCase();
    finalDay.value = new Date(props.targetDate).toLocaleDateString();
    calculateTimeLeft();
    timer.value = setInterval(calculateTimeLeft, 1000);
});
onUnmounted(() => {
    if (timer)
        clearInterval(timer.value);
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("countdown-container") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("image-container") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    ...{ class: ("pico-image") },
    src: ("../assets/png/PICO-PARK-2.png"),
    alt: ("pico pico"),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: ("countdown-title") },
});
(__VLS_ctx.messageView);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("countdown-timer") },
});
for (const [value, unit] of __VLS_getVForSourceType((__VLS_ctx.timeLeft))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: ((unit)),
        ...{ class: ("countdown-box") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("countdown-value") },
    });
    (value);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("countdown-label") },
    });
    (__VLS_ctx.unitLabels[unit]);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: ("countdown-title") },
});
(__VLS_ctx.finalDay);
['countdown-container', 'image-container', 'pico-image', 'countdown-title', 'countdown-timer', 'countdown-box', 'countdown-value', 'countdown-label', 'countdown-title',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            timeLeft: timeLeft,
            messageView: messageView,
            finalDay: finalDay,
            unitLabels: unitLabels,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */

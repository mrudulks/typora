import { DirectiveBinding } from "vue";

export default {
    beforeMount(el: HTMLElement, binding: DirectiveBinding) {
        // el.clickOutsideEvent = function (event: MouseEvent) {
        //     if (!(el == event.target || el.contains(event.target))) {
        //         if (typeof binding.value === 'function') {
        //             binding.value(event);
        //         }
        //     }
        // }
        // el.addEventListener('click', (event: MouseEvent) => {
        //     if (!(el == event.target || el.contains(event.target))) {
        //         el.clickOutsideEvent = event;

        //         el.dispatchEvent(new CustomEvent('clickOutside', { detail: { event } }));
        //     }
        // });
        console.log(el, binding)
    },
    unmounted(el: HTMLElement) {
        console.log("unmounted", el)
    },
    mounted(el: HTMLElement) {
        console.log("mounted", el)
    }
}

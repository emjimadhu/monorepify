import Vue, { VNode } from 'vue';

declare global {
    namespace JSX {
        // tslint:disable no-empty-interface
        interface IElement extends VNode {
        }

        // tslint:disable no-empty-interface
        interface IElementClass extends Vue {
        }

        interface IIntrinsicElements {
            [elem: string]: any;
        }
    }
}

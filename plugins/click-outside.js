import Vue from 'vue';

Vue.directive('click-outside', {
  bind(el, binding, vnode) {
    el.clickOutsideEvent = function(event) {
      // Check if click was outside the el and its children
      if (!(el === event.target || el.contains(event.target))) {
        // Call the method provided as the directive's value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unbind(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
});

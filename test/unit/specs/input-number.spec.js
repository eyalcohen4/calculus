/* eslint-disable no-console */
import Vue from 'vue';
import inputNumber from '@/components/inputs/input-number';

describe('input number component', () => {
  it('should render input', () => {
    const Constructor = Vue.extend(inputNumber);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('md-input').tagName)
    .to.equal('input');
  });
});

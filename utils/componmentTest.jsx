import React from 'react'
import { render } from '@testing-library/react';

export default function componmentTest (Componment, ComponmentName, ComponmentProps) {
    // 传递三个参数 组件，组件名称，组件属性
    describe(`component ${ComponmentName}`, () => {
        it(`renders correctly`, () => {
            // 第一条测试用例
            const wrapper = render(<Componment {...ComponmentProps} />);
            // 快照测试，判断能不能正常渲染
            expect(wrapper.container).toMatchSnapshot();
        });
        it('component could be updated and unmounted without errors', () => {
            // 第二条测试用例
            const { rerender, unmount } = render(<Componment {...ComponmentProps} />);
            // 判断是否能rerender和卸载
            expect(() => {
                rerender(<Componment {...ComponmentProps} />);
                unmount();
            }).not.toThrow();
        });
    });
}
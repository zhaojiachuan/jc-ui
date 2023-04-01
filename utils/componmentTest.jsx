import React from 'react'
import { render } from '@testing-library/react';

export default function componmentTest (Componment, ComponmentName, ComponmentProps) {
    describe(`component ${ComponmentName}`, () => {
        it(`renders correctly`, () => {
            const wrapper = render(<Componment {...ComponmentProps} />);
            expect(wrapper.container).toMatchSnapshot();
        });
        it('component could be updated and unmounted without errors', () => {
            const { rerender, unmount } = render(<Componment {...ComponmentProps} />);
            expect(() => {
                rerender(<Componment {...ComponmentProps} />);
                unmount();
            }).not.toThrow();
        });
    });
}
// Test away!
import React from 'react';
import {render} from '@testing-library/react';
import {Display} from './Display';
import { testNameToKey } from 'jest-snapshot/build/utils';

test('are buttons displaying to page', () => {
    const {getByText} = render(<Display/>);
    const unlockedbtn = getByText(/unlock/i);
    const openbtn = getByText(/open/i);
    const lockedbtn = getByText(/lock gate/i);
    const closegatebtn = getByText(/close gate/i);

    expectExport(unlockedbtn).toBeInTheDocument();
    expectExport(openbtn).toBeInTheDocument();
    expectExport(lockedbtn).toBeInTheDocument();
    expectExport(closegatebtn).toBeInTheDocument();
});
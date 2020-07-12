import React from 'react';
import { ExampleView } from './ExampleView/ExampleView';
import { useExample } from './hooks';

export const Example = () => {
    const exampleProps = useExample();

    return <ExampleView {...exampleProps}/>;
}
import React from 'react';
import { ExampleView } from './ExampleView/ExampleView';
import { useExample } from './hooks';


export class Example extends React.Component {
    render() {
        const exampleProps = useExample();
        return (
            <ExampleView {...exampleProps}/>
        )
    }
}
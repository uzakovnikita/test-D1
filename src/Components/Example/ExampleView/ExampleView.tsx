import React, { FunctionComponent } from 'react';
import './ExampleView.scss';

interface IExampleViewProps {
    count?: string;
}


export const ExampleView: FunctionComponent<IExampleViewProps> = ({
    count,
}) => {
    return (
        <div className='block'>
            {count}
        </div>
    )
}
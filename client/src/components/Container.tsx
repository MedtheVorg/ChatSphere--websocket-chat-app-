import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
    return (
        <div className='container mx-auto fixed-height flex items-center justify-center p-2'>
            {children}
        </div>
    );
}

import React from 'react';

export default function ContainerLayout({ children }) {
    return (
        <div className="max-w-screen-lg mx-auto px-6">
            {children}
        </div>
    );
}
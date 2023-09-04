import React, { useEffect } from 'react';


export default function DynamicFAQSection({ children }) {
    useEffect(() => {
        const target = location.hash && document.querySelector(location.hash) || null;
        const summary = target?.parentElement;
        const details = summary?.parentElement as HTMLDetailsElement;
        console.log({ details });

        if (target != null) {
            document.title = `${target.textContent} | FAQ | Onion`;

            if (details && details instanceof HTMLDetailsElement) {
                if (!details.open) {
                    const offsetPosition = details.getBoundingClientRect().top + window.scrollY;
                    summary.click();
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        }
    })

    return (<>{children}</>);
}

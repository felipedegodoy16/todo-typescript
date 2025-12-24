import { useState } from 'react';

export function useModal() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function changeModalState() {
        setIsOpen(!isOpen);
    }

    return [isOpen, changeModalState] as const;
}

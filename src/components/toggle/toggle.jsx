import React, { useMemo } from 'react';

import './styles.scss';

export function Toggle(props) {
    const { className = '', onChange, active = false, size = 25 } = props;
    const rootStyles = useMemo(() => {
        return {
            '--toggleSize': `${size}px`,
        };
    }, [size]);

    return (
        <label className={`toggle ${className}`} style={{ ...rootStyles }}>
            <input type="checkbox" onChange={onChange} checked={active}></input>
            <div className="toggle-control"></div>
        </label>
    );
}

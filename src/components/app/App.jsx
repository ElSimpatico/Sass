import React, { useState, useCallback, useEffect } from 'react';

import { Button, Toggle } from '../';

import './styles.scss';

export function App() {
    const [darkModeActive, setDarkModeActive] = useState(false);

    const handlerChange = useCallback(() => {
        setDarkModeActive((prevActive) => !prevActive);
    }, []);

    useEffect(() => {
        document.body.classList = '';
        const className = `theme${darkModeActive ? '-dark' : '-light'}`;
        document.body.classList.add(className);
    }, [darkModeActive]);

    const renderColumns = (numberColumns, ratios) => {
        const columns = [];
        const columnClass = (index) => {
            if (!ratios) {
                return 'col-s-1';
            }

            return Object.keys(ratios)
                .map((key) => {
                    const ratio = ratios[key][index];
                    return ratio ? `col-${key}-${ratio}` : '';
                })
                .filter(Boolean)
                .join(' ');
        };
        for (let index = 1; index <= numberColumns; index++) {
            columns.push(
                <div
                    key={`col_${index}`}
                    className={`col-demo ${columnClass(index - 1)}`}
                ></div>,
            );
        }
        return columns;
    };

    return (
        <div className="app-container">
            <h1>{`Wellcome to Sass Course: ${
                darkModeActive ? ' Dark' : 'Light'
            } mode`}</h1>
            <Toggle
                className="toggle-theme"
                active={darkModeActive}
                onChange={handlerChange}
            />
            <h2>Grid System</h2>
            <div className="grid">
                {renderColumns(12)}
                {renderColumns(3, { s: [4, 4, 4], m: [2, 8, 2] })}
                {renderColumns(2, {
                    s: [12, 12],
                    m: [6, 6],
                    l: [4, 8],
                    xl: [3, 9],
                })}
            </div>
        </div>
    );
}

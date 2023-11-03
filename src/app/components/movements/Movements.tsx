'use client'
import React, { useState, useEffect } from 'react';


interface Item {
    icono: string;
    texto: string;
    monto: string;
    fecha: string;
}

function Movements() {
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('pages/api/feedback')
    //         .then((response) => {
    //             return response.json()
    //         })
    //         .then((jsonData) => {
    //             console.log(jsonData, 'jsonData')
    //             setData(jsonData)
    //         })
    //         .catch((error) => console.error(error));
    // }, []);

    return (
        <div>
            {data.map((item: Item, index) => (
                <div key={index}>
                    <p>Icono: {item.icono}</p>
                    <p>Texto: {item.texto}</p>
                    <p>Monto: {item.monto}</p>
                    <p>Fecha: {item.fecha}</p>
                </div>
            ))}
        </div>
    );
}

export default Movements;
import { useState, useEffect } from 'react';
import '../styles/table.css'

interface DataType {
    message: {
        [breed: string]: string[]
    },
    status: string
}
const table = () => {
    const [data, setData] = useState<DataType | null>(null);
    const [images, setImages] = useState({});

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(fetchedData => {
                setData(fetchedData);
                //fetch the images for the breeds
                Object.entries(fetchedData.message).forEach(([breed, _]) => {
                    fetch(`https://dog.ceo/api/breed/${breed}/images/random/1`)
                        .then(response => response.json())
                        .then(data => setImages(prev => ({ ...prev, [breed]: data.message[0] })));
                });
            })
            .catch(err => console.error(err));
    }, []);

    if(!data){
        return <p>Loading...</p>;
    }
    return (
        <div className="container">
            <table>
                <thead>
                <tr>
                    <th>Breed</th>
                    <th>Sub-Breeds</th>
                    <th>image</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(data.message).map(([breed, subBreeds]) => {
                    return (
                        <tr key={breed}>
                            <td>{breed}</td>
                            <td>{subBreeds.join(', ') || 'N/A'}</td>
                            <td><img src={images[breed]} alt={breed} height="100px" width="100px"/></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}

export default table;
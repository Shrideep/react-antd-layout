import React, { useEffect, useState } from 'react';
import { Drawer } from 'antd';

const CareerDetails = ({ player, visible, onClose }) => {

    const [details, setDetails] = useState({});
    const { name, team, age, born, batting, bowling } = details;

    useEffect(() => {
        async function fetchData() {
            await fetch('./' + player.replace(' ', '_') + '.json')
                .then(response => {
                    response.json()
                        .then(data => setDetails(data))
                })
        }
        fetchData();

        return () => {
            console.log('return of player useEffect');
        }
    }, [player]);

    useEffect(() => {

        console.log('mount')

        return () => {
            console.log('unmount');
        }

    }, []);


    return (
        <Drawer
            destroyOnClose
            title={player}
            visible={visible}
            width={640}
            onClose={onClose}
        >
            <div style={{ padding: 10 }}><p>Team - {team}</p>
                <p>age - {age}</p>
                <p>born - {born}</p>
                <p>batting - {batting}</p>
                <p>bowling - {bowling}</p>

            </div>
        </Drawer>
    )
}

export default CareerDetails;
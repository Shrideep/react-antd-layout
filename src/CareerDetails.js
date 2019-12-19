import React from 'react';
import { Drawer } from 'antd';

const CareerDetails = ({ player, visible, onClose }) => {
    return (
        <Drawer
            destroyOnClose
            title={player}
            visible={visible}
            width={640}
            onClose={onClose}
        >
        </Drawer>
    )
}

export default CareerDetails;
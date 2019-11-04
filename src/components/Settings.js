import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SettingsIcon = styled.div`
    z-index: 10;
    position: absolute;
    top: 30px;
    right: 50px;
    color: grey;
    :hover {
        cursor: pointer;
        font-size: 17px
    }
    transition: 0.1s;
`

export default function Settings({ openDialog }) {
    const [loading, setLoading] = useState(false)
    const onHoverIn = () => {
        setLoading(true)
    }
    const onHoverOut = () => {
        setLoading(false)
    }
    return (
        <SettingsIcon
            onClick={openDialog}
            onMouseOver={onHoverIn.bind(this)}
            onMouseLeave={onHoverOut.bind(this)}
        >
            <Icon name='setting' size='big' loading={loading} />
            Settings
        </SettingsIcon>
    )
}

Settings.propTypes = {
    openDialog: PropTypes.func
}

import React, { FC } from 'react'
import { isValueNullShowPlaceholder } from '../../../utils/helpers';
import { Channel } from '../../../utils/types'
import styles from './index.module.scss'

type Props = {
    channel : Channel;
}

const ChannelItem: FC<Props> = ({channel}) => {
    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <p><span>Channel Type : </span>{isValueNullShowPlaceholder(channel.type)}</p>
                <p><span>Channel Name : </span>{isValueNullShowPlaceholder(channel.name)}</p>
                <p><span>Channel Bitrate : </span>{isValueNullShowPlaceholder(channel.bitrate)}</p>
                <p><span>Channel Member Count : </span>{isValueNullShowPlaceholder(channel.member_count)}</p>
                <p><span>Channel RLPU : </span>{isValueNullShowPlaceholder(channel.rate_limit_per_user)}</p>
                <p><span>Channel Position : </span>{isValueNullShowPlaceholder(channel.position)}</p>
            </div>
        </div>
    )
}

export default ChannelItem
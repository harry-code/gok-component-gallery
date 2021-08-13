import React, { ComponentProps, CSSProperties } from 'react';
import { Modal as AntModal } from 'antd';

export function Modal({
    bodyAlign = 'center',
    ...props
}: ComponentProps<typeof AntModal> & {
    bodyAlign?: CSSProperties['textAlign'];
}) {
    return <AntModal bodyStyle={{ textAlign: bodyAlign }} {...props} />;
}
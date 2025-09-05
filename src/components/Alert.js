import React from 'react';

export default function Alert(props) {
    return (
        <>
            {props.alert && (
                <div
                    className={`alert alert-${props.alert.type} shadow`}
                    role="alert"
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        minWidth: '250px',
                        maxWidth: '300px',
                        zIndex: 1050,
                        padding: '10px 15px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        fontSize: '14px'
                    }}
                >
                    <strong>{props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1)}:</strong> {props.alert.msg}
                </div>
            )}
        </>
    );
}

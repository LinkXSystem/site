import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        footer: {
            borderTop: '1px solid #f5f5f5'
        }
    }),
);



const Footer = () => {
    const styles = useStyles();

    return (
        <footer className={styles.footer}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://github.com/LinkXSystem">ZHI & LinkSystem</a>
        </footer>
    )
}

export default Footer

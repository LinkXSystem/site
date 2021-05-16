import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';
import { GitHub, Apps } from '@material-ui/icons';

import { useStaticQuery, graphql } from 'gatsby';

const useStyles = makeStyles(() =>
    createStyles({
        application: {
            position: 'fixed',
            right: '1em',
            bottom: '3em',
        },
        app: {
            padding: '0.3em 0.4em',
            borderRadius: '0.25em',

            boxShadow: '0 8px 32px rgb(0 25 104 / 10%)'
        },
        icon: {
            textAlign: 'center',
            fontSize: '28px'
        },
        dash: {
            width: '3em',
            height: '3em',

            marginBottom: '1.25em',

            textAlign: 'center',
            lineHeight: '3em',

            borderRadius: '50%',
            boxShadow: '0 8px 32px rgb(0 25 104 / 10%)'
        }
    }),
);


const Application = () => {
    const styles = useStyles()

    const data = useStaticQuery(graphql`
        query ApplicationQuery {
            site {
                siteMetadata {
                    social {
                        github
                    }
                }
            }
        }
    `);

    const social = data.site.siteMetadata?.social

    return (
        <div className={styles.application}>
            <Tooltip title="MiniDash 应用开发中～" placement="left">
                <div className={styles.dash}>
                    <strong>D</strong>
                </div>
            </Tooltip>
            <div className={styles.app}>
                <div className={styles.icon}>
                    <a href={`${social.github}` || ``}>
                        <GitHub />
                    </a>
                </div>
                <Tooltip title="功能开发中～" placement="left">
                    <div className={styles.icon}>
                        <Apps />
                    </div>
                </Tooltip>
            </div>
        </div>
    )
}

export default Application;

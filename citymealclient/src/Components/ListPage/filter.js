import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '20%',
        paddingBottom: '3%',
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,

    },
    // dropbtn: {
    //     backgroundColor: "#4CAF50",
    //     color: "white",
    //     padding: "16px",
    //     fontSize: "16px",
    //     border: "none",
    //     cursor: "pointer"
    // },
    // dropdown: {
    //     display: "none",
    //     position: "absolute",
    //     backgroundColor: "#f9f9f9",
    //     minWidth: "160px",
    //     boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    //     zIndex: "1",
    // },
}
))

// function ListItemLink(props) {
//     return <ListItem button component="a" {...props} />;
// }

export default function Filter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <p style={{ fontSize: '1.5rem' }}>Filter By</p>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemText primary="zip code" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="boroughs" />
                </ListItem>
            </List>

        </div>
    );
}

// function Filter() {
//     const classes = useStyles();
//     return (
//         // <div className={classes.dropdown}>
//         //     <button className={classes.dropbtn}>Dropdown</button>
//         //     <div className={classes.dropdownContent}>
//         //         <a href="#">Link 1</a>
//         //         <a href="#">Link 2</a>
//         //         <a href="#">Link 3</a>
//         //     </div>
//         // </div>

//     )

// }

// export default Filter;

import React, {FC} from 'react'
import {Grid} from "@mui/material";
import {IGrodItem} from "../assets/data";


interface Props{
    GridItem: IGrodItem[]
}

const GridItems: FC<Props> = ({GridItem}) => {
    return (
        <Grid container spacing={4}>
            {GridItem.map((item) => (
                <Grid item xs={6}>
                    <div className="item">
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>
                </Grid>
            ))}
        </Grid>
    );
};

export default GridItems;
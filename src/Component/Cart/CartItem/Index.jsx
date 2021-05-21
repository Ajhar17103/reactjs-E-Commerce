import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Typography, Button} from'@material-ui/core'
import { } from '@material-ui/icons'
import useStyles from './Styles'

const CartItem = ({item,hanldeRemoveFromCart,handleUpdateCartQty}) => {
 let classes=useStyles();


    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
            <CardContent className={classes.CardContent}>
                <Typography variant='h4'>{item.name}</Typography>
                <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                <Button type="button" size="small" onClick={()=>handleUpdateCartQty(item.id, item.quantity-1)}>-</Button>
                <Typography>{item.quantity}</Typography>
                <Button type="button" size="small" onClick={()=>handleUpdateCartQty(item.id, item.quantity+1)}>+</Button>

                </div>

                <Button variant="contained" type="button" color="secondary" onClick={()=>hanldeRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>

        </Card>

    )
}

export default CartItem

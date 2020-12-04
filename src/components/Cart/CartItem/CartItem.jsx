import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onRemoveFromCart, onUpdateCartQty }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
      <CardContent className={classes.CardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <div className={classes.button}>
          <Button type="button" size="small" onClick={console.log('asdasd')}>
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>
            +
          </Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>
          Remove Item
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;

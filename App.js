import React, { useState } from 'react';
import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Badge from "@material-ui/core/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
 function App() {
    const [itemCount, setItemCount] = useState(1);
    return(<ButtonGroup>
        <Button
          onClick={() => {
            setItemCount(Math.max(itemCount - 1, 0));
          }}
        >
          {" "}
          <RemoveIcon fontSize="small" />
        </Button>
        <Button
          onClick={() => {
            setItemCount(itemCount + 1);
          }}
        >
          {" "}
          <AddIcon fontSize="small" />
        </Button>
      </ButtonGroup>
    )
        }
        export default App;
import React,{useState} from "react";
import { Card,CardContent,Grid,TextField,Button } from "@mui/material";



function App() {
  const[data,setData]=useState(["Apple","Mango","Banana"]);
  const[txt,setTxt]=useState("");
    return (
      <Card>
        <CardContent>
           <Grid container spacing={2}>
            <Grid item xs={8}>
        <TextField onChange={(e)=>setTxt(e.target.value)}
        variant="outlined" label="Add Fruit"
            fullWidth />
            </Grid>

       <Grid item xs={4}>
        <Button onClick={()=> setData([...data, txt])} 
        variant="contained" sx={{height:55}} 
         fullWidth>
        Add Fruits
        </Button>
       </Grid>
             {
                      data.map(item=>
                        <Grid item xs={12}> 
                          {item}
                        </Grid>
                        ) 
             }




           </Grid>

        </CardContent>
      </Card>
   
  );
}

export default App;

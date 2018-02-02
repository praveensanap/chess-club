
import React,   { Component } from 'react'
import { Card , Typography ,CardContent} from 'material-ui'
export default class EditProfile extends Component {

    render(){
        let style = {
            'margin' : '10px'
        }
        return(
            <Card style={style}>
                <CardContent>
                    <Typography component="h2" type="header">
                        Tell us more about you!
                    </Typography>

                </CardContent>
            </Card>
        )
    }

}
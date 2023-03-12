import React ,{Component} from 'react';
import {Text,View,Image,TextInput,Button,StyleSheet} from 'react-native';


class  App extends Component{
constructor(){
super()
this.state={
text:""
}
clicknow=()=>{
this.setState({text:"Via name"})
}}

render(){
return(
<View>
<Text style={styles.text}>Hello in SnapChat </Text>
<Image
  source={{uri:'https://www.almrsal.com/wp-content/uploads/2019/04/%D8%B1%D9%85%D8%B2%D9%8A%D8%A7%D8%AA-%D8%B3%D9%86%D8%A7%D8%A8-%D8%B4%D8%A7%D8%AA-%D8%AC%D8%AF%D9%8A%D8%AF%D9%87-2019.png'}}
  style={styles.Image}
></Image>
<TextInput style={styles.input}
          placeholder="Enter Your Username"
/>
<TextInput style={styles.input}
          placeholder="Enter The Password"
/>
<Button sstyle={styles.Button}
          title="login" 
          color="#a9a9a9"
           >
          
</Button>
<Button style={styles.Button}
          title="Forget your Password?"
          color="#a9a9a9"
           >
          
          
          
</Button>
</View>








    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
    input: {
    height: 40,
    margin:5,
    borderWidth: 1,
    padding: 10,
  },
   text: {
    fontSize: 16,
    textAlign:'center',
    flex:1,
    fontWeight: 'bold',
   backgroundColor: '#a9a9a9',
   color:'white'
    },
    Button:{
      fontSize: 16,
    textAlign:'center',
    flex:1,
    fontWeight: 'bold',
   backgroundColor: '#a9a9a9',
   color:'white',
   margin:10,fontWeight: 'bold',
    },
    Image:{
    width: 270, height: 200,justifyContent: 'center'},
});
   
      

 
export default App;
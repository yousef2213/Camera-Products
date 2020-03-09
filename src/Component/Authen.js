import React, { Component } from 'react'
import {FaGoogle} from 'react-icons/fa'
import {Route,Switch} from 'react-router-dom'


//pages
import Home from '../pages/HomePage'
import Store from '../pages/Store'
import Navbar from './Navbar'
import Single from '../pages/Single'
import Sidecart from './Sidecart'

var firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyAm2Uh91R8lWaudtGb4WN1BArqijnJoyaI",
    authDomain: "camera-products.firebaseapp.com",
    databaseURL: "https://camera-products.firebaseio.com",
    projectId: "camera-products",
    storageBucket: "camera-products.appspot.com",
    messagingSenderId: "401794780092",
    appId: "1:401794780092:web:1c979d4b7ee108d62779b9",
    measurementId: "G-BGZ1H52VBS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export default class Authen extends Component {
    Login(){
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email,password);
        promise.then(users =>{
            this.setState({
                isLogin : true,
                err : ""
            })
        })
        promise.catch(e=>{
            var err = e.message;
            if(err === "The email address is badly formatted."){
                document.querySelector(".message").style.color = "#b33f3f";
                document.querySelector(".message").style.paddingBottom = "10px";
            }
            this.setState({err})
        })
    }
    
    SingUp(){
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        var name = this.refs.name.value;
        var hel = document.getElementById("hel");
        hel.classList.add("flex")
        hel.classList.remove("hh")
        if(hel.classList.contains === "flex" || name != ""){
            const auth = firebase.auth();
            const promise = auth.createUserWithEmailAndPassword(email,password);

            promise
            .then(users =>{
                var err = "Welcome " +  this.refs.name.value;
                document.querySelector(".message").style.color = "green";
                document.querySelector(".message").style.paddingBottom = "10px";
                firebase.database().ref('users/'+users.user.uid).set({
                    Name : users.user.displayName,
                    email : users.user.email
                });
                
                this.setState({err : err})
                hel.classList.remove("flex")
                hel.classList.add("hh")
            });
            promise
            .catch( e =>{
                var err = e.message;
                this.setState({err: err});
            })
        }
    };
    
    SingOut(){
        firebase.auth().signOut().then(users =>{
            var signout = document.getElementById("signout");
            signout.classList.add("hide");
            this.setState({isLogin:false});  
        })
    };

    // google(){
    //     console.log("hello to google");
    //     var provider = new firebase.auth.GoogleAuthProvider();
    //     var promise = firebase.auth().signInWithPopup(provider);
    //     promise.then(result =>{
    //         var user = result.user;
    //         firebase.database().ref('users/'+ user.uid).set({
    //             Name : user.displayName,
    //             email : user.email
    //         });
    //         this.setState({isLogin : true})
    //     })
    //     promise.catch(e => this.setState({err : e.message}))
    // };



    constructor(props){
        super(props);
        this.state = {
            err : '',
            isLogin : false
        }
        this.Login = this.Login.bind(this);
        this.SingUp = this.SingUp.bind(this);
        this.SingOut = this.SingOut.bind(this);
        //this.google = this.google.bind(this);
    }
    render() {
        var login;
        var face;
        if(this.state.isLogin === false){
            login =
            <div className="content">
                <div className="form">
                    <div className="divs">
                        <div className="flex">
                            <label htmlFor="text" className="label-email">Email Address: </label>
                            <input type="email" id="text" placeholder="Enter Email..." ref="email" />
                        </div>
                        <div className="flex">
                            <label htmlFor="pass" className="label-password">Password : </label>
                            <input type="password" id="pass" placeholder="Enter Password..." ref="password" />
                        </div>
                        <div className="hh" id="hel">
                            <label htmlFor="pass" className="label-password">Your Name : </label>
                            <input type="text" id="name" placeholder="Enter Name..." ref="name" />
                        </div>
                        <h6 className="message">{this.state.err}</h6>
                        <div className="flex">
                            <input type="button" className="btn btn-primary but-reg" onClick={this.Login} value="Login" />
                        </div>
                        <div className="flex">
                                <button className="btn btn-primary but-reg"  id="" onClick={this.SingUp} > Register</button>
                        </div>
                        {/* <hr />
                        <div className="flex">
                                <button className="btn btn-primary but-reg"  id="" onClick={this.SingUp} > Register</button>
                        </div>
                        <div className="flex-reg">
                            <button className="btn btn-info but-google"  id="" onClick={this.google} ><FaGoogle className="icon-googlee" />Sign With Google</button>
                        </div> */}
                        
                    </div>
                </div>
            </div>;
            face = ''

        }else if(this.state.isLogin === true){
            face =
                <> 
                <Navbar SingOut={this.SingOut} />
                <Sidecart />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/store" component={Store} />
                    <Route exact path="/single/:id" component={Single} />
                </Switch>
                </>;
            login =''
            
        }





        return (
            <div>
                {login}
                {face}
            </div>
            // <div>
            //     <input type="email" id="text" placeholder="Enter Email..." ref="email" />
            //     <input type="password" id="pass" placeholder="Enter Password..." ref="password" />
            //     <h4 className="message">{this.state.err}</h4>
            //     <button className="btn" onClick={this.Login} >Login</button>
            //     <button className="btn" onClick={this.SingUp} >Sign Up</button>
            //     <button className="btn hide"  id="logoo" onClick={this.SingOut} >Sign Out</button>
            //     <button className="btn"  id="google" onClick={this.google} >Sign With Google</button>
            // </div>
        )
    }
}




// import React, { Component } from 'react'
// import { auth } from 'firebase';
// var firebase = require('firebase');

// var firebaseConfig = {
//     apiKey: "AIzaSyBmHTfaOJnS4JR4cd1kndoCYaqRmN5tbyQ",
//     authDomain: "products-92374.firebaseapp.com",
//     databaseURL: "https://products-92374.firebaseio.com",
//     projectId: "products-92374",
//     storageBucket: "products-92374.appspot.com",
//     messagingSenderId: "597916539014",
//     appId: "1:597916539014:web:baaf675421b0bffd521907",
//     measurementId: "G-80RZXFSTL1"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export default class Authen extends Component {

//     handelChange(){
//         var email = this.refs.email.value;
//         var password = this.refs.password.value;
//         console.log(email,password);
//         firebase.auth().signInWithEmailAndPassword(email,password).then(user =>{
//             var logoo = document.getElementById("logoo");
//             logoo.classList.remove("hide")
//         }).catch(e =>{this.setState({err:e.message })})
//     }
//     singup(){
//         var email = this.refs.email.value;
//         var password = this.refs.password.value;
//         firebase.auth().createUserWithEmailAndPassword(email,password).then(users =>{
//             var err = "Welcome " +users.user.email;
//             firebase.database().ref("Users/"+users.user.uid).set({
//                 email : users.user.email
//             });
//             this.setState({err})
//         }).catch(e =>{this.setState({err : e.message})})
//     }
//     singout(){
//         firebase.auth().signOut().then(users =>{
//             var logoo = document.getElementById("logoo");
//             logoo.classList.add("hide")
//         })
//     }
//     google(){
//         console.log("helloo google");
//         var provider = new firebase.auth.GoogleAuthProvider();
//         var promise = firebase.auth().signInWithPopup(provider);
//         console.log(promise);
//         promise.then( result =>{
//             var user = result.user;
//             firebase.database().ref("users/"+user.uid).set({
//                 email : user.email,
//                 Name : user.displayName
//             })
//             console.log(result.user);
//         });
//         promise.catch(e => console.log(e.message))
//     }

//     constructor(props){
//         super(props);
//         this.state = {
//             err : ''
//         }
//         this.handelChange = this.handelChange.bind(this);
//         this.singup = this.singup.bind(this);
//         this.singout =this.singout.bind(this);
//         this.google = this.google.bind(this)
//     }

//     render() {
//         return (
//             <div>
//                 <input type="email" id="text" placeholder="Enter Email..." ref="email" />
//                 <input type="password" id="pass" placeholder="Enter Password..." ref="password" />
//                 <p className="message">{this.state.err}</p>
//                 <button className="btn" onClick={this.handelChange}>Login</button>
//                 <button className="btn" onClick={this.singup}>Sign Up</button>
//                 <button className="btn hide"  id="logoo" onClick={this.singout}>Sign Out</button>
//                 <button className="btn"  id="google" onClick={this.google}>Sign With Google</button>
//             </div>
//         )
//     }
// }


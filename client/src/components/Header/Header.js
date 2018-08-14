import React, { Component } from "react";
import "./Header.css";
import axios from "axios";
import Auth from '../../utils/Auth';
import { Card, CardTitle, CardText } from 'material-ui/Card';

class Header extends Component {

        constructor(props) {
        
            super(props);
           

            this.state = {
                showModal: false,
                loading: false,
                error: null,
                activeTab: 0, 
                loggedIn: null, 
                recoverPasswordSuccess: null, 

                
                firstname: "", 
                lastname: "", 
                email: "", 
                password: "", 

            };
        
         
 

        } 

    

        // handleInputChange(event) { //* REG

        // console.log(event);
       
           
        //     const { name, value } = event.target;
        //         this.setState({
                   
        //             [name]: value
                
        //         });       
        // }
        

        onLoginSuccess() {
           
            var loginURL = "/auth";
            // http://localhost:3000

            const login = {
                "email": this.state.email,
                "password": this.state.password
        
            }
        
            axios.post(loginURL + "/login", { 
                
                email: this.state.email,
                password: this.state.password
                
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(res.body);       
                if (res.status === 200) {
                    // update App.js state 
                    // this.props.updateUser ({
                    //     loggedIn: true,
                    //     email: res.data.email
                    // }) // update the state to redirect to 
                    
                    this.setState({
                        redirectTo: '/travel'
                    })
                } 
            }).catch(error => {
                console.log(error);
                window.location = "/"
            });
    
        }

        // onRegisterSuccess() {
        
            // var registerURL = "/auth";
            // //http://localhost:3000
            // const register = {
            //     firstname: this.state.firstname,
            //     lastname: this.state.lastname,
            //     email: this.state.email,
            //     password: this.state.password
        
            // }
        
            // axios.post(registerURL + "/register", { 

            //     firstname: this.state.firstname,
            //     lastname: this.state.lastname,
            //     email: this.state.email,
            //     password: this.state.password

            // })
            //     .then(res => {
            //         console.log(res);
            //         console.log(res.data);
            //         console.log(res.body);
            
            //         if (res.data) {
            //             // window.location = "/login"
            //             this.setState({
            //                 // redirectTo: '/login'
                            
            //             })
            //         } else if (res.data.redirect === '/login') {
            //             // window.location = "/login"
                        
            //         }
            //     }).catch(error => {
            //         console.log(error);
            //         // window.location = "/login"
                    
            //     });
        // }

    
    //   onLogin(yo) { //
    //     console.log('__onLogin__');
    
    //     console.log(yo);
    //     // this.onLoginSuccess('');

    //   } 

    //   goToTab(index) {
    //     this.setState({ activeTab: index });
    //   }

      onRegister() { //
        console.log('__onRegister__');
       
        var registerURL = "/auth";
 
            axios.post(registerURL + "/register", { 

                firstname: this.state.firstname,
                lastname: this.state.lastname,
                username: this.state.email,
                password: this.state.password

            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    console.log(res.body);
            
                    if (res.data) {
                         
                        this.setState({
                             redirectTo: '/login'
                             
                            
                            
                        })

                        console.log('success!')
                        // window.location = "/login"
                    } else if (res.data.redirect === '/login') {
                        // window.location = "/login"
                        
                    }
                }).catch(error => {
                    console.log(error);
                    // window.location = "/login"
                    
                });
        
        // this.onRegisterSuccess();
      }
    
     


    //   openModal(initialTab) { //
    //     this.setState({
    //             showModal: true,
    //         });
    //   }
     
    //     onLoginFail(method, response) {

    //         this.setState({
    //         loading: false,
    //         error: response
    //         })
    //     }
    
     
    //     startLoading() {
    //      this.setState({
    //       loading: true
    //      })
    //     }
     
    //   finishLoading() {
    //     this.setState({
    //       loading: false
    //     })
    //   }
     

    //     afterTabsChange() {
    //         this.setState({
    //         error: null,
    //         recoverPasswordSuccess: false,
    //         });
    //     }


    //     closeModal() {
    //         this.setState({
    //           showModal: false,
    //           error: null
    //         });
    //     }
          
        
        
        // handleSelect(key) { //tab
        //     alert(`selected ${key}`);
        //     this.setState({ key });
        // }


        render() {
            return (

            // const loggedIn = this.state.loggedIn
            // ? <div>
            //     <p>You are signed in with: {this.state.loggedIn}</p>
            //   </div>
            // : <div>
            //     <p>You are signed out</p>
            // </div>;
            // const isLoading = this.state.loading;
            


                <header className="masthead text-center text-white d-flex">
        
                    <div className="container my-auto">
                                            
                        <div className="row">
                        
                            <div className="col-lg-10 mx-auto">

                                <li className="animated fadeInDownBig">
                                    <img className="smt" src="/images/SMT.png" alt="SMT"/>   
                                </li>           
                            </div>
                           
                            <div className="col-lg-8 mx-auto headerDiv">
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                {/* <button className="RML-btn" onClick={() => this.setState({ show:true })}>Get Styled</button>  */}
                                <Card className="container" style= {{
                                        background:'transparent',
                                }}>
                                    {Auth.isUserAuthenticated() ? (
                                        <CardText style={{ fontSize: '16px', color: 'white' }}>Welcome! You are logged in.</CardText>
                                    ) : (
                                        <CardText style={{ fontSize: '16px', color: 'white' }}>You are not logged in.</CardText>
                                    )}
                                </Card>
                            </div>






                                
                                   
{/*                                 
                                <div>

                                    <div style={{
                                            display: this.state.showModal ? 'block' : 'none',
                                            position: 'fixed',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            background: 'white',
                                            width: 300,
                                            height: 300,
                                            color: 'black',
                                        }}>
                                            <div onClick={() => this.goToTab(0)}>Login</div>
                                            <div onClick={() => this.goToTab(1)}>Register</div>

                                            <div style={{
                                                display: this.state.activeTab === 0 ? 'block' : 'none'
                                                }}><h1>Login</h1>

                                            </div>
                                            
                                            <div style={{
                                                display: this.state.activeTab === 1 ? 'block' : 'none'
                                                }}><h1>Register</h1>

                                            </div>

                                    </div>
                                   
                                </div> */}
                             </div>
                        </div> 
                   
                </header>
            
                
            );
        } 
}


export default Header;

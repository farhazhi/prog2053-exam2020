import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  render() {
  return html
    <form onsubmit="javascript: return false;" id="form" method="POST">
      
    <div>
      <label for="firstName">Fornavn</label>
      <input id="firstName" name="firstName" type="text" value="${this.user.firstName}" required>
    </div>
    
    <div>
      <label for="lastName">Etternavn</label>
      <input id="lastName" name="lastName" type="text" value="${this.user.lastName}" required>
    </div>
    
    <div>
      <label for="pwd">Passord</label>
      <input id="pwd" name="pwd" type="password" value=" " required>
    </div>
    
    <input type="submit" @click = ${this.userUpdate} id=" submit " name =" editUser " value=" Submit "></input>

    </form>
    
  }
  
  
  
   //will update user information
  userUpdate(e) {
   const dataForm = new FormData(e.target.form);
   console.log(e)
    
   fetch('api/updateUser.php' , { //fetch from the database 
      method: 'POST' ,
      body: dataForm
    }).then(res => res.json())
      .then(data=>{
         if ( data.status ==' success ') {
            console.log("User updated");
          
        }  else {
            console.log(" User not updated ");
        }
      })
  }
  
}
customElements.define('edit-user', EditUser);

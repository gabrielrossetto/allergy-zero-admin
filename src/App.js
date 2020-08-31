import React, { Component } from "react"
import firebase from './config/firebase';

export default class App extends Component {

  dbRef = firebase.firestore().collection('products');

  state = {
    description: "",
    isSoyContaining: false,
    isGlutenContaining: false,
    isLactoseContaining: false,
    isEggContaining: false,
    isBeefContaining: false,
    isPigMeatContaining: false,
    isChickenMeatContaining: false,
    isFishContaining: false,
    isCaffeineContaining: false,
    isPeanutContaining: false,
    isAllowedToVegetarians: true,
    isAllowedToVegans: true,
  }

  render() {
    const { description, isSoyContaining, isGlutenContaining, isLactoseContaining, isEggContaining, isBeefContaining, isPigMeatContaining,
      isChickenMeatContaining, isFishContaining, isCaffeineContaining, isPeanutContaining, isAllowedToVegetarians, isAllowedToVegans } = this.state;

    const updateForm = (fieldName, event, parameterKey) => {
      this.setState({ [fieldName]: event.currentTarget[parameterKey] });
    };

    const addProduct = () => {
      if (this.state.description === '') {
        alert('Fill at least the description!')
      } else {
        this.dbRef.add({
          ...this.state
        }).then(() => {
          this.setState({
            description: "",
            isSoyContaining: false,
            isGlutenContaining: false,
            isLactoseContaining: false,
            isEggContaining: false,
            isBeefContaining: false,
            isPigMeatContaining: false,
            isChickenMeatContaining: false,
            isFishContaining: false,
            isCaffeineContaining: false,
            isPeanutContaining: false,
            isAllowedToVegetarians: true,
            isAllowedToVegans: true,
          });
          alert('Product added!')
        })
          .catch((err) => {
            console.error("Error found: ", err);
          });
      }
    }

    return (
      <>
        <h1>Allergy Zero Admin</h1>
        <form>
          <input type="text" placeholder="Description" value={description} onChange={event => updateForm('description', event, 'value')} />

          <label> Is Soy Containing? </label>
          <label class="switch">
            <input type="checkbox" value={isSoyContaining} onChange={event => updateForm('isSoyContaining', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> Is Gluten Containing? </label>
          <label class="switch">
            <input type="checkbox" value={isGlutenContaining} onChange={event => updateForm('isGlutenContaining', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> Is Lactose Containing? </label>
          <label class="switch">
            <input type="checkbox" value={isLactoseContaining} onChange={event => updateForm('isLactoseContaining', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> Is Egg Containing? </label>
          <label class="switch">
            <input type="checkbox" value={isEggContaining} onChange={event => updateForm('isEggContaining', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> Is Beef Containing? </label>
          <label class="switch">
            <input type="checkbox" value={isBeefContaining} onChange={event => updateForm('isBeefContaining', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> Is Pig Meat Containing? </label>
          <label class="switch">
            <input type="checkbox" value={isPigMeatContaining} onChange={event => updateForm('isPigMeatContaining', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> Is Chicken Meat Containing? </label>
          <label class="switch">
            <input type="checkbox" value={isChickenMeatContaining} onChange={event => updateForm('isChickenMeatContaining', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> Is Fish Containing? </label>
          <label class="switch">
            <input type="checkbox" value={isFishContaining} onChange={event => updateForm('isFishContaining', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> Is Caffeine Containing? </label>
          <label class="switch">
            <input type="checkbox" value={isCaffeineContaining} onChange={event => updateForm('isCaffeineContaining', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> Is Peaunt Containing? </label>
          <label class="switch">
            <input type="checkbox" value={isPeanutContaining} onChange={event => updateForm('isPeanutContaining', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> Is it allowed to Vegetarians? </label>
          <label class="switch">
            <input type="checkbox" value={isAllowedToVegetarians} onChange={event => updateForm('isAllowedToVegetarians', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> Is it allowed to Vegans? </label>
          <label class="switch">
            <input type="checkbox" value={isAllowedToVegans} onChange={event => updateForm('isAllowedToVegans', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>


          <button type="button" className="formSubmit" onClick={() => addProduct()}>Add Product</button>
        </form>
      </>
    )
  }
}

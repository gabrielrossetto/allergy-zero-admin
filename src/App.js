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
        alert('Preencha pelo menos a descrição!')
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
            isAllowedToVegetarians: false,
            isAllowedToVegans: false,
          });
          alert('Produto adicionado!')
        })
          .catch((err) => {
            console.error("Error : ", err);
          });
      }
    }

    return (
      <>
        <h1>Allergy Zero Admin</h1>
        <form>
          <input type="text" placeholder="Descrição" value={description} onChange={event => updateForm('description', event, 'value')} />

          <label> Contém Soja? </label>
          <label class="switch">
            <input type="checkbox" value={isSoyContaining} onChange={event => updateForm('isSoyContaining', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> Contém Glúten? </label>
          <label class="switch">
            <input type="checkbox" value={isGlutenContaining} onChange={event => updateForm('isGlutenContaining', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> Contém Lactose? </label>
          <label class="switch">
            <input type="checkbox" value={isLactoseContaining} onChange={event => updateForm('isLactoseContaining', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> Contém Ovo? </label>
          <label class="switch">
            <input type="checkbox" value={isEggContaining} onChange={event => updateForm('isEggContaining', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> Contém Carne Bovina? </label>
          <label class="switch">
            <input type="checkbox" value={isBeefContaining} onChange={event => updateForm('isBeefContaining', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> Contém Carne Suína? </label>
          <label class="switch">
            <input type="checkbox" value={isPigMeatContaining} onChange={event => updateForm('isPigMeatContaining', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> Contém Carne de Frango? </label>
          <label class="switch">
            <input type="checkbox" value={isChickenMeatContaining} onChange={event => updateForm('isChickenMeatContaining', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> Contém Peixe? </label>
          <label class="switch">
            <input type="checkbox" value={isFishContaining} onChange={event => updateForm('isFishContaining', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> Contém Cafeína? </label>
          <label class="switch">
            <input type="checkbox" value={isCaffeineContaining} onChange={event => updateForm('isCaffeineContaining', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> Contém Amendoim? </label>
          <label class="switch">
            <input type="checkbox" value={isPeanutContaining} onChange={event => updateForm('isPeanutContaining', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> É recomendado para Veganos? </label>
          <label class="switch">
            <input type="checkbox" value={isAllowedToVegans} onChange={event => updateForm('isAllowedToVegans', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>

          <label> É recomendado para Vegetarianos? </label>
          <label class="switch">
            <input type="checkbox" value={isAllowedToVegetarians} onChange={event => updateForm('isAllowedToVegetarians', event, 'checked')} />
            <span class="slider"></span>
          </label>
          <br></br>
          <br></br>


          <button type="button" className="formSubmit" onClick={() => addProduct()}>Adicionar Produto</button>
        </form>
      </>
    )
  }
}

import React from "react";
import axios from 'axios';


import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { Form, Container } from "./styles";

export default function App() {

  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const handleSave = async e=> {
      console.log(e,"-------------------------");
      
    e.preventDefault();
    // const { name, email, password } = this.state;
    // if (!name || !email || !password) {
    //   this.setState({ error: "Preencha todos os dados para se cadastrar" });
    // } else {
    //   try {
    //     await axios.post("http://localhost:4000/users", { name, email, password });
    //     this.props.history.push("/");
    //   } catch (err) {
    //     console.log(err);
    //     this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
    //   }
    // }
  };

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    console.log(results, "1--dedee");
    console.log(address, "2--dedee");
    console.log(value, "3--dedee");
    
    setCoordinates(latLng);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
              <Container>
                <Form onSubmit={handleSave}>
                    <input
                        type="text"
                        placeholder="Nome"
                        onChange={e => this.setState({ place: e.target.value })}
                    {...getInputProps({ placeholder: "Digite o lugar que deseja cadastrar" })} />
                    <button type="submit">Cadastrar</button>
                </Form>
            </Container>

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}
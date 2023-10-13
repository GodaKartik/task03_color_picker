import { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      activeColor: "white",
    };
  }
  render() {
    let color_button = this.props.colors.map((t) => {
      return (
        <button
          style={{
            border: "none",
            padding: "10px",
            width: "30px",
            height: "30px",
            backgroundColor: t,
            marginRight: "3px",
            marginLeft: "3px",
            cursor: "pointer",
            boxShadow: "2px 2px 2px grey",
          }}
          onClick={() => {
            this.setState({ visible: false, activeColor: t });
          }}
        ></button>
      );
    });
    return (
      <div>
        <h2
          style={{
            marginTop: "10vh",
            marginLeft: "auto",
            marginRight: "auto",
            width: "fit-content",
          }}
        >
          Color Picker
        </h2>
        <center
          style={{
            padding: "10px",
            border: "1px solid black",
            borderRadius: "10px",
            paddingBottom: "100px",
            paddingTop: "100px",
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: this.state.activeColor,
          }}
        >
          <div
            style={{
              visibility: this.state.visible ? "" : "hidden",
            }}
          >
            {color_button}
          </div>
          <button
            style={{
              margin: "20px",
              border: "none",
              backgroundColor: "#4AAF53",
              padding: "5px",
            }}
            onClick={() => {
              this.setState({ visible: true });
            }}
          >
            Pick a color
          </button>
        </center>
      </div>
    );
  }
}

export default ColorPicker;

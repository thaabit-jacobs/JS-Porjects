'use strict';

const e = React.createElement;

class CountButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disliked: false,
    liked: false };
  }

  render() {
      if(liked){
        return (
            <button style="background:green; color:white" onClick={() => this.setState({ liked: true })}>
              liked
            </button>
          );
      }

      if(disliked){
        return (
            <button style="background:green; color:white" onClick={() => this.setState({ disliked: true })}>
              disliked
            </button>
          );
      }


      return (
        <button style="background:green; color:white" onClick={() => this.setState({ disliked: true })}>
          disliked
        </button>
      );
  }
}

const domContainer = document.querySelector('#counter');
ReactDOM.render(e(CountButton), domContainer);
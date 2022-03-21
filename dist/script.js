function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const audioFiles = [
["Q", "hh03", "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Extended/24[kb]808-hh03.wav.mp3"],
["W", "bd01", "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Extended/21[kb]808-bd01.wav.mp3"],
["E", "bd09", "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Extended/152[kb]808-bd09.wav.mp3"],
["A", "chi3", "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Extended/42[kb]808-chi3.wav.mp3"],
["S", "clap2", "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Extended/65[kb]808-clap2.wav.mp3"],
["D", "clo2", "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Extended/64[kb]808-clo2.wav.mp3"],
["Z", "cym01", "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Extended/143[kb]808-cym01.wav.mp3"],
["X", "rim3", "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Extended/7[kb]808-rim3.wav.mp3"],
["C", "tlo1", "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Extended/80[kb]808-tlo1.wav.mp3"]];


const player = id => {
  let file = document.getElementById(id);
  file.load();
  return file.play();
};
const displayUp = x => {
  let display = document.getElementById(x);
  return display.innerHTML = display.parentNode.id;
};
const addClass = x => {
  let butt = document.getElementById(x).parentNode;
  butt.classList.add("active");
  setTimeout(() => butt.classList.remove('active'), 150);
};
class Drum extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "butClick",








    (id, title) => {
      this.setState({
        play: player(id),
        title: displayUp(id),
        class: addClass(id) });

    });_defineProperty(this, "keyPress",

    (title, id, e) => {
      if (audioFiles.map(x => x[0]).indexOf(e.key.toUpperCase()) !== -1) {
        this.setState({
          play: player(e.key.toUpperCase()),
          title: displayUp(e.key.toUpperCase()),
          class: addClass(e.key.toUpperCase()) });

      }
    });this.state = { play: false, title: "----", class: '' };this.butClick = this.butClick.bind(this);this.keyPress = this.keyPress.bind(this);}

  render() {
    let buttons = [];
    for (let i = 0; i < audioFiles.length; i++) {
      let x = audioFiles[i][0];
      buttons.push( /*#__PURE__*/
      React.createElement(Audio, {
        f: this.butClick.bind(this, x, audioFiles[i][1]),
        k: event => this.keyPress(audioFiles[i][1], x, event),
        id: x,
        title: audioFiles[i][1],
        name: audioFiles[i][0],
        src: audioFiles[i][2] }));


    }
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("div", { id: "display" }, this.state.title), /*#__PURE__*/
      React.createElement("div", { className: "pad-bank" }, buttons)));


  }}


class Audio extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("button", {
        tabindex: "99",
        id: this.props.title,
        className: "drum-pad",
        onClick: this.props.f,
        onKeyPress: this.props.k },
      this.props.name, /*#__PURE__*/
      React.createElement("audio", {
        className: "clip",
        id: this.props.id,
        src: this.props.src })));



  }}


//render//
ReactDOM.render( /*#__PURE__*/React.createElement(Drum, null), document.getElementById('wrap'));
document.addEventListener("click", () => document.querySelector(".drum-pad").focus());
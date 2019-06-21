import React from "react";

const titles = [
  `An open source R&D lab dedicated to reducing to greenhouse gas
emisions.`,
  `Obsessive focus on achieving maximum climate impact, as soon as
possible.`,
  `Human ingenuity can fix climate change, but we only have a few years
to act.`
];

export default class Title extends React.Component {
  state = {
    idx: 0
  };

  render() {
    const { idx } = this.state;
    return (
      <div class="title">
        Open Climate Fix
        <div class="subtitle">{titles[idx]}</div>
      </div>
    );
  }
}

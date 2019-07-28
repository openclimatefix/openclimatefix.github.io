import React from "react";

const headers = [
  "Define Machine Solvable Problems",
  "Collate and Release Datasets",
  "Enable Global Research",
  "Scale Solutions"
];

const content = [
  `Search for Machine Learning problems where, if we solve a well-defined ML task, then there's likely to be a large climate impact.`,
  `Collate & release data, and write software tools to make it super-easy for people to consume this data.`,
  `Run a collaborative 'global research project' where everyone from 16-year-olds to PhD students to corporate research labs can help solve the ML task (and, over the last 6 weeks, I've received over 300 emails from people who'd love to get involved).`,
  `Once the community has developed good solutions, help to put those into production, so we can be reducing emissions ASAP.`
];

export default class Tabs extends React.Component {
  state = {
    index: 0
  };

  setIndex = index => () => {
    this.setState({
      index
    });
  };

  render() {
    const { index } = this.state;

    return (
      <>
        <div class="tabs">
          {headers.map((x, i) => (
            <div
              id="4"
              className={`tab ${i === index && "tab_active"}`}
              onClick={this.setIndex(i)}
            >
              <span className="tab_number">{i + 1}</span>
              {x}
            </div>
          ))}
        </div>
        <div id="inner" className="tab_inner">
          {content[index]}
        </div>
      </>
    );
  }
}

import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: "uc-tooltip",
  styleUrl: "./tooltip.css",
  shadow: true,
})
export class ToolTip {
  @State() tooltipVisible = false;
  @Prop() text: string;
  onToggleTooltip() {
    this.tooltipVisible = !this.tooltipVisible;
  }

  render() {
    let tooltip = null;
    if (this.tooltipVisible) {
      tooltip = <div id="tooltip-text">{this.text}</div>;
    }
    return [
      <slot></slot>,
      <span id="tooltip-icon" onClick={this.onToggleTooltip.bind(this)}>
        ?
      </span>,
      tooltip,
    ];
  }
}

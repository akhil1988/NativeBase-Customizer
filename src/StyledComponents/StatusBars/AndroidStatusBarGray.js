import * as React from "react";

export default (props: any) => (
  <div style={{ position: "relative", width: props.width }}>
    <BatterySection width={props.width} left={0} />
    <NetworkSection width={props.width} left={props.width - 115} />
  </div>
);

export class BatterySection extends React.Component<any, any> {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: this.props.left
        }}
      >
        <svg
          width={`${this.props.width}px`}
          height="24px"
          viewBox={`0 0 ${this.props.width} 24`}
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <rect
              fill="#E0E0E0"
              x={0}
              y={0}
              width={this.props.width}
              height={24}
            />
          </g>
        </svg>
      </div>
    );
  }
}
export class NetworkSection extends React.Component<any, any> {
  render() {
    // console.log("NetworkSection", this.props.left, this.props.width);
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: this.props.left
        }}
      >
        <svg
          width={`${this.props.width}px`}
          height="24px"
          viewBox={`0 0 ${this.props.width} 24`}
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            // transform="translate(242.000000, 0.000000)"
            strokeWidth={1}
          >
            <text
              opacity="0.9"
              transform="translate(74.000000, 4.000000)"
              fill="#000"
              fillOpacity="0.600000024"
              fontFamily="Roboto-Medium, Roboto"
              fontSize={14}
              fontWeight={400}
            >
              <tspan x="0.459960938" y={13}>
                12:30
              </tspan>
            </text>
            <g transform="translate(55.000000, 4.000000)" fill="transparent">
              <polygon points="0 0 16 0 16 16 0 16" />
              <polygon
                fillOpacity="0.600000024"
                fill="#000"
                points="9 1.875 9 1 6 1 6 1.875 3 1.875 3 15 12 15 12 1.875"
              />
            </g>
            <g transform="translate(35.000000, 4.000000)" fill="transparent">
              <polygon points="0 0 16 0 16 16 0 16" />
              <polygon
                fillOpacity="0.600000024"
                fill="#000"
                points="0 15 14 15 14 1"
              />
            </g>
            <g transform="translate(14.000000, 4.000000)" fill="transparent">
              <polygon points="2 0 18 0 18 16 2 16" />
              <path
                d="M.977 4.016A14.934 14.934 0 0 1 10 1c3.387 0 6.512 1.123 9.023 3.016L10 15 .977 4.016z"
                fillOpacity="0.600000024"
                fill="#000"
              />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
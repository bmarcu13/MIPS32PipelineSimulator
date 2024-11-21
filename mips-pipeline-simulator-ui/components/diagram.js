"use client";

import { useState, useEffect } from "react";
import MemoryList from "./MemoryList";

export default function Diagram({ values }) {
    // const [pcValue, setPcValue] = useState(0);

    console.log(values);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            // width="1422px"
            viewBox="-0.5 -0.5 1422 740"
            style={{ maxWidth: "100%" }}
        >
            <defs />
            <g>
                <g data-cell-id="0">
                    <g data-cell-id="1">
                        <g data-cell-id="fya-JSUQ_MmqU_CgoYYm-9">
                            <g>
                                <path
                                    d="M 179 434 L 179 421.35 Q 179 411 168.65 411 L 39.35 411 Q 29 411 29 421.35 L 29 434"
                                    fill="#e51400"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <path
                                    d="M 29 434 L 29 635.65 Q 29 646 39.35 646 L 168.65 646 Q 179 646 179 635.65 L 179 434"
                                    fill="rgb(255, 255, 255)"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <path
                                    d="M 29 434 L 179 434"
                                    fill="none"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                            <g>
                                <g transform="translate(-0.5 -0.5)">
                                    <switch>
                                        <foreignObject
                                            pointer-events="none"
                                            width="100%"
                                            height="100%"
                                            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                            style={{ overflow: "visible", textAlign: "left" }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "unsafe center",
                                                    justifyContent: "unsafe center",
                                                    width: "148px",
                                                    height: "1px",
                                                    paddingTop: "423px",
                                                    marginLeft: "30px",
                                                }}
                                            >
                                                <div
                                                    data-drawio-colors="color: #ffffff; "
                                                    style={{
                                                        boxSizing: "border-box",
                                                        fontSize: "0px",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            fontSize: "12px",
                                                            fontFamily: "Helvetica",
                                                            color: "rgb(255, 255, 255)",
                                                            lineHeight: "1.2",
                                                            pointerEvents: "all",
                                                            fontWeight: "bold",
                                                            whiteSpace: "normal",
                                                            overflowWrap: "normal",
                                                        }}
                                                    >
                                                        <font color="#ffffff">
                                                            Instruction Memory
                                                        </font>
                                                    </div>
                                                </div>
                                            </div>
                                        </foreignObject>
                                        <text
                                            x="104"
                                            y="426"
                                            fill="#ffffff"
                                            font-family='"Helvetica"'
                                            font-size="12px"
                                            text-anchor="middle"
                                            font-weight="bold"
                                        >
                                            Instruction Memory
                                        </text>
                                    </switch>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-36">
                                <g>
                                    <rect
                                        x="29"
                                        y="434.5"
                                        width="150"
                                        height="205"
                                        fill="none"
                                        stroke="none"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "148px",
                                                        height: "1px",
                                                        paddingTop: "537px",
                                                        marginLeft: "30px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            placeholder_instr_mem
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="104"
                                                y="541"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                placeholder_instr_mem
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="fya-JSUQ_MmqU_CgoYYm-10">
                            <g>
                                <path
                                    d="M 149 328 L 149 315.35 Q 149 305 138.65 305 L 39.35 305 Q 29 305 29 315.35 L 29 328"
                                    fill="#e51400"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <path
                                    d="M 29 328 L 29 364.65 Q 29 375 39.35 375 L 138.65 375 Q 149 375 149 364.65 L 149 328"
                                    fill="rgb(255, 255, 255)"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <path
                                    d="M 29 328 L 149 328"
                                    fill="none"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                            <g>
                                <g transform="translate(-0.5 -0.5)">
                                    <switch>
                                        <foreignObject
                                            pointer-events="none"
                                            width="100%"
                                            height="100%"
                                            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                            style={{ overflow: "visible", textAlign: "left" }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "unsafe center",
                                                    justifyContent: "unsafe center",
                                                    width: "118px",
                                                    height: "1px",
                                                    paddingTop: "317px",
                                                    marginLeft: "30px",
                                                }}
                                            >
                                                <div
                                                    data-drawio-colors="color: #ffffff; "
                                                    style={{
                                                        boxSizing: "border-box",
                                                        fontSize: "0px",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            fontSize: "12px",
                                                            fontFamily: "Helvetica",
                                                            color: "rgb(255, 255, 255)",
                                                            lineHeight: "1.2",
                                                            pointerEvents: "all",
                                                            fontWeight: "bold",
                                                            whiteSpace: "normal",
                                                            overflowWrap: "normal",
                                                        }}
                                                    >
                                                        <font color="#ffffff">Program Counter</font>
                                                    </div>
                                                </div>
                                            </div>
                                        </foreignObject>
                                        <text
                                            x="89"
                                            y="320"
                                            fill="#ffffff"
                                            font-family='"Helvetica"'
                                            font-size="12px"
                                            text-anchor="middle"
                                            font-weight="bold"
                                        >
                                            Program Counter
                                        </text>
                                    </switch>
                                </g>
                            </g>
                            <g data-cell-id="fya-JSUQ_MmqU_CgoYYm-12">
                                <g>
                                    <rect
                                        x="59"
                                        y="335"
                                        width="60"
                                        height="30"
                                        fill="none"
                                        stroke="none"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "58px",
                                                        height: "1px",
                                                        paddingTop: "350px",
                                                        marginLeft: "60px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "16px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                fontWeight: "bold",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            {values.programCounter}
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="89"
                                                y="355"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="16px"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                plh_pro...
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-19">
                            <g>
                                <path
                                    d="M 570.98 300.05 L 592 300.1 L 603.9 300.32"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 610.65 300.44 L 601.57 304.77 L 603.9 300.32 L 601.73 295.78 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-325">
                            <g>
                                <path
                                    d="M 535 251.76 L 535 240 L 534.71 220"
                                    fill="none"
                                    stroke="#990099"
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 535 257.76 L 531 249.76 L 535 251.76 L 539 249.76 Z"
                                    fill="#990099"
                                    stroke="#990099"
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="fya-JSUQ_MmqU_CgoYYm-27">
                            <g>
                                <path
                                    d="M 570 283 L 570 270.35 Q 570 260 559.65 260 L 440.35 260 Q 430 260 430 270.35 L 430 283"
                                    fill="#e51400"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <path
                                    d="M 430 283 L 430 449.65 Q 430 460 440.35 460 L 559.65 460 Q 570 460 570 449.65 L 570 283"
                                    fill="rgb(255, 255, 255)"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <path
                                    d="M 430 283 L 570 283"
                                    fill="none"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                            <g>
                                <g transform="translate(-0.5 -0.5)">
                                    <switch>
                                        <foreignObject
                                            pointer-events="none"
                                            width="100%"
                                            height="100%"
                                            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                            style={{ overflow: "visible", textAlign: "left" }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "unsafe center",
                                                    justifyContent: "unsafe center",
                                                    width: "138px",
                                                    height: "1px",
                                                    paddingTop: "272px",
                                                    marginLeft: "431px",
                                                }}
                                            >
                                                <div
                                                    data-drawio-colors="color: #ffffff; "
                                                    style={{
                                                        boxSizing: "border-box",
                                                        fontSize: "0px",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            fontSize: "12px",
                                                            fontFamily: "Helvetica",
                                                            color: "rgb(255, 255, 255)",
                                                            lineHeight: "1.2",
                                                            pointerEvents: "all",
                                                            fontWeight: "bold",
                                                            whiteSpace: "normal",
                                                            overflowWrap: "normal",
                                                        }}
                                                    >
                                                        <font color="#ffffff">Register File</font>
                                                    </div>
                                                </div>
                                            </div>
                                        </foreignObject>
                                        <text
                                            x="500"
                                            y="275"
                                            fill="#ffffff"
                                            font-family='"Helvetica"'
                                            font-size="12px"
                                            text-anchor="middle"
                                            font-weight="bold"
                                        >
                                            Register File
                                        </text>
                                    </switch>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-40">
                                <g>
                                    <rect
                                        x="430"
                                        y="285"
                                        width="140"
                                        height="175"
                                        fill="none"
                                        stroke="none"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "138px",
                                                        height: "1px",
                                                        paddingTop: "373px",
                                                        marginLeft: "431px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            placeholder_reg_file
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="500"
                                                y="376"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                placeholder_reg_file
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-4">
                            <g>
                                <path
                                    d="M 430 330 L 429 330 L 359 330 L 359 303"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <ellipse
                                    cx="359"
                                    cy="300"
                                    rx="3"
                                    ry="3"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    pointer-events="all"
                                />
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-353">
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "1px",
                                                        height: "1px",
                                                        paddingTop: "321px",
                                                        marginLeft: "394px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "13px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                fontWeight: "bold",
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                whiteSpace: "nowrap",
                                                            }}
                                                        >
                                                            20:16
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="394"
                                                y="324"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="13px"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                20:16
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-105">
                            <g>
                                <path
                                    d="M 500 190 L 557 190 L 557 40 L 603.9 40"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 610.65 40 L 601.65 44.5 L 603.9 40 L 601.65 35.5 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="iDGc5PNU-aZqenxwyxyE-3">
                            <g>
                                <path
                                    d="M 489.75 154.64 L 529 154.6 L 529 130 L 259 130 L 259 176.5 L 124.24 176.5"
                                    fill="none"
                                    stroke={values.jmp ? "#009900" : "#66ff66"}
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 118.24 176.5 L 126.24 172.5 L 124.24 176.5 L 126.24 180.5 Z"
                                    fill={values.jmp ? "#009900" : "#66ff66"}
                                    stroke={values.jmp ? "#009900" : "#66ff66"}
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                            <g data-cell-id="iDGc5PNU-aZqenxwyxyE-4">
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "1px",
                                                        height: "1px",
                                                        paddingTop: "164px",
                                                        marginLeft: "154px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "11px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                fontWeight: "bold",
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                whiteSpace: "nowrap",
                                                            }}
                                                        >
                                                            <font style={{ fontSize: "13px" }}>
                                                                Jump
                                                            </font>
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="154"
                                                y="167"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="11px"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                Jump
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-5">
                            <g>
                                <ellipse
                                    cx="465"
                                    cy="190"
                                    rx="35"
                                    ry="50"
                                    fill="rgb(255, 255, 255)"
                                    stroke="rgb(0, 0, 0)"
                                    pointer-events="all"
                                />
                            </g>
                            <g>
                                <g transform="translate(-0.5 -0.5)">
                                    <switch>
                                        <foreignObject
                                            pointer-events="none"
                                            width="100%"
                                            height="100%"
                                            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                            style={{ overflow: "visible", textAlign: "left" }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "unsafe center",
                                                    justifyContent: "unsafe center",
                                                    width: "68px",
                                                    height: "1px",
                                                    paddingTop: "190px",
                                                    marginLeft: "431px",
                                                }}
                                            >
                                                <div
                                                    data-drawio-colors="color: rgb(0, 0, 0); "
                                                    style={{
                                                        boxSizing: "border-box",
                                                        fontSize: "0px",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            fontSize: "12px",
                                                            fontFamily: "Helvetica",
                                                            color: "rgb(0, 0, 0)",
                                                            lineHeight: "1.2",
                                                            pointerEvents: "all",
                                                            whiteSpace: "normal",
                                                            overflowWrap: "normal",
                                                        }}
                                                    >
                                                        Main
                                                        <div>Control</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </foreignObject>
                                        <text
                                            x="465"
                                            y="194"
                                            fill="rgb(0, 0, 0)"
                                            font-family='"Helvetica"'
                                            font-size="12px"
                                            text-anchor="middle"
                                        >
                                            Main...
                                        </text>
                                    </switch>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-6">
                            <g>
                                <path
                                    d="M 430 190 L 359 190 L 359 297"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <ellipse
                                    cx="359"
                                    cy="300"
                                    rx="3"
                                    ry="3"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-12">
                            <g>
                                <path
                                    d="M 359 300 L 429 300"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-352">
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "1px",
                                                        height: "1px",
                                                        paddingTop: "289px",
                                                        marginLeft: "394px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "13px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                whiteSpace: "nowrap",
                                                            }}
                                                        >
                                                            <b>25:21</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="394"
                                                y="292"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="13px"
                                                text-anchor="middle"
                                            >
                                                25:21
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-13">
                            <g>
                                <path
                                    d="M 359 250 L 603.9 250.48"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 610.65 250.49 L 601.64 254.98 L 603.9 250.48 L 601.65 245.98 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-24">
                            <g>
                                <path
                                    d="M 489 512 L 552 512.5 L 603.9 512.08"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 610.65 512.03 L 601.68 516.6 L 603.9 512.08 L 601.61 507.6 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-21">
                            <g>
                                <ellipse
                                    cx="504"
                                    cy="512"
                                    rx="20"
                                    ry="25"
                                    fill="rgb(255, 255, 255)"
                                    stroke="rgb(0, 0, 0)"
                                    pointer-events="all"
                                />
                            </g>
                            <g>
                                <g transform="translate(-0.5 -0.5)">
                                    <switch>
                                        <foreignObject
                                            pointer-events="none"
                                            width="100%"
                                            height="100%"
                                            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                            style={{ overflow: "visible", textAlign: "left" }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "unsafe center",
                                                    justifyContent: "unsafe center",
                                                    width: "38px",
                                                    height: "1px",
                                                    paddingTop: "512px",
                                                    marginLeft: "485px",
                                                }}
                                            >
                                                <div
                                                    data-drawio-colors="color: rgb(0, 0, 0); "
                                                    style={{
                                                        boxSizing: "border-box",
                                                        fontSize: "0px",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            fontSize: "12px",
                                                            fontFamily: "Helvetica",
                                                            color: "rgb(0, 0, 0)",
                                                            lineHeight: "1.2",
                                                            pointerEvents: "all",
                                                            whiteSpace: "normal",
                                                            overflowWrap: "normal",
                                                        }}
                                                    >
                                                        Ext
                                                    </div>
                                                </div>
                                            </div>
                                        </foreignObject>
                                        <text
                                            x="504"
                                            y="516"
                                            fill="rgb(0, 0, 0)"
                                            font-family='"Helvetica"'
                                            font-size="12px"
                                            text-anchor="middle"
                                        >
                                            Ext
                                        </text>
                                    </switch>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-25">
                            <g>
                                <path
                                    d="M 484 512 L 359.5 512 L 359.01 333"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <ellipse
                                    cx="359"
                                    cy="330"
                                    rx="3"
                                    ry="3"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    pointer-events="all"
                                />
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-354">
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "1px",
                                                        height: "1px",
                                                        paddingTop: "502px",
                                                        marginLeft: "428px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "13px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                fontWeight: "bold",
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                whiteSpace: "nowrap",
                                                            }}
                                                        >
                                                            15:0
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="428"
                                                y="505"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="13px"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                15:0
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-27">
                            <g>
                                <path
                                    d="M 603.9 470 L 449 470 L 449 510"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 610.65 470 L 601.65 474.5 L 603.9 470 L 601.65 465.5 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-355">
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "1px",
                                                        height: "1px",
                                                        paddingTop: "482px",
                                                        marginLeft: "551px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "13px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                fontWeight: "bold",
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                whiteSpace: "nowrap",
                                                            }}
                                                        >
                                                            10:6
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="551"
                                                y="485"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="13px"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                10:6
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-29">
                            <g>
                                <path
                                    d="M 603.9 554 L 449 554 L 449 513"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 610.65 554 L 601.65 558.5 L 603.9 554 L 601.65 549.5 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <ellipse
                                    cx="449"
                                    cy="510"
                                    rx="3"
                                    ry="3"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    pointer-events="all"
                                />
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-356">
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "1px",
                                                        height: "1px",
                                                        paddingTop: "565px",
                                                        marginLeft: "552px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "13px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                fontWeight: "bold",
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                whiteSpace: "nowrap",
                                                            }}
                                                        >
                                                            5:0
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="552"
                                                y="568"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="13px"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                5:0
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-34">
                            <g>
                                <path
                                    d="M 603.9 595 L 360.8 595 L 360.75 517"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 610.65 595 L 601.65 599.5 L 603.9 595 L 601.65 590.5 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <ellipse
                                    cx="360.75"
                                    cy="514"
                                    rx="3"
                                    ry="3"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    pointer-events="all"
                                />
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-357">
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "1px",
                                                        height: "1px",
                                                        paddingTop: "586px",
                                                        marginLeft: "461px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "13px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                fontWeight: "bold",
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                whiteSpace: "nowrap",
                                                            }}
                                                        >
                                                            20:16
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="461"
                                                y="589"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="13px"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                20:16
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-44">
                            <g>
                                <path
                                    d="M 319 232 L 319 219.35 Q 319 209 308.65 209 L 249.35 209 Q 239 209 239 219.35 L 239 232"
                                    fill="#e51400"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <path
                                    d="M 239 232 L 239 669.65 Q 239 680 249.35 680 L 308.65 680 Q 319 680 319 669.65 L 319 232"
                                    fill="rgb(255, 255, 255)"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <path
                                    d="M 239 232 L 319 232"
                                    fill="none"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                            <g>
                                <g transform="translate(-0.5 -0.5)">
                                    <switch>
                                        <foreignObject
                                            pointer-events="none"
                                            width="100%"
                                            height="100%"
                                            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                            style={{ overflow: "visible", textAlign: "left" }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "unsafe center",
                                                    justifyContent: "unsafe center",
                                                    width: "78px",
                                                    height: "1px",
                                                    paddingTop: "221px",
                                                    marginLeft: "240px",
                                                }}
                                            >
                                                <div
                                                    data-drawio-colors="color: #ffffff; "
                                                    style={{
                                                        boxSizing: "border-box",
                                                        fontSize: "0px",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            fontSize: "12px",
                                                            fontFamily: "Helvetica",
                                                            color: "rgb(255, 255, 255)",
                                                            lineHeight: "1.2",
                                                            pointerEvents: "all",
                                                            fontWeight: "bold",
                                                            whiteSpace: "normal",
                                                            overflowWrap: "normal",
                                                        }}
                                                    >
                                                        <font color="#ffffff">IF/ID</font>
                                                    </div>
                                                </div>
                                            </div>
                                        </foreignObject>
                                        <text
                                            x="279"
                                            y="224"
                                            fill="#ffffff"
                                            font-family='"Helvetica"'
                                            font-size="12px"
                                            text-anchor="middle"
                                            font-weight="bold"
                                        >
                                            IF/ID
                                        </text>
                                    </switch>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-49">
                                <g />
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-48">
                                    <g>
                                        <rect
                                            x="239"
                                            y="514"
                                            width="80"
                                            height="30"
                                            fill="#ffcccc"
                                            stroke="#36393d"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe flex-end",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "541px",
                                                            marginLeft: "240px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(0, 0, 0)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                {values.if_id.instr}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="279"
                                                    y="541"
                                                    fill="rgb(0, 0, 0)"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    plh_if_id.ins...
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-63">
                                    <g>
                                        <path
                                            d="M 319 514 L 339 514 L 359 514"
                                            fill="none"
                                            stroke="rgb(0, 0, 0)"
                                            stroke-width="3"
                                            strokeMiterlimit="10"
                                            pointer-events="stroke"
                                        />
                                    </g>
                                </g>
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-47">
                                    <g>
                                        <rect
                                            x="239"
                                            y="504"
                                            width="80"
                                            height="20"
                                            rx="6"
                                            ry="6"
                                            fill="#e51400"
                                            stroke="#b20000"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe center",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "514px",
                                                            marginLeft: "240px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: #ffffff; "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(255, 255, 255)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                <b>INSTR</b>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="279"
                                                    y="518"
                                                    fill="#ffffff"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    INSTR
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-56">
                                <g>
                                    <rect
                                        x="239"
                                        y="240"
                                        width="80"
                                        height="40"
                                        fill="rgb(255, 255, 255)"
                                        stroke="none"
                                        pointer-events="all"
                                    />
                                </g>
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-57">
                                    <g>
                                        <rect
                                            x="239"
                                            y="250"
                                            width="80"
                                            height="30"
                                            fill="#fad9d5"
                                            stroke="#ae4132"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe flex-end",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "277px",
                                                            marginLeft: "240px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(0, 0, 0)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                {values.if_id.pc}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="279"
                                                    y="277"
                                                    fill="rgb(0, 0, 0)"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    plh_if_id.pc
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-64">
                                    <g>
                                        <path
                                            d="M 319 250 L 339 250 L 359 250"
                                            fill="none"
                                            stroke="rgb(0, 0, 0)"
                                            stroke-width="3"
                                            strokeMiterlimit="10"
                                            pointer-events="stroke"
                                        />
                                    </g>
                                </g>
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-58">
                                    <g>
                                        <rect
                                            x="239"
                                            y="240"
                                            width="80"
                                            height="20"
                                            rx="6"
                                            ry="6"
                                            fill="#e51400"
                                            stroke="#b20000"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe center",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "250px",
                                                            marginLeft: "240px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: #ffffff; "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(255, 255, 255)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                <b>PC</b>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="279"
                                                    y="254"
                                                    fill="#ffffff"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    PC
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-62">
                            <g>
                                <path
                                    d="M 228.9 514 L 209 514 L 179.9 513.84"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 235.65 514 L 226.65 518.5 L 228.9 514 L 226.65 509.5 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-65">
                            <g>
                                <path
                                    d="M 694 23 L 694 10.35 Q 694 0 683.65 0 L 624.35 0 Q 614 0 614 10.35 L 614 23"
                                    fill="#e51400"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <path
                                    d="M 614 23 L 614 669.65 Q 614 680 624.35 680 L 683.65 680 Q 694 680 694 669.65 L 694 23"
                                    fill="rgb(255, 255, 255)"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <path
                                    d="M 614 23 L 694 23"
                                    fill="none"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                            <g>
                                <g transform="translate(-0.5 -0.5)">
                                    <switch>
                                        <foreignObject
                                            pointer-events="none"
                                            width="100%"
                                            height="100%"
                                            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                            style={{ overflow: "visible", textAlign: "left" }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "unsafe center",
                                                    justifyContent: "unsafe center",
                                                    width: "78px",
                                                    height: "1px",
                                                    paddingTop: "12px",
                                                    marginLeft: "615px",
                                                }}
                                            >
                                                <div
                                                    data-drawio-colors="color: #ffffff; "
                                                    style={{
                                                        boxSizing: "border-box",
                                                        fontSize: "0px",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            fontSize: "12px",
                                                            fontFamily: "Helvetica",
                                                            color: "rgb(255, 255, 255)",
                                                            lineHeight: "1.2",
                                                            pointerEvents: "all",
                                                            fontWeight: "bold",
                                                            whiteSpace: "normal",
                                                            overflowWrap: "normal",
                                                        }}
                                                    >
                                                        <font color="#ffffff">ID/EX</font>
                                                    </div>
                                                </div>
                                            </div>
                                        </foreignObject>
                                        <text
                                            x="654"
                                            y="15"
                                            fill="#ffffff"
                                            font-family='"Helvetica"'
                                            font-size="12px"
                                            text-anchor="middle"
                                            font-weight="bold"
                                        >
                                            ID/EX
                                        </text>
                                    </switch>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-75">
                                <g />
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-76">
                                    <g>
                                        <rect
                                            x="614"
                                            y="470"
                                            width="80"
                                            height="30"
                                            fill="#fad9d5"
                                            stroke="#ae4132"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe flex-end",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "497px",
                                                            marginLeft: "615px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(0, 0, 0)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                {values.id_ex.sa}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="654"
                                                    y="497"
                                                    fill="rgb(0, 0, 0)"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    plh_id_ex.sa
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-77">
                                    <g>
                                        <rect
                                            x="614"
                                            y="460"
                                            width="80"
                                            height="20"
                                            rx="6"
                                            ry="6"
                                            fill="#e51400"
                                            stroke="#b20000"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe center",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "470px",
                                                            marginLeft: "615px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: #ffffff; "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(255, 255, 255)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                <b>SA</b>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="654"
                                                    y="474"
                                                    fill="#ffffff"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    SA
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-78">
                                <g />
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-79">
                                    <g>
                                        <rect
                                            x="614"
                                            y="512"
                                            width="80"
                                            height="30"
                                            fill="#fad9d5"
                                            stroke="#ae4132"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe flex-end",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "539px",
                                                            marginLeft: "615px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(0, 0, 0)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                {values.id_ex.opExt}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="654"
                                                    y="539"
                                                    fill="rgb(0, 0, 0)"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    plh_id_ex.opE...
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-80">
                                    <g>
                                        <rect
                                            x="614"
                                            y="502"
                                            width="80"
                                            height="20"
                                            rx="6"
                                            ry="6"
                                            fill="#e51400"
                                            stroke="#b20000"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe center",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "512px",
                                                            marginLeft: "615px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: #ffffff; "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(255, 255, 255)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                <b>OP_EXT</b>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="654"
                                                    y="516"
                                                    fill="#ffffff"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    OP_EXT
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-81">
                                <g />
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-82">
                                    <g>
                                        <rect
                                            x="614"
                                            y="553"
                                            width="80"
                                            height="30"
                                            fill="#fad9d5"
                                            stroke="#ae4132"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe flex-end",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "580px",
                                                            marginLeft: "615px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(0, 0, 0)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                {values.id_ex.func}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="654"
                                                    y="580"
                                                    fill="rgb(0, 0, 0)"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    plh_id_ex.func
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-83">
                                    <g>
                                        <rect
                                            x="614"
                                            y="544"
                                            width="80"
                                            height="20"
                                            rx="6"
                                            ry="6"
                                            fill="#e51400"
                                            stroke="#b20000"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe center",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "554px",
                                                            marginLeft: "615px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: #ffffff; "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(255, 255, 255)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                <b>FUNC</b>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="654"
                                                    y="558"
                                                    fill="#ffffff"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    FUNC
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-85">
                                <g />
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-86">
                                    <g>
                                        <rect
                                            x="614"
                                            y="595"
                                            width="80"
                                            height="30"
                                            fill="#fad9d5"
                                            stroke="#ae4132"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe flex-end",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "622px",
                                                            marginLeft: "615px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(0, 0, 0)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                {values.id_ex.rt}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="654"
                                                    y="622"
                                                    fill="rgb(0, 0, 0)"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    plh_id_ex.rt
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-87">
                                    <g>
                                        <rect
                                            x="614"
                                            y="585"
                                            width="80"
                                            height="20"
                                            rx="6"
                                            ry="6"
                                            fill="#e51400"
                                            stroke="#b20000"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe center",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "595px",
                                                            marginLeft: "615px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: #ffffff; "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(255, 255, 255)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                <b>RT</b>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="654"
                                                    y="599"
                                                    fill="#ffffff"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    RT
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-104">
                                <g />
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-92">
                                    <g />
                                    <g data-cell-id="1W33FOhmNmDA0zy-Gag4-93">
                                        <g>
                                            <rect
                                                x="614"
                                                y="40"
                                                width="80"
                                                height="30"
                                                fill="#fad9d5"
                                                stroke="#ae4132"
                                                pointer-events="all"
                                            />
                                        </g>
                                        <g>
                                            <g transform="translate(-0.5 -0.5)">
                                                <switch>
                                                    <foreignObject
                                                        pointer-events="none"
                                                        width="100%"
                                                        height="100%"
                                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                        style={{
                                                            overflow: "visible",
                                                            textAlign: "left",
                                                        }}
                                                    >
                                                        <div
                                                            xmlns="http://www.w3.org/1999/xhtml"
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "unsafe flex-end",
                                                                justifyContent: "unsafe center",
                                                                width: "78px",
                                                                height: "1px",
                                                                paddingTop: "67px",
                                                                marginLeft: "615px",
                                                            }}
                                                        >
                                                            <div
                                                                data-drawio-colors="color: rgb(0, 0, 0); "
                                                                style={{
                                                                    boxSizing: "border-box",
                                                                    fontSize: "0px",
                                                                    textAlign: "center",
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        display: "inline-block",
                                                                        fontSize: "12px",
                                                                        fontFamily: "Helvetica",
                                                                        color: "rgb(0, 0, 0)",
                                                                        lineHeight: "1.2",
                                                                        pointerEvents: "all",
                                                                        whiteSpace: "normal",
                                                                        overflowWrap: "normal",
                                                                    }}
                                                                >
                                                                    RegDst
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </foreignObject>
                                                    <text
                                                        x="654"
                                                        y="67"
                                                        fill="rgb(0, 0, 0)"
                                                        font-family='"Helvetica"'
                                                        font-size="12px"
                                                        text-anchor="middle"
                                                    >
                                                        RegDst
                                                    </text>
                                                </switch>
                                            </g>
                                        </g>
                                    </g>
                                    <g data-cell-id="1W33FOhmNmDA0zy-Gag4-94">
                                        <g>
                                            <rect
                                                x="614"
                                                y="30"
                                                width="80"
                                                height="20"
                                                rx="6"
                                                ry="6"
                                                fill="#e51400"
                                                stroke="#b20000"
                                                pointer-events="all"
                                            />
                                        </g>
                                        <g>
                                            <g transform="translate(-0.5 -0.5)">
                                                <switch>
                                                    <foreignObject
                                                        pointer-events="none"
                                                        width="100%"
                                                        height="100%"
                                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                        style={{
                                                            overflow: "visible",
                                                            textAlign: "left",
                                                        }}
                                                    >
                                                        <div
                                                            xmlns="http://www.w3.org/1999/xhtml"
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "unsafe center",
                                                                justifyContent: "unsafe center",
                                                                width: "78px",
                                                                height: "1px",
                                                                paddingTop: "40px",
                                                                marginLeft: "615px",
                                                            }}
                                                        >
                                                            <div
                                                                data-drawio-colors="color: #ffffff; "
                                                                style={{
                                                                    boxSizing: "border-box",
                                                                    fontSize: "0px",
                                                                    textAlign: "center",
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        display: "inline-block",
                                                                        fontSize: "12px",
                                                                        fontFamily: "Helvetica",
                                                                        color: "rgb(255, 255, 255)",
                                                                        lineHeight: "1.2",
                                                                        pointerEvents: "all",
                                                                        whiteSpace: "normal",
                                                                        overflowWrap: "normal",
                                                                    }}
                                                                >
                                                                    <b>CTRL_SIG</b>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </foreignObject>
                                                    <text
                                                        x="654"
                                                        y="44"
                                                        fill="#ffffff"
                                                        font-family='"Helvetica"'
                                                        font-size="12px"
                                                        text-anchor="middle"
                                                    >
                                                        CTRL_SIG
                                                    </text>
                                                </switch>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-66">
                                    <g />
                                    <g data-cell-id="1W33FOhmNmDA0zy-Gag4-67">
                                        <g>
                                            <rect
                                                x="614"
                                                y="300.5"
                                                width="80"
                                                height="30"
                                                fill="#fad9d5"
                                                stroke="#ae4132"
                                                pointer-events="all"
                                            />
                                        </g>
                                        <g>
                                            <g transform="translate(-0.5 -0.5)">
                                                <switch>
                                                    <foreignObject
                                                        pointer-events="none"
                                                        width="100%"
                                                        height="100%"
                                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                        style={{
                                                            overflow: "visible",
                                                            textAlign: "left",
                                                        }}
                                                    >
                                                        <div
                                                            xmlns="http://www.w3.org/1999/xhtml"
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "unsafe flex-end",
                                                                justifyContent: "unsafe center",
                                                                width: "78px",
                                                                height: "1px",
                                                                paddingTop: "328px",
                                                                marginLeft: "615px",
                                                            }}
                                                        >
                                                            <div
                                                                data-drawio-colors="color: rgb(0, 0, 0); "
                                                                style={{
                                                                    boxSizing: "border-box",
                                                                    fontSize: "0px",
                                                                    textAlign: "center",
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        display: "inline-block",
                                                                        fontSize: "12px",
                                                                        fontFamily: "Helvetica",
                                                                        color: "rgb(0, 0, 0)",
                                                                        lineHeight: "1.2",
                                                                        pointerEvents: "all",
                                                                        whiteSpace: "normal",
                                                                        overflowWrap: "normal",
                                                                    }}
                                                                >
                                                                    {values.id_ex.rd1}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </foreignObject>
                                                    <text
                                                        x="654"
                                                        y="328"
                                                        fill="rgb(0, 0, 0)"
                                                        font-family='"Helvetica"'
                                                        font-size="12px"
                                                        text-anchor="middle"
                                                    >
                                                        plh_id_ex.rd1
                                                    </text>
                                                </switch>
                                            </g>
                                        </g>
                                    </g>
                                    <g data-cell-id="1W33FOhmNmDA0zy-Gag4-68">
                                        <g>
                                            <rect
                                                x="614"
                                                y="290.5"
                                                width="80"
                                                height="20"
                                                rx="6"
                                                ry="6"
                                                fill="#e51400"
                                                stroke="#b20000"
                                                pointer-events="all"
                                            />
                                        </g>
                                        <g>
                                            <g transform="translate(-0.5 -0.5)">
                                                <switch>
                                                    <foreignObject
                                                        pointer-events="none"
                                                        width="100%"
                                                        height="100%"
                                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                        style={{
                                                            overflow: "visible",
                                                            textAlign: "left",
                                                        }}
                                                    >
                                                        <div
                                                            xmlns="http://www.w3.org/1999/xhtml"
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "unsafe center",
                                                                justifyContent: "unsafe center",
                                                                width: "78px",
                                                                height: "1px",
                                                                paddingTop: "301px",
                                                                marginLeft: "615px",
                                                            }}
                                                        >
                                                            <div
                                                                data-drawio-colors="color: #ffffff; "
                                                                style={{
                                                                    boxSizing: "border-box",
                                                                    fontSize: "0px",
                                                                    textAlign: "center",
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        display: "inline-block",
                                                                        fontSize: "12px",
                                                                        fontFamily: "Helvetica",
                                                                        color: "rgb(255, 255, 255)",
                                                                        lineHeight: "1.2",
                                                                        pointerEvents: "all",
                                                                        whiteSpace: "normal",
                                                                        overflowWrap: "normal",
                                                                    }}
                                                                >
                                                                    <b>RD1</b>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </foreignObject>
                                                    <text
                                                        x="654"
                                                        y="304"
                                                        fill="#ffffff"
                                                        font-family='"Helvetica"'
                                                        font-size="12px"
                                                        text-anchor="middle"
                                                    >
                                                        RD1
                                                    </text>
                                                </switch>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-69">
                                    <g />
                                    <g data-cell-id="1W33FOhmNmDA0zy-Gag4-70">
                                        <g>
                                            <rect
                                                x="614"
                                                y="250.5"
                                                width="80"
                                                height="30"
                                                fill="#fad9d5"
                                                stroke="#ae4132"
                                                pointer-events="all"
                                            />
                                        </g>
                                        <g>
                                            <g transform="translate(-0.5 -0.5)">
                                                <switch>
                                                    <foreignObject
                                                        pointer-events="none"
                                                        width="100%"
                                                        height="100%"
                                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                        style={{
                                                            overflow: "visible",
                                                            textAlign: "left",
                                                        }}
                                                    >
                                                        <div
                                                            xmlns="http://www.w3.org/1999/xhtml"
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "unsafe flex-end",
                                                                justifyContent: "unsafe center",
                                                                width: "78px",
                                                                height: "1px",
                                                                paddingTop: "278px",
                                                                marginLeft: "615px",
                                                            }}
                                                        >
                                                            <div
                                                                data-drawio-colors="color: rgb(0, 0, 0); "
                                                                style={{
                                                                    boxSizing: "border-box",
                                                                    fontSize: "0px",
                                                                    textAlign: "center",
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        display: "inline-block",
                                                                        fontSize: "12px",
                                                                        fontFamily: "Helvetica",
                                                                        color: "rgb(0, 0, 0)",
                                                                        lineHeight: "1.2",
                                                                        pointerEvents: "all",
                                                                        whiteSpace: "normal",
                                                                        overflowWrap: "normal",
                                                                    }}
                                                                >
                                                                    {values.id_ex.pc}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </foreignObject>
                                                    <text
                                                        x="654"
                                                        y="278"
                                                        fill="rgb(0, 0, 0)"
                                                        font-family='"Helvetica"'
                                                        font-size="12px"
                                                        text-anchor="middle"
                                                    >
                                                        plh_id_ex.pc
                                                    </text>
                                                </switch>
                                            </g>
                                        </g>
                                    </g>
                                    <g data-cell-id="1W33FOhmNmDA0zy-Gag4-71">
                                        <g>
                                            <rect
                                                x="614"
                                                y="240.5"
                                                width="80"
                                                height="20"
                                                rx="6"
                                                ry="6"
                                                fill="#e51400"
                                                stroke="#b20000"
                                                pointer-events="all"
                                            />
                                        </g>
                                        <g>
                                            <g transform="translate(-0.5 -0.5)">
                                                <switch>
                                                    <foreignObject
                                                        pointer-events="none"
                                                        width="100%"
                                                        height="100%"
                                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                        style={{
                                                            overflow: "visible",
                                                            textAlign: "left",
                                                        }}
                                                    >
                                                        <div
                                                            xmlns="http://www.w3.org/1999/xhtml"
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "unsafe center",
                                                                justifyContent: "unsafe center",
                                                                width: "78px",
                                                                height: "1px",
                                                                paddingTop: "251px",
                                                                marginLeft: "615px",
                                                            }}
                                                        >
                                                            <div
                                                                data-drawio-colors="color: #ffffff; "
                                                                style={{
                                                                    boxSizing: "border-box",
                                                                    fontSize: "0px",
                                                                    textAlign: "center",
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        display: "inline-block",
                                                                        fontSize: "12px",
                                                                        fontFamily: "Helvetica",
                                                                        color: "rgb(255, 255, 255)",
                                                                        lineHeight: "1.2",
                                                                        pointerEvents: "all",
                                                                        whiteSpace: "normal",
                                                                        overflowWrap: "normal",
                                                                    }}
                                                                >
                                                                    <b>PC</b>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </foreignObject>
                                                    <text
                                                        x="654"
                                                        y="254"
                                                        fill="#ffffff"
                                                        font-family='"Helvetica"'
                                                        font-size="12px"
                                                        text-anchor="middle"
                                                    >
                                                        PC
                                                    </text>
                                                </switch>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-72">
                                    <g>
                                        <rect
                                            x="614"
                                            y="340.5"
                                            width="80"
                                            height="40"
                                            fill="#fad9d5"
                                            stroke="#ae4132"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g data-cell-id="1W33FOhmNmDA0zy-Gag4-73">
                                        <g>
                                            <rect
                                                x="614"
                                                y="350.5"
                                                width="80"
                                                height="30"
                                                fill="#fad9d5"
                                                stroke="#ae4132"
                                                pointer-events="all"
                                            />
                                        </g>
                                        <g>
                                            <g transform="translate(-0.5 -0.5)">
                                                <switch>
                                                    <foreignObject
                                                        pointer-events="none"
                                                        width="100%"
                                                        height="100%"
                                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                        style={{
                                                            overflow: "visible",
                                                            textAlign: "left",
                                                        }}
                                                    >
                                                        <div
                                                            xmlns="http://www.w3.org/1999/xhtml"
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "unsafe flex-end",
                                                                justifyContent: "unsafe center",
                                                                width: "78px",
                                                                height: "1px",
                                                                paddingTop: "378px",
                                                                marginLeft: "615px",
                                                            }}
                                                        >
                                                            <div
                                                                data-drawio-colors="color: rgb(0, 0, 0); "
                                                                style={{
                                                                    boxSizing: "border-box",
                                                                    fontSize: "0px",
                                                                    textAlign: "center",
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        display: "inline-block",
                                                                        fontSize: "12px",
                                                                        fontFamily: "Helvetica",
                                                                        color: "rgb(0, 0, 0)",
                                                                        lineHeight: "1.2",
                                                                        pointerEvents: "all",
                                                                        whiteSpace: "normal",
                                                                        overflowWrap: "normal",
                                                                    }}
                                                                >
                                                                    {values.id_ex.rd2}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </foreignObject>
                                                    <text
                                                        x="654"
                                                        y="378"
                                                        fill="rgb(0, 0, 0)"
                                                        font-family='"Helvetica"'
                                                        font-size="12px"
                                                        text-anchor="middle"
                                                    >
                                                        plh_id_ex.rd2
                                                    </text>
                                                </switch>
                                            </g>
                                        </g>
                                    </g>
                                    <g data-cell-id="1W33FOhmNmDA0zy-Gag4-74">
                                        <g>
                                            <rect
                                                x="614"
                                                y="340.5"
                                                width="80"
                                                height="20"
                                                rx="6"
                                                ry="6"
                                                fill="#e51400"
                                                stroke="#b20000"
                                                pointer-events="all"
                                            />
                                        </g>
                                        <g>
                                            <g transform="translate(-0.5 -0.5)">
                                                <switch>
                                                    <foreignObject
                                                        pointer-events="none"
                                                        width="100%"
                                                        height="100%"
                                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                        style={{
                                                            overflow: "visible",
                                                            textAlign: "left",
                                                        }}
                                                    >
                                                        <div
                                                            xmlns="http://www.w3.org/1999/xhtml"
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "unsafe center",
                                                                justifyContent: "unsafe center",
                                                                width: "78px",
                                                                height: "1px",
                                                                paddingTop: "351px",
                                                                marginLeft: "615px",
                                                            }}
                                                        >
                                                            <div
                                                                data-drawio-colors="color: #ffffff; "
                                                                style={{
                                                                    boxSizing: "border-box",
                                                                    fontSize: "0px",
                                                                    textAlign: "center",
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        display: "inline-block",
                                                                        fontSize: "12px",
                                                                        fontFamily: "Helvetica",
                                                                        color: "rgb(255, 255, 255)",
                                                                        lineHeight: "1.2",
                                                                        pointerEvents: "all",
                                                                        whiteSpace: "normal",
                                                                        overflowWrap: "normal",
                                                                    }}
                                                                >
                                                                    <b>RD2</b>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </foreignObject>
                                                    <text
                                                        x="654"
                                                        y="354"
                                                        fill="#ffffff"
                                                        font-family='"Helvetica"'
                                                        font-size="12px"
                                                        text-anchor="middle"
                                                    >
                                                        RD2
                                                    </text>
                                                </switch>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-96">
                                <g>
                                    <rect
                                        x="614"
                                        y="70"
                                        width="80"
                                        height="20"
                                        fill="#fad9d5"
                                        stroke="#ae4132"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "78px",
                                                        height: "1px",
                                                        paddingTop: "80px",
                                                        marginLeft: "615px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            AluSrc
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="654"
                                                y="84"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                AluSrc
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-97">
                                <g>
                                    <rect
                                        x="614"
                                        y="90"
                                        width="80"
                                        height="20"
                                        fill="#fad9d5"
                                        stroke="#ae4132"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "78px",
                                                        height: "1px",
                                                        paddingTop: "100px",
                                                        marginLeft: "615px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            Beq
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="654"
                                                y="104"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                Beq
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-98">
                                <g>
                                    <rect
                                        x="614"
                                        y="110"
                                        width="80"
                                        height="20"
                                        fill="#fad9d5"
                                        stroke="#ae4132"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "78px",
                                                        height: "1px",
                                                        paddingTop: "120px",
                                                        marginLeft: "615px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            Bgtz
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="654"
                                                y="124"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                Bgtz
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-99">
                                <g>
                                    <rect
                                        x="614"
                                        y="130"
                                        width="80"
                                        height="20"
                                        fill="#fad9d5"
                                        stroke="#ae4132"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "78px",
                                                        height: "1px",
                                                        paddingTop: "140px",
                                                        marginLeft: "615px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            Bne
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="654"
                                                y="144"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                Bne
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-101">
                                <g>
                                    <rect
                                        x="614"
                                        y="150"
                                        width="80"
                                        height="20"
                                        fill="#fad9d5"
                                        stroke="#ae4132"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "78px",
                                                        height: "1px",
                                                        paddingTop: "160px",
                                                        marginLeft: "615px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            MemWrite
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="654"
                                                y="164"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                MemWrite
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-102">
                                <g>
                                    <rect
                                        x="614"
                                        y="170"
                                        width="80"
                                        height="20"
                                        fill="#fad9d5"
                                        stroke="#ae4132"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "78px",
                                                        height: "1px",
                                                        paddingTop: "180px",
                                                        marginLeft: "615px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            MemToReg
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="654"
                                                y="184"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                MemToReg
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-103">
                                <g>
                                    <rect
                                        x="614"
                                        y="190"
                                        width="80"
                                        height="20"
                                        fill="#fad9d5"
                                        stroke="#ae4132"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "78px",
                                                        height: "1px",
                                                        paddingTop: "200px",
                                                        marginLeft: "615px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            RegWrite
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="654"
                                                y="204"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                RegWrite
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-90">
                                <g>
                                    <rect
                                        x="614"
                                        y="640"
                                        width="80"
                                        height="30"
                                        fill="#fad9d5"
                                        stroke="#ae4132"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe flex-end",
                                                        justifyContent: "unsafe center",
                                                        width: "78px",
                                                        height: "1px",
                                                        paddingTop: "667px",
                                                        marginLeft: "615px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            {values.id_ex.rd}
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="654"
                                                y="667"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                plh_id_ex.rd
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-88">
                            <g>
                                <path
                                    d="M 603.9 637 L 360.8 637 L 360.75 598"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 610.65 637 L 601.65 641.5 L 603.9 637 L 601.65 632.5 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <ellipse
                                    cx="360.75"
                                    cy="595"
                                    rx="3"
                                    ry="3"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    pointer-events="all"
                                />
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-358">
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "1px",
                                                        height: "1px",
                                                        paddingTop: "627px",
                                                        marginLeft: "461px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "13px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                fontWeight: "bold",
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                whiteSpace: "nowrap",
                                                            }}
                                                        >
                                                            15:11
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="461"
                                                y="630"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="13px"
                                                text-anchor="middle"
                                                font-weight="bold"
                                            >
                                                15:11
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-162">
                            <g>
                                <path
                                    d="M 884 359 L 903.9 359"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 910.65 359 L 901.65 363.5 L 903.9 359 L 901.65 354.5 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-195">
                            <g>
                                <path
                                    d="M 849.6 309.5 L 849.6 303.8 L 907.63 303.75"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 912.88 303.75 L 905.88 307.26 L 907.63 303.75 L 905.88 300.26 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-107">
                            <g>
                                <path
                                    d="M 804 284 L 884 329 L 884 389 L 804 434 L 804 404 L 844 381.5 L 844 336.5 L 804 314 Z"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                            <g>
                                <g transform="translate(-0.5 -0.5)">
                                    <switch>
                                        <foreignObject
                                            pointer-events="none"
                                            width="100%"
                                            height="100%"
                                            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                            style={{ overflow: "visible", textAlign: "left" }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "unsafe center",
                                                    justifyContent: "unsafe center",
                                                    width: "78px",
                                                    height: "1px",
                                                    paddingTop: "359px",
                                                    marginLeft: "805px",
                                                }}
                                            >
                                                <div
                                                    data-drawio-colors="color: rgb(0, 0, 0); "
                                                    style={{
                                                        boxSizing: "border-box",
                                                        fontSize: "0px",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            fontSize: "12px",
                                                            fontFamily: "Helvetica",
                                                            color: "rgb(0, 0, 0)",
                                                            lineHeight: "1.2",
                                                            pointerEvents: "all",
                                                            whiteSpace: "normal",
                                                            overflowWrap: "normal",
                                                        }}
                                                    >
                                                                     ALU  
                                                    </div>
                                                </div>
                                            </div>
                                        </foreignObject>
                                        <text
                                            x="844"
                                            y="363"
                                            fill="rgb(0, 0, 0)"
                                            font-family='"Helvetica"'
                                            font-size="12px"
                                            text-anchor="middle"
                                        >
                                            ...
                                        </text>
                                    </switch>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-108">
                            <g>
                                <path
                                    d="M 724 429 L 744 409 L 774 409 L 794 429 Z"
                                    fill="rgb(255, 255, 255)"
                                    stroke="rgb(0, 0, 0)"
                                    strokeMiterlimit="10"
                                    transform="rotate(90,759,419)"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-110">
                            <g>
                                <path
                                    d="M 769 419 L 793.9 419"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 800.65 419 L 791.65 423.5 L 793.9 419 L 791.65 414.5 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-111">
                            <g>
                                <path
                                    d="M 694 512 L 721.5 512 L 721.5 436.5 L 738.9 436.5"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 745.65 436.5 L 736.65 441 L 738.9 436.5 L 736.65 432 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-112">
                            <g>
                                <path
                                    d="M 694 350.5 L 734 350.5 L 734 401.5 L 738.9 401.5"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 745.65 401.5 L 736.65 406 L 738.9 401.5 L 736.65 397 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-113">
                            <g>
                                <path
                                    d="M 694 470 L 831.2 470 L 831.2 429.1"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 831.2 422.35 L 835.7 431.35 L 831.2 429.1 L 826.7 431.35 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-114">
                            <g>
                                <path
                                    d="M 694 300.5 L 749 300.5 L 792.94 300.13"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 799.69 300.08 L 790.72 304.65 L 792.94 300.13 L 790.65 295.65 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-115">
                            <g>
                                <path
                                    d="M 994 23 L 994 10.35 Q 994 0 983.65 0 L 924.35 0 Q 914 0 914 10.35 L 914 23"
                                    fill="#e51400"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <path
                                    d="M 914 23 L 914 669.65 Q 914 680 924.35 680 L 983.65 680 Q 994 680 994 669.65 L 994 23"
                                    fill="rgb(255, 255, 255)"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <path
                                    d="M 914 23 L 994 23"
                                    fill="none"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                            <g>
                                <g transform="translate(-0.5 -0.5)">
                                    <switch>
                                        <foreignObject
                                            pointer-events="none"
                                            width="100%"
                                            height="100%"
                                            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                            style={{ overflow: "visible", textAlign: "left" }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "unsafe center",
                                                    justifyContent: "unsafe center",
                                                    width: "78px",
                                                    height: "1px",
                                                    paddingTop: "12px",
                                                    marginLeft: "915px",
                                                }}
                                            >
                                                <div
                                                    data-drawio-colors="color: #ffffff; "
                                                    style={{
                                                        boxSizing: "border-box",
                                                        fontSize: "0px",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            fontSize: "12px",
                                                            fontFamily: "Helvetica",
                                                            color: "rgb(255, 255, 255)",
                                                            lineHeight: "1.2",
                                                            pointerEvents: "all",
                                                            fontWeight: "bold",
                                                            whiteSpace: "normal",
                                                            overflowWrap: "normal",
                                                        }}
                                                    >
                                                        <font color="#ffffff">EX/MEM</font>
                                                    </div>
                                                </div>
                                            </div>
                                        </foreignObject>
                                        <text
                                            x="954"
                                            y="15"
                                            fill="#ffffff"
                                            font-family='"Helvetica"'
                                            font-size="12px"
                                            text-anchor="middle"
                                            font-weight="bold"
                                        >
                                            EX/MEM
                                        </text>
                                    </switch>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-119">
                                <g />
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-120">
                                    <g>
                                        <rect
                                            x="914"
                                            y="250"
                                            width="80"
                                            height="30"
                                            fill="#fad9d5"
                                            stroke="#ae4132"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe flex-end",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "277px",
                                                            marginLeft: "915px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(0, 0, 0)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                {values.ex_mem.branchAddr}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="954"
                                                    y="277"
                                                    fill="rgb(0, 0, 0)"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    plh_ex_mem.br...
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-189">
                                    <g>
                                        <path
                                            d="M 994 250 L 1016.5 250 L 1030.76 250"
                                            fill="none"
                                            stroke="#0055ff"
                                            stroke-width="2"
                                            strokeMiterlimit="10"
                                            pointer-events="stroke"
                                        />
                                        <path
                                            d="M 1036.76 250 L 1028.76 254 L 1030.76 250 L 1028.76 246 Z"
                                            fill="#0055ff"
                                            stroke="#0055ff"
                                            stroke-width="2"
                                            strokeMiterlimit="10"
                                            pointer-events="all"
                                        />
                                    </g>
                                </g>
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-121">
                                    <g>
                                        <rect
                                            x="914"
                                            y="240"
                                            width="80"
                                            height="20"
                                            rx="6"
                                            ry="6"
                                            fill="#e51400"
                                            stroke="#b20000"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe center",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "250px",
                                                            marginLeft: "915px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: #ffffff; "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(255, 255, 255)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                <b>BranchAddr</b>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="954"
                                                    y="254"
                                                    fill="#ffffff"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    BranchAddr
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-137">
                                <g />
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-138">
                                    <g>
                                        <rect
                                            x="914"
                                            y="640"
                                            width="80"
                                            height="30"
                                            fill="#fad9d5"
                                            stroke="#ae4132"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe flex-end",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "667px",
                                                            marginLeft: "915px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(0, 0, 0)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                {values.ex_mem.dst}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="954"
                                                    y="667"
                                                    fill="rgb(0, 0, 0)"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    plh_ex_mem.dst
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-139">
                                    <g>
                                        <rect
                                            x="914"
                                            y="630"
                                            width="80"
                                            height="20"
                                            rx="6"
                                            ry="6"
                                            fill="#e51400"
                                            stroke="#b20000"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe center",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "640px",
                                                            marginLeft: "915px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: #ffffff; "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(255, 255, 255)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                <b>DST</b>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="954"
                                                    y="644"
                                                    fill="#ffffff"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    DST
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-188">
                                <g />
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-116">
                                    <g />
                                    <g data-cell-id="1W33FOhmNmDA0zy-Gag4-117">
                                        <g>
                                            <rect
                                                x="914"
                                                y="359.75"
                                                width="80"
                                                height="29.25"
                                                fill="#fad9d5"
                                                stroke="#ae4132"
                                                pointer-events="all"
                                            />
                                        </g>
                                        <g>
                                            <g transform="translate(-0.5 -0.5)">
                                                <switch>
                                                    <foreignObject
                                                        pointer-events="none"
                                                        width="100%"
                                                        height="100%"
                                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                        style={{
                                                            overflow: "visible",
                                                            textAlign: "left",
                                                        }}
                                                    >
                                                        <div
                                                            xmlns="http://www.w3.org/1999/xhtml"
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "unsafe flex-end",
                                                                justifyContent: "unsafe center",
                                                                width: "78px",
                                                                height: "1px",
                                                                paddingTop: "386px",
                                                                marginLeft: "915px",
                                                            }}
                                                        >
                                                            <div
                                                                data-drawio-colors="color: rgb(0, 0, 0); "
                                                                style={{
                                                                    boxSizing: "border-box",
                                                                    fontSize: "0px",
                                                                    textAlign: "center",
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        display: "inline-block",
                                                                        fontSize: "12px",
                                                                        fontFamily: "Helvetica",
                                                                        color: "rgb(0, 0, 0)",
                                                                        lineHeight: "1.2",
                                                                        pointerEvents: "all",
                                                                        whiteSpace: "normal",
                                                                        overflowWrap: "normal",
                                                                    }}
                                                                >
                                                                    {values.ex_mem.aluRes}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </foreignObject>
                                                    <text
                                                        x="954"
                                                        y="386"
                                                        fill="rgb(0, 0, 0)"
                                                        font-family='"Helvetica"'
                                                        font-size="12px"
                                                        text-anchor="middle"
                                                    >
                                                        plh_ex_mem.al...
                                                    </text>
                                                </switch>
                                            </g>
                                        </g>
                                    </g>
                                    <g data-cell-id="1W33FOhmNmDA0zy-Gag4-118">
                                        <g>
                                            <rect
                                                x="914"
                                                y="350"
                                                width="80"
                                                height="19.5"
                                                rx="5.85"
                                                ry="5.85"
                                                fill="#e51400"
                                                stroke="#b20000"
                                                pointer-events="all"
                                            />
                                        </g>
                                        <g>
                                            <g transform="translate(-0.5 -0.5)">
                                                <switch>
                                                    <foreignObject
                                                        pointer-events="none"
                                                        width="100%"
                                                        height="100%"
                                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                        style={{
                                                            overflow: "visible",
                                                            textAlign: "left",
                                                        }}
                                                    >
                                                        <div
                                                            xmlns="http://www.w3.org/1999/xhtml"
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "unsafe center",
                                                                justifyContent: "unsafe center",
                                                                width: "78px",
                                                                height: "1px",
                                                                paddingTop: "360px",
                                                                marginLeft: "915px",
                                                            }}
                                                        >
                                                            <div
                                                                data-drawio-colors="color: #ffffff; "
                                                                style={{
                                                                    boxSizing: "border-box",
                                                                    fontSize: "0px",
                                                                    textAlign: "center",
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        display: "inline-block",
                                                                        fontSize: "12px",
                                                                        fontFamily: "Helvetica",
                                                                        color: "rgb(255, 255, 255)",
                                                                        lineHeight: "1.2",
                                                                        pointerEvents: "all",
                                                                        whiteSpace: "normal",
                                                                        overflowWrap: "normal",
                                                                    }}
                                                                >
                                                                    <b>AluRes</b>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </foreignObject>
                                                    <text
                                                        x="954"
                                                        y="363"
                                                        fill="#ffffff"
                                                        font-family='"Helvetica"'
                                                        font-size="12px"
                                                        text-anchor="middle"
                                                    >
                                                        AluRes
                                                    </text>
                                                </switch>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-191">
                                <g />
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-192">
                                    <g />
                                    <g data-cell-id="1W33FOhmNmDA0zy-Gag4-193">
                                        <g>
                                            <rect
                                                x="914"
                                                y="303.75"
                                                width="80"
                                                height="29.25"
                                                fill="#fad9d5"
                                                stroke="#ae4132"
                                                pointer-events="all"
                                            />
                                        </g>
                                        <g>
                                            <g transform="translate(-0.5 -0.5)">
                                                <switch>
                                                    <foreignObject
                                                        pointer-events="none"
                                                        width="100%"
                                                        height="100%"
                                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                        style={{
                                                            overflow: "visible",
                                                            textAlign: "left",
                                                        }}
                                                    >
                                                        <div
                                                            xmlns="http://www.w3.org/1999/xhtml"
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "unsafe flex-end",
                                                                justifyContent: "unsafe center",
                                                                width: "78px",
                                                                height: "1px",
                                                                paddingTop: "330px",
                                                                marginLeft: "915px",
                                                            }}
                                                        >
                                                            <div
                                                                data-drawio-colors="color: rgb(0, 0, 0); "
                                                                style={{
                                                                    boxSizing: "border-box",
                                                                    fontSize: "0px",
                                                                    textAlign: "center",
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        display: "inline-block",
                                                                        fontSize: "12px",
                                                                        fontFamily: "Helvetica",
                                                                        color: "rgb(0, 0, 0)",
                                                                        lineHeight: "1.2",
                                                                        pointerEvents: "all",
                                                                        whiteSpace: "normal",
                                                                        overflowWrap: "normal",
                                                                    }}
                                                                >
                                                                    {values.ex_mem.zero}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </foreignObject>
                                                    <text
                                                        x="954"
                                                        y="330"
                                                        fill="rgb(0, 0, 0)"
                                                        font-family='"Helvetica"'
                                                        font-size="12px"
                                                        text-anchor="middle"
                                                    >
                                                        plh_ex_mem.ze...
                                                    </text>
                                                </switch>
                                            </g>
                                        </g>
                                    </g>
                                    <g data-cell-id="1W33FOhmNmDA0zy-Gag4-194">
                                        <g>
                                            <rect
                                                x="914"
                                                y="294"
                                                width="80"
                                                height="19.5"
                                                rx="5.85"
                                                ry="5.85"
                                                fill="#e51400"
                                                stroke="#b20000"
                                                pointer-events="all"
                                            />
                                        </g>
                                        <g>
                                            <g transform="translate(-0.5 -0.5)">
                                                <switch>
                                                    <foreignObject
                                                        pointer-events="none"
                                                        width="100%"
                                                        height="100%"
                                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                        style={{
                                                            overflow: "visible",
                                                            textAlign: "left",
                                                        }}
                                                    >
                                                        <div
                                                            xmlns="http://www.w3.org/1999/xhtml"
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "unsafe center",
                                                                justifyContent: "unsafe center",
                                                                width: "78px",
                                                                height: "1px",
                                                                paddingTop: "304px",
                                                                marginLeft: "915px",
                                                            }}
                                                        >
                                                            <div
                                                                data-drawio-colors="color: #ffffff; "
                                                                style={{
                                                                    boxSizing: "border-box",
                                                                    fontSize: "0px",
                                                                    textAlign: "center",
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        display: "inline-block",
                                                                        fontSize: "12px",
                                                                        fontFamily: "Helvetica",
                                                                        color: "rgb(255, 255, 255)",
                                                                        lineHeight: "1.2",
                                                                        pointerEvents: "all",
                                                                        whiteSpace: "normal",
                                                                        overflowWrap: "normal",
                                                                    }}
                                                                >
                                                                    <b>Zero</b>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </foreignObject>
                                                    <text
                                                        x="954"
                                                        y="307"
                                                        fill="#ffffff"
                                                        font-family='"Helvetica"'
                                                        font-size="12px"
                                                        text-anchor="middle"
                                                    >
                                                        Zero
                                                    </text>
                                                </switch>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-236">
                                <g />
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-237">
                                    <g />
                                    <g data-cell-id="1W33FOhmNmDA0zy-Gag4-238">
                                        <g>
                                            <rect
                                                x="914"
                                                y="439.75"
                                                width="80"
                                                height="29.25"
                                                fill="#fad9d5"
                                                stroke="#ae4132"
                                                pointer-events="all"
                                            />
                                        </g>
                                        <g>
                                            <g transform="translate(-0.5 -0.5)">
                                                <switch>
                                                    <foreignObject
                                                        pointer-events="none"
                                                        width="100%"
                                                        height="100%"
                                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                        style={{
                                                            overflow: "visible",
                                                            textAlign: "left",
                                                        }}
                                                    >
                                                        <div
                                                            xmlns="http://www.w3.org/1999/xhtml"
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "unsafe flex-end",
                                                                justifyContent: "unsafe center",
                                                                width: "78px",
                                                                height: "1px",
                                                                paddingTop: "466px",
                                                                marginLeft: "915px",
                                                            }}
                                                        >
                                                            <div
                                                                data-drawio-colors="color: rgb(0, 0, 0); "
                                                                style={{
                                                                    boxSizing: "border-box",
                                                                    fontSize: "0px",
                                                                    textAlign: "center",
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        display: "inline-block",
                                                                        fontSize: "12px",
                                                                        fontFamily: "Helvetica",
                                                                        color: "rgb(0, 0, 0)",
                                                                        lineHeight: "1.2",
                                                                        pointerEvents: "all",
                                                                        whiteSpace: "normal",
                                                                        overflowWrap: "normal",
                                                                    }}
                                                                >
                                                                    {values.ex_mem.rd2}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </foreignObject>
                                                    <text
                                                        x="954"
                                                        y="466"
                                                        fill="rgb(0, 0, 0)"
                                                        font-family='"Helvetica"'
                                                        font-size="12px"
                                                        text-anchor="middle"
                                                    >
                                                        plh_ex_mem.rd2
                                                    </text>
                                                </switch>
                                            </g>
                                        </g>
                                    </g>
                                    <g data-cell-id="1W33FOhmNmDA0zy-Gag4-239">
                                        <g>
                                            <rect
                                                x="914"
                                                y="430"
                                                width="80"
                                                height="19.5"
                                                rx="5.85"
                                                ry="5.85"
                                                fill="#e51400"
                                                stroke="#b20000"
                                                pointer-events="all"
                                            />
                                        </g>
                                        <g>
                                            <g transform="translate(-0.5 -0.5)">
                                                <switch>
                                                    <foreignObject
                                                        pointer-events="none"
                                                        width="100%"
                                                        height="100%"
                                                        requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                        style={{
                                                            overflow: "visible",
                                                            textAlign: "left",
                                                        }}
                                                    >
                                                        <div
                                                            xmlns="http://www.w3.org/1999/xhtml"
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "unsafe center",
                                                                justifyContent: "unsafe center",
                                                                width: "78px",
                                                                height: "1px",
                                                                paddingTop: "440px",
                                                                marginLeft: "915px",
                                                            }}
                                                        >
                                                            <div
                                                                data-drawio-colors="color: #ffffff; "
                                                                style={{
                                                                    boxSizing: "border-box",
                                                                    fontSize: "0px",
                                                                    textAlign: "center",
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        display: "inline-block",
                                                                        fontSize: "12px",
                                                                        fontFamily: "Helvetica",
                                                                        color: "rgb(255, 255, 255)",
                                                                        lineHeight: "1.2",
                                                                        pointerEvents: "all",
                                                                        whiteSpace: "normal",
                                                                        overflowWrap: "normal",
                                                                    }}
                                                                >
                                                                    <b>RD2</b>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </foreignObject>
                                                    <text
                                                        x="954"
                                                        y="443"
                                                        fill="#ffffff"
                                                        font-family='"Helvetica"'
                                                        font-size="12px"
                                                        text-anchor="middle"
                                                    >
                                                        RD2
                                                    </text>
                                                </switch>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-146">
                                <g>
                                    <rect
                                        x="914"
                                        y="38"
                                        width="80"
                                        height="30"
                                        fill="#fad9d5"
                                        stroke="#ae4132"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe flex-end",
                                                        justifyContent: "unsafe center",
                                                        width: "78px",
                                                        height: "1px",
                                                        paddingTop: "65px",
                                                        marginLeft: "915px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            Beq
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="954"
                                                y="65"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                Beq
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-147">
                                <g>
                                    <rect
                                        x="914"
                                        y="66"
                                        width="80"
                                        height="20"
                                        fill="#fad9d5"
                                        stroke="#ae4132"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "78px",
                                                        height: "1px",
                                                        paddingTop: "76px",
                                                        marginLeft: "915px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            Bgtz
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="954"
                                                y="80"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                Bgtz
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-148">
                                <g>
                                    <rect
                                        x="914"
                                        y="86"
                                        width="80"
                                        height="20"
                                        fill="#fad9d5"
                                        stroke="#ae4132"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "78px",
                                                        height: "1px",
                                                        paddingTop: "96px",
                                                        marginLeft: "915px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            Bne
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="954"
                                                y="100"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                Bne
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-150">
                                <g>
                                    <rect
                                        x="914"
                                        y="106"
                                        width="80"
                                        height="20"
                                        fill="#fad9d5"
                                        stroke="#ae4132"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "78px",
                                                        height: "1px",
                                                        paddingTop: "116px",
                                                        marginLeft: "915px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            MemWrite
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="954"
                                                y="120"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                MemWrite
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-151">
                                <g>
                                    <rect
                                        x="914"
                                        y="126"
                                        width="80"
                                        height="20"
                                        fill="#fad9d5"
                                        stroke="#ae4132"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "78px",
                                                        height: "1px",
                                                        paddingTop: "136px",
                                                        marginLeft: "915px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            MemToReg
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="954"
                                                y="140"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                MemToReg
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-152">
                                <g>
                                    <rect
                                        x="914"
                                        y="146"
                                        width="80"
                                        height="20"
                                        fill="#fad9d5"
                                        stroke="#ae4132"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "78px",
                                                        height: "1px",
                                                        paddingTop: "156px",
                                                        marginLeft: "915px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            RegWrite
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="954"
                                                y="160"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                RegWrite
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-143">
                                <g>
                                    <rect
                                        x="914"
                                        y="30"
                                        width="80"
                                        height="20"
                                        rx="6"
                                        ry="6"
                                        fill="#e51400"
                                        stroke="#b20000"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "78px",
                                                        height: "1px",
                                                        paddingTop: "40px",
                                                        marginLeft: "915px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: #ffffff; "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(255, 255, 255)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            <b>CTRL_SIG</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="954"
                                                y="44"
                                                fill="#ffffff"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                CTRL_SIG
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-159">
                            <g>
                                <path
                                    d="M 844 235 L 864 235 L 864 250 L 903.9 250"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 910.65 250 L 901.65 254.5 L 903.9 250 L 901.65 245.5 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-153">
                            <g>
                                <path
                                    d="M 804 200 L 844 221 L 844 249 L 804 270 L 804 256 L 824 245.5 L 824 224.5 L 804 214 Z"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                            <g>
                                <g transform="translate(-0.5 -0.5)">
                                    <switch>
                                        <foreignObject
                                            pointer-events="none"
                                            width="100%"
                                            height="100%"
                                            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                            style={{ overflow: "visible", textAlign: "left" }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "unsafe center",
                                                    justifyContent: "unsafe center",
                                                    width: "38px",
                                                    height: "1px",
                                                    paddingTop: "235px",
                                                    marginLeft: "805px",
                                                }}
                                            >
                                                <div
                                                    data-drawio-colors="color: rgb(0, 0, 0); "
                                                    style={{
                                                        boxSizing: "border-box",
                                                        fontSize: "0px",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            fontSize: "12px",
                                                            fontFamily: "Helvetica",
                                                            color: "rgb(0, 0, 0)",
                                                            lineHeight: "1.2",
                                                            pointerEvents: "all",
                                                            whiteSpace: "normal",
                                                            overflowWrap: "normal",
                                                        }}
                                                    >
                                                             +
                                                    </div>
                                                </div>
                                            </div>
                                        </foreignObject>
                                        <text
                                            x="824"
                                            y="239"
                                            fill="rgb(0, 0, 0)"
                                            font-family='"Helvetica"'
                                            font-size="12px"
                                            text-anchor="middle"
                                        >
                                                 +
                                        </text>
                                    </switch>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-157">
                            <g>
                                <path
                                    d="M 694 250.5 L 729 250.5 L 729 206.3 L 793.9 206.3"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 800.65 206.3 L 791.65 210.8 L 793.9 206.3 L 791.65 201.8 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-158">
                            <g>
                                <path
                                    d="M 793.9 263.7 L 723 263.7 L 722.02 434"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 800.65 263.7 L 791.65 268.2 L 793.9 263.7 L 791.65 259.2 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <ellipse
                                    cx="722"
                                    cy="437"
                                    rx="3"
                                    ry="3"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-171">
                            <g>
                                <path
                                    d="M 759 616 L 836.5 616 L 836.5 640 L 903.9 640"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 910.65 640 L 901.65 644.5 L 903.9 640 L 901.65 635.5 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-163">
                            <g>
                                <path
                                    d="M 709 626 L 729 606 L 769 606 L 789 626 Z"
                                    fill="rgb(255, 255, 255)"
                                    stroke="rgb(0, 0, 0)"
                                    strokeMiterlimit="10"
                                    transform="rotate(90,749,616)"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-167">
                            <g>
                                <path
                                    d="M 694 595 L 728.54 595.03"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 735.29 595.04 L 726.28 599.53 L 728.54 595.03 L 726.29 590.53 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-169">
                            <g>
                                <path
                                    d="M 694 637 L 716.5 637 L 728.9 636.59"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 735.65 636.36 L 726.8 641.16 L 728.9 636.59 L 726.5 632.16 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-170">
                            <g>
                                <path
                                    d="M 694 80 L 759 80 L 759 385.76"
                                    fill="none"
                                    stroke={values.id_ex.ctrlSig.AluSrc ? "#009900" : "#66ff66"}
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 759 391.76 L 755 383.76 L 759 385.76 L 763 383.76 Z"
                                    fill={values.id_ex.ctrlSig.AluSrc ? "#009900" : "#66ff66"}
                                    stroke={values.id_ex.ctrlSig.AluSrc ? "#009900" : "#66ff66"}
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-173">
                            <g>
                                <ellipse
                                    cx="861"
                                    cy="525.5"
                                    rx="30"
                                    ry="38.5"
                                    fill="rgb(255, 255, 255)"
                                    stroke="rgb(0, 0, 0)"
                                    pointer-events="all"
                                />
                            </g>
                            <g>
                                <g transform="translate(-0.5 -0.5)">
                                    <switch>
                                        <foreignObject
                                            pointer-events="none"
                                            width="100%"
                                            height="100%"
                                            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                            style={{ overflow: "visible", textAlign: "left" }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "unsafe center",
                                                    justifyContent: "unsafe center",
                                                    width: "58px",
                                                    height: "1px",
                                                    paddingTop: "526px",
                                                    marginLeft: "832px",
                                                }}
                                            >
                                                <div
                                                    data-drawio-colors="color: rgb(0, 0, 0); "
                                                    style={{
                                                        boxSizing: "border-box",
                                                        fontSize: "0px",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            fontSize: "12px",
                                                            fontFamily: "Helvetica",
                                                            color: "rgb(0, 0, 0)",
                                                            lineHeight: "1.2",
                                                            pointerEvents: "all",
                                                            whiteSpace: "normal",
                                                            overflowWrap: "normal",
                                                        }}
                                                    >
                                                        Alu Control
                                                    </div>
                                                </div>
                                            </div>
                                        </foreignObject>
                                        <text
                                            x="861"
                                            y="529"
                                            fill="rgb(0, 0, 0)"
                                            font-family='"Helvetica"'
                                            font-size="12px"
                                            text-anchor="middle"
                                        >
                                            Alu Control
                                        </text>
                                    </switch>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-174">
                            <g>
                                <path
                                    d="M 861 487 L 861 444.75 L 860.85 412.6"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 860.82 405.85 L 865.36 414.83 L 860.85 412.6 L 856.36 414.88 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-177">
                            <g />
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-178">
                                <g>
                                    <rect
                                        x="731"
                                        y="526"
                                        width="80"
                                        height="30"
                                        fill="#fad9d5"
                                        stroke="#ae4132"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe flex-end",
                                                        justifyContent: "unsafe center",
                                                        width: "78px",
                                                        height: "1px",
                                                        paddingTop: "553px",
                                                        marginLeft: "732px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            {values.id_ex.ctrlSig.aluOp}
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="771"
                                                y="553"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                id_ex.aluOp
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-179">
                                <g>
                                    <rect
                                        x="731"
                                        y="516"
                                        width="80"
                                        height="20"
                                        rx="6"
                                        ry="6"
                                        fill="#e51400"
                                        stroke="#b20000"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "78px",
                                                        height: "1px",
                                                        paddingTop: "526px",
                                                        marginLeft: "732px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: #ffffff; "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(255, 255, 255)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            <b>AluOp</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="771"
                                                y="530"
                                                fill="#ffffff"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                AluOp
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-180">
                            <g>
                                <path
                                    d="M 811 526 L 820.9 526"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 827.65 526 L 818.65 530.5 L 820.9 526 L 818.65 521.5 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-181">
                            <g>
                                <rect
                                    x="747"
                                    y="385.5"
                                    width="20"
                                    height="67"
                                    fill="none"
                                    stroke="none"
                                    pointer-events="all"
                                />
                            </g>
                            <g>
                                <g transform="translate(-0.5 -0.5)">
                                    <switch>
                                        <foreignObject
                                            pointer-events="none"
                                            width="100%"
                                            height="100%"
                                            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                            style={{ overflow: "visible", textAlign: "left" }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "unsafe center",
                                                    justifyContent: "unsafe center",
                                                    width: "18px",
                                                    height: "1px",
                                                    paddingTop: "419px",
                                                    marginLeft: "748px",
                                                }}
                                            >
                                                <div
                                                    data-drawio-colors="color: rgb(0, 0, 0); "
                                                    style={{
                                                        boxSizing: "border-box",
                                                        fontSize: "0px",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            fontSize: "12px",
                                                            fontFamily: "Helvetica",
                                                            color: "rgb(0, 0, 0)",
                                                            lineHeight: "1.2",
                                                            pointerEvents: "all",
                                                            whiteSpace: "normal",
                                                            overflowWrap: "normal",
                                                        }}
                                                    >
                                                        <b>0</b>
                                                        <div>
                                                            <b>
                                                                <br />
                                                            </b>
                                                        </div>
                                                        <div>
                                                            <b>1</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </foreignObject>
                                        <text
                                            x="757"
                                            y="423"
                                            fill="rgb(0, 0, 0)"
                                            font-family='"Helvetica"'
                                            font-size="12px"
                                            text-anchor="middle"
                                        >
                                            0...
                                        </text>
                                    </switch>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-182">
                            <g>
                                <rect
                                    x="739"
                                    y="586"
                                    width="20"
                                    height="67"
                                    fill="none"
                                    stroke="none"
                                    pointer-events="all"
                                />
                            </g>
                            <g>
                                <g transform="translate(-0.5 -0.5)">
                                    <switch>
                                        <foreignObject
                                            pointer-events="none"
                                            width="100%"
                                            height="100%"
                                            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                            style={{ overflow: "visible", textAlign: "left" }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "unsafe center",
                                                    justifyContent: "unsafe center",
                                                    width: "18px",
                                                    height: "1px",
                                                    paddingTop: "620px",
                                                    marginLeft: "740px",
                                                }}
                                            >
                                                <div
                                                    data-drawio-colors="color: rgb(0, 0, 0); "
                                                    style={{
                                                        boxSizing: "border-box",
                                                        fontSize: "0px",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            fontSize: "12px",
                                                            fontFamily: "Helvetica",
                                                            color: "rgb(0, 0, 0)",
                                                            lineHeight: "1.2",
                                                            pointerEvents: "all",
                                                            whiteSpace: "normal",
                                                            overflowWrap: "normal",
                                                        }}
                                                    >
                                                        <b>0</b>
                                                        <div>
                                                            <b>
                                                                <br />
                                                            </b>
                                                        </div>
                                                        <div>
                                                            <b>1</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </foreignObject>
                                        <text
                                            x="749"
                                            y="623"
                                            fill="rgb(0, 0, 0)"
                                            font-family='"Helvetica"'
                                            font-size="12px"
                                            text-anchor="middle"
                                        >
                                            0...
                                        </text>
                                    </switch>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-184">
                            <g>
                                <path
                                    d="M 694 62.5 L 694 60 L 709 60 L 709 570 L 744 570 L 744 577.76"
                                    fill="none"
                                    stroke={values.id_ex.ctrlSig.RegDst ? "#009900" : "#66ff66"}
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 744 583.76 L 740 575.76 L 744 577.76 L 748 575.76 Z"
                                    fill={values.id_ex.ctrlSig.RegDst ? "#009900" : "#66ff66"}
                                    stroke={values.id_ex.ctrlSig.RegDst ? "#009900" : "#66ff66"}
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-186">
                            <g>
                                <path
                                    d="M 694 40 L 903.9 40"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 910.65 40 L 901.65 44.5 L 903.9 40 L 901.65 35.5 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-196">
                            <g>
                                <path
                                    d="M 994 303.75 L 1055 303.8 L 1055 110 L 1079 110 L 1079 120"
                                    fill="none"
                                    stroke={values.ex_mem.zero ? "#009900" : "#66ff66"}
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-232">
                            <g>
                                <path
                                    d="M 1209 343 L 1209 330.35 Q 1209 320 1198.65 320 L 1079.35 320 Q 1069 320 1069 330.35 L 1069 343"
                                    fill="#e51400"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <path
                                    d="M 1069 343 L 1069 509.65 Q 1069 520 1079.35 520 L 1198.65 520 Q 1209 520 1209 509.65 L 1209 343"
                                    fill="rgb(255, 255, 255)"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <path
                                    d="M 1069 343 L 1209 343"
                                    fill="none"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                            <g>
                                <g transform="translate(-0.5 -0.5)">
                                    <switch>
                                        <foreignObject
                                            pointer-events="none"
                                            width="100%"
                                            height="100%"
                                            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                            style={{ overflow: "visible", textAlign: "left" }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "unsafe center",
                                                    justifyContent: "unsafe center",
                                                    width: "138px",
                                                    height: "1px",
                                                    paddingTop: "332px",
                                                    marginLeft: "1070px",
                                                }}
                                            >
                                                <div
                                                    data-drawio-colors="color: #ffffff; "
                                                    style={{
                                                        boxSizing: "border-box",
                                                        fontSize: "0px",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            fontSize: "12px",
                                                            fontFamily: "Helvetica",
                                                            color: "rgb(255, 255, 255)",
                                                            lineHeight: "1.2",
                                                            pointerEvents: "all",
                                                            fontWeight: "bold",
                                                            whiteSpace: "normal",
                                                            overflowWrap: "normal",
                                                        }}
                                                    >
                                                        <font color="#ffffff">Register File</font>
                                                    </div>
                                                </div>
                                            </div>
                                        </foreignObject>
                                        <text
                                            x="1139"
                                            y="335"
                                            fill="#ffffff"
                                            font-family='"Helvetica"'
                                            font-size="12px"
                                            text-anchor="middle"
                                            font-weight="bold"
                                        >
                                            Register File
                                        </text>
                                    </switch>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-233">
                                <g>
                                    <rect
                                        x="1069"
                                        y="345"
                                        width="140"
                                        height="175"
                                        fill="none"
                                        stroke="none"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "138px",
                                                        height: "1px",
                                                        paddingTop: "433px",
                                                        marginLeft: "1070px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            placeholder_reg_file
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="1139"
                                                y="436"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                placeholder_reg_file
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-234">
                            <g>
                                <path
                                    d="M 994 359.75 L 1031.5 359.8 L 1058.9 360.37"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 1065.65 360.51 L 1056.56 364.82 L 1058.9 360.37 L 1056.74 355.82 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-235">
                            <g>
                                <path
                                    d="M 738 350 L 779 350 L 779 439.8 L 903.9 439.75"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <ellipse
                                    cx="735"
                                    cy="350"
                                    rx="3"
                                    ry="3"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    pointer-events="all"
                                />
                                <path
                                    d="M 910.65 439.75 L 901.65 444.25 L 903.9 439.75 L 901.64 435.25 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-240">
                            <g>
                                <path
                                    d="M 994 439.75 L 1031.5 439.8 L 1056.94 440.09"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 1063.69 440.16 L 1054.64 444.56 L 1056.94 440.09 L 1054.74 435.56 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-254">
                            <g>
                                <path
                                    d="M 1329 23 L 1329 10.35 Q 1329 0 1318.65 0 L 1259.35 0 Q 1249 0 1249 10.35 L 1249 23"
                                    fill="#e51400"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <path
                                    d="M 1249 23 L 1249 669.65 Q 1249 680 1259.35 680 L 1318.65 680 Q 1329 680 1329 669.65 L 1329 23"
                                    fill="rgb(255, 255, 255)"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <path
                                    d="M 1249 23 L 1329 23"
                                    fill="none"
                                    stroke="#b20000"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                            <g>
                                <g transform="translate(-0.5 -0.5)">
                                    <switch>
                                        <foreignObject
                                            pointer-events="none"
                                            width="100%"
                                            height="100%"
                                            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                            style={{ overflow: "visible", textAlign: "left" }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "unsafe center",
                                                    justifyContent: "unsafe center",
                                                    width: "78px",
                                                    height: "1px",
                                                    paddingTop: "12px",
                                                    marginLeft: "1250px",
                                                }}
                                            >
                                                <div
                                                    data-drawio-colors="color: #ffffff; "
                                                    style={{
                                                        boxSizing: "border-box",
                                                        fontSize: "0px",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            fontSize: "12px",
                                                            fontFamily: "Helvetica",
                                                            color: "rgb(255, 255, 255)",
                                                            lineHeight: "1.2",
                                                            pointerEvents: "all",
                                                            fontWeight: "bold",
                                                            whiteSpace: "normal",
                                                            overflowWrap: "normal",
                                                        }}
                                                    >
                                                        <font color="#ffffff">MemWb</font>
                                                    </div>
                                                </div>
                                            </div>
                                        </foreignObject>
                                        <text
                                            x="1289"
                                            y="15"
                                            fill="#ffffff"
                                            font-family='"Helvetica"'
                                            font-size="12px"
                                            text-anchor="middle"
                                            font-weight="bold"
                                        >
                                            MemWb
                                        </text>
                                    </switch>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-289">
                                <g />
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-290">
                                    <g>
                                        <rect
                                            x="1249"
                                            y="356"
                                            width="80"
                                            height="30"
                                            fill="#fad9d5"
                                            stroke="#ae4132"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe flex-end",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "383px",
                                                            marginLeft: "1250px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(0, 0, 0)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                {values.mem_wb.memData}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="1289"
                                                    y="383"
                                                    fill="rgb(0, 0, 0)"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    plh_mem_wb.me...
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-291">
                                    <g>
                                        <rect
                                            x="1249"
                                            y="346"
                                            width="80"
                                            height="20"
                                            rx="6"
                                            ry="6"
                                            fill="#e51400"
                                            stroke="#b20000"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe center",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "356px",
                                                            marginLeft: "1250px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: #ffffff; "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(255, 255, 255)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                <b>MemData</b>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="1289"
                                                    y="360"
                                                    fill="#ffffff"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    MemData
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-293">
                                <g />
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-294">
                                    <g>
                                        <rect
                                            x="1249"
                                            y="570"
                                            width="80"
                                            height="30"
                                            fill="#fad9d5"
                                            stroke="#ae4132"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe flex-end",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "597px",
                                                            marginLeft: "1250px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(0, 0, 0)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                {values.mem_wb.aluRes}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="1289"
                                                    y="597"
                                                    fill="rgb(0, 0, 0)"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    plh_mem_wb.al...
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-295">
                                    <g>
                                        <rect
                                            x="1249"
                                            y="560"
                                            width="80"
                                            height="20"
                                            rx="6"
                                            ry="6"
                                            fill="#e51400"
                                            stroke="#b20000"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe center",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "570px",
                                                            marginLeft: "1250px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: #ffffff; "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(255, 255, 255)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                <b>AluRes</b>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="1289"
                                                    y="574"
                                                    fill="#ffffff"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    AluRes
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-296">
                                <g />
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-297">
                                    <g>
                                        <rect
                                            x="1249"
                                            y="640"
                                            width="80"
                                            height="30"
                                            fill="#fad9d5"
                                            stroke="#ae4132"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe flex-end",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "667px",
                                                            marginLeft: "1250px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(0, 0, 0)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                {values.mem_wb.dst}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="1289"
                                                    y="667"
                                                    fill="rgb(0, 0, 0)"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    plh_mem_wb.dst
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-298">
                                    <g>
                                        <rect
                                            x="1249"
                                            y="630"
                                            width="80"
                                            height="20"
                                            rx="6"
                                            ry="6"
                                            fill="#e51400"
                                            stroke="#b20000"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe center",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "640px",
                                                            marginLeft: "1250px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: #ffffff; "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(255, 255, 255)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                <b>DST</b>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="1289"
                                                    y="644"
                                                    fill="#ffffff"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    DST
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-318">
                                <g />
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-315">
                                    <g>
                                        <rect
                                            x="1249"
                                            y="40"
                                            width="80"
                                            height="30"
                                            fill="#fad9d5"
                                            stroke="#ae4132"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe flex-end",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "67px",
                                                            marginLeft: "1250px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(0, 0, 0)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                MemToReg
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="1289"
                                                    y="67"
                                                    fill="rgb(0, 0, 0)"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    MemToReg
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-322">
                                    <g>
                                        <path
                                            d="M 1329 80 L 1349 80 L 1349 101.76"
                                            fill="none"
                                            stroke="#990099"
                                            stroke-width="2"
                                            strokeMiterlimit="10"
                                            pointer-events="stroke"
                                        />
                                        <path
                                            d="M 1349 107.76 L 1345 99.76 L 1349 101.76 L 1353 99.76 Z"
                                            fill="#990099"
                                            stroke="#990099"
                                            stroke-width="2"
                                            strokeMiterlimit="10"
                                            pointer-events="all"
                                        />
                                    </g>
                                </g>
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-316">
                                    <g>
                                        <rect
                                            x="1249"
                                            y="70"
                                            width="80"
                                            height="20"
                                            fill="#fad9d5"
                                            stroke="#ae4132"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe center",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "80px",
                                                            marginLeft: "1250px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: rgb(0, 0, 0); "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(0, 0, 0)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                RegWrite
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="1289"
                                                    y="84"
                                                    fill="rgb(0, 0, 0)"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    RegWrite
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                                <g data-cell-id="1W33FOhmNmDA0zy-Gag4-317">
                                    <g>
                                        <rect
                                            x="1249"
                                            y="30"
                                            width="80"
                                            height="20"
                                            rx="6"
                                            ry="6"
                                            fill="#e51400"
                                            stroke="#b20000"
                                            pointer-events="all"
                                        />
                                    </g>
                                    <g>
                                        <g transform="translate(-0.5 -0.5)">
                                            <switch>
                                                <foreignObject
                                                    pointer-events="none"
                                                    width="100%"
                                                    height="100%"
                                                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                    style={{
                                                        overflow: "visible",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div
                                                        xmlns="http://www.w3.org/1999/xhtml"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "unsafe center",
                                                            justifyContent: "unsafe center",
                                                            width: "78px",
                                                            height: "1px",
                                                            paddingTop: "40px",
                                                            marginLeft: "1250px",
                                                        }}
                                                    >
                                                        <div
                                                            data-drawio-colors="color: #ffffff; "
                                                            style={{
                                                                boxSizing: "border-box",
                                                                fontSize: "0px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "inline-block",
                                                                    fontSize: "12px",
                                                                    fontFamily: "Helvetica",
                                                                    color: "rgb(255, 255, 255)",
                                                                    lineHeight: "1.2",
                                                                    pointerEvents: "all",
                                                                    whiteSpace: "normal",
                                                                    overflowWrap: "normal",
                                                                }}
                                                            >
                                                                <b>CTRL_SIG</b>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </foreignObject>
                                                <text
                                                    x="1289"
                                                    y="44"
                                                    fill="#ffffff"
                                                    font-family='"Helvetica"'
                                                    font-size="12px"
                                                    text-anchor="middle"
                                                >
                                                    CTRL_SIG
                                                </text>
                                            </switch>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-265">
                            <g />
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-263">
                                <g>
                                    <path
                                        d="M 1074 126 Q 1104 126 1104 145.5 Q 1104 165 1074 165 Z"
                                        fill="rgb(255, 255, 255)"
                                        stroke="rgb(0, 0, 0)"
                                        strokeMiterlimit="10"
                                        transform="rotate(-270,1089,145.5)"
                                        pointer-events="all"
                                    />
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-264">
                                <g>
                                    <ellipse
                                        cx="1079"
                                        cy="125"
                                        rx="5"
                                        ry="5"
                                        fill="rgb(255, 255, 255)"
                                        stroke="rgb(0, 0, 0)"
                                        transform="rotate(-180,1079,125)"
                                        pointer-events="all"
                                    />
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-267">
                            <g />
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-268">
                                <g>
                                    <path
                                        d="M 1124 126 Q 1154 126 1154 145.5 Q 1154 165 1124 165 Z"
                                        fill="rgb(255, 255, 255)"
                                        stroke="rgb(0, 0, 0)"
                                        strokeMiterlimit="10"
                                        transform="rotate(-270,1139,145.5)"
                                        pointer-events="all"
                                    />
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-269">
                                <g>
                                    <ellipse
                                        cx="1129"
                                        cy="125"
                                        rx="5"
                                        ry="5"
                                        fill="rgb(255, 255, 255)"
                                        stroke="rgb(0, 0, 0)"
                                        transform="rotate(-180,1129,125)"
                                        pointer-events="all"
                                    />
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-271">
                            <g>
                                <path
                                    d="M 1172 125.5 Q 1202 125.5 1202 145 Q 1202 164.5 1172 164.5 Z"
                                    fill="rgb(255, 255, 255)"
                                    stroke="rgb(0, 0, 0)"
                                    strokeMiterlimit="10"
                                    transform="rotate(-270,1187,145)"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-272">
                            <g>
                                <path
                                    d="M 1082 110 L 1129 110 L 1129 120"
                                    fill="none"
                                    stroke={values.ex_mem.zero ? "#009900" : "#66ff66"}
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <ellipse
                                    cx="1079"
                                    cy="110"
                                    rx="3"
                                    ry="3"
                                    fill={values.ex_mem.zero ? "#009900" : "#66ff66"}
                                    stroke={values.ex_mem.zero ? "#009900" : "#66ff66"}
                                    stroke-width="2"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-273">
                            <g>
                                <path
                                    d="M 1132 110.03 L 1177.8 110.5 L 1177.25 130"
                                    fill="none"
                                    stroke={values.ex_mem.zero ? "#009900" : "#66ff66"}
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <ellipse
                                    cx="1129"
                                    cy="110"
                                    rx="3"
                                    ry="3"
                                    fill={values.ex_mem.zero ? "#009900" : "#66ff66"}
                                    stroke={values.ex_mem.zero ? "#009900" : "#66ff66"}
                                    stroke-width="2"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-274">
                            <g>
                                <path
                                    d="M 994 96 L 1098.8 96 L 1098.75 130.5"
                                    fill="none"
                                    stroke={values.ex_mem.ctrlSig.Bne ? "#009900" : "#66ff66"}
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-275">
                            <g>
                                <path
                                    d="M 994 76 L 1148.8 76 L 1148.75 130.5"
                                    fill="none"
                                    stroke={values.ex_mem.ctrlSig.Bgtz ? "#009900" : "#66ff66"}
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-276">
                            <g>
                                <path
                                    d="M 994 53 L 1196.8 53 L 1196.75 130"
                                    fill="none"
                                    stroke={values.ex_mem.ctrlSig.Beq ? "#009900" : "#66ff66"}
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-281">
                            <g>
                                <path
                                    d="M 1158 250 L 1178.5 250 L 1190.76 250.08"
                                    fill="none"
                                    stroke="#ff0000"
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 1196.76 250.12 L 1188.74 254.07 L 1190.76 250.08 L 1188.79 246.07 Z"
                                    fill="#ff0000"
                                    stroke="#ff0000"
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-277">
                            <g>
                                <path
                                    d="M 1128 230 Q 1158 230 1158 250 Q 1158 270 1128 270 Q 1143 250 1128 230 Z"
                                    fill="rgb(255, 255, 255)"
                                    stroke="rgb(0, 0, 0)"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-278">
                            <g>
                                <path
                                    d="M 1089 160.5 L 1089 260 L 1125.01 260"
                                    fill="none"
                                    stroke={
                                        !values.ex_mem.zero && values.ex_mem.ctrlSig.Bne
                                            ? "#009900"
                                            : "#66ff66"
                                    }
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 1131.01 260 L 1123.01 264 L 1125.01 260 L 1123.01 256 Z"
                                    fill={
                                        !values.ex_mem.zero && values.ex_mem.ctrlSig.Bne
                                            ? "#009900"
                                            : "#66ff66"
                                    }
                                    stroke={
                                        !values.ex_mem.zero && values.ex_mem.ctrlSig.Bne
                                            ? "#009900"
                                            : "#66ff66"
                                    }
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-279">
                            <g>
                                <path
                                    d="M 1139 160.5 L 1099 160.5 L 1099 250 L 1127.26 250"
                                    fill="none"
                                    stroke={
                                        !values.ex_mem.zero && values.ex_mem.ctrlSig.Bgtz
                                            ? "#009900"
                                            : "#66ff66"
                                    }
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 1133.26 250 L 1125.26 254 L 1127.26 250 L 1125.26 246 Z"
                                    fill={
                                        !values.ex_mem.zero && values.ex_mem.ctrlSig.Bgtz
                                            ? "#009900"
                                            : "#66ff66"
                                    }
                                    stroke={
                                        !values.ex_mem.zero && values.ex_mem.ctrlSig.Bgtz
                                            ? "#009900"
                                            : "#66ff66"
                                    }
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-280">
                            <g>
                                <path
                                    d="M 1187 160 L 1187 170 L 1109 170 L 1109 240 L 1125.01 240"
                                    fill="none"
                                    stroke={
                                        values.ex_mem.zero && values.ex_mem.ctrlSig.Beq
                                            ? "#009900"
                                            : "#66ff66"
                                    }
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 1131.01 240 L 1123.01 244 L 1125.01 240 L 1123.01 236 Z"
                                    fill={
                                        values.ex_mem.zero && values.ex_mem.ctrlSig.Beq
                                            ? "#009900"
                                            : "#66ff66"
                                    }
                                    stroke={
                                        values.ex_mem.zero && values.ex_mem.ctrlSig.Beq
                                            ? "#009900"
                                            : "#66ff66"
                                    }
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-287">
                            <g>
                                <path
                                    d="M 994 116 L 1019 116 L 1019 280 L 1139 280 L 1139 311.76"
                                    fill="none"
                                    stroke={values.ex_mem.ctrlSig.MemWrite ? "#009900" : "#66ff66"}
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 1139 317.76 L 1135 309.76 L 1139 311.76 L 1143 309.76 Z"
                                    fill={values.ex_mem.ctrlSig.MemWrite ? "#009900" : "#66ff66"}
                                    stroke={values.ex_mem.ctrlSig.MemWrite ? "#009900" : "#66ff66"}
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-288">
                            <g>
                                <path
                                    d="M 1019 363 L 1019 570 L 1238.9 570"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <ellipse
                                    cx="1019"
                                    cy="360"
                                    rx="3"
                                    ry="3"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    pointer-events="all"
                                />
                                <path
                                    d="M 1245.65 570 L 1236.65 574.5 L 1238.9 570 L 1236.65 565.5 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-292">
                            <g>
                                <path
                                    d="M 1238.9 356 L 1229 356 L 1208.72 355.68"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 1245.65 356 L 1236.65 360.5 L 1238.9 356 L 1236.65 351.5 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-299">
                            <g>
                                <path
                                    d="M 994 640 L 1238.9 640"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 1245.65 640 L 1236.65 644.5 L 1238.9 640 L 1236.65 635.5 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-300">
                            <g>
                                <path
                                    d="M 1349 454.5 L 1369 434.5 L 1399 434.5 L 1419 454.5 Z"
                                    fill="rgb(255, 255, 255)"
                                    stroke="rgb(0, 0, 0)"
                                    strokeMiterlimit="10"
                                    transform="rotate(90,1384,444.5)"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-320">
                            <g>
                                <path
                                    d="M 1392 444.5 L 1412 444.5 L 1412 730 L 389 730 L 389 416.3 L 419.9 416.26"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 426.65 416.25 L 417.65 420.77 L 419.9 416.26 L 417.64 411.77 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-301">
                            <g>
                                <rect
                                    x="1372"
                                    y="411"
                                    width="20"
                                    height="67"
                                    fill="none"
                                    stroke="none"
                                    pointer-events="all"
                                />
                            </g>
                            <g>
                                <g transform="translate(-0.5 -0.5)">
                                    <switch>
                                        <foreignObject
                                            pointer-events="none"
                                            width="100%"
                                            height="100%"
                                            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                            style={{ overflow: "visible", textAlign: "left" }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "unsafe center",
                                                    justifyContent: "unsafe center",
                                                    width: "18px",
                                                    height: "1px",
                                                    paddingTop: "445px",
                                                    marginLeft: "1373px",
                                                }}
                                            >
                                                <div
                                                    data-drawio-colors="color: rgb(0, 0, 0); "
                                                    style={{
                                                        boxSizing: "border-box",
                                                        fontSize: "0px",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            fontSize: "12px",
                                                            fontFamily: "Helvetica",
                                                            color: "rgb(0, 0, 0)",
                                                            lineHeight: "1.2",
                                                            pointerEvents: "all",
                                                            whiteSpace: "normal",
                                                            overflowWrap: "normal",
                                                        }}
                                                    >
                                                        <b>0</b>
                                                        <div>
                                                            <b>
                                                                <br />
                                                            </b>
                                                        </div>
                                                        <div>
                                                            <b>1</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </foreignObject>
                                        <text
                                            x="1382"
                                            y="448"
                                            fill="rgb(0, 0, 0)"
                                            font-family='"Helvetica"'
                                            font-size="12px"
                                            text-anchor="middle"
                                        >
                                            0...
                                        </text>
                                    </switch>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-302">
                            <g>
                                <path
                                    d="M 1329 356 L 1350.5 356 L 1350.5 427.8 L 1361.9 427.77"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 1368.65 427.76 L 1359.66 432.28 L 1361.9 427.77 L 1359.64 423.28 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-303">
                            <g>
                                <path
                                    d="M 1329 570 L 1350.5 570 L 1350.5 461.3 L 1361.9 461.27"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 1368.65 461.26 L 1359.66 465.78 L 1361.9 461.27 L 1359.64 456.78 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-319">
                            <g>
                                <path
                                    d="M 1329 62.5 L 1379.8 62.5 L 1379.83 407.1"
                                    fill="none"
                                    stroke={values.mem_wb.ctrlSig.MemToReg ? "#009900" : "#66ff66"}
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 1379.83 413.1 L 1375.83 405.1 L 1379.83 407.1 L 1383.83 405.1 Z"
                                    fill={values.mem_wb.ctrlSig.MemToReg ? "#009900" : "#66ff66"}
                                    stroke={values.mem_wb.ctrlSig.MemToReg ? "#009900" : "#66ff66"}
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-89">
                            <g />
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-91">
                                <g>
                                    <rect
                                        x="614"
                                        y="627"
                                        width="80"
                                        height="20"
                                        rx="6"
                                        ry="6"
                                        fill="#e51400"
                                        stroke="#b20000"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "78px",
                                                        height: "1px",
                                                        paddingTop: "637px",
                                                        marginLeft: "615px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: #ffffff; "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(255, 255, 255)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            <b>RD</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="654"
                                                y="641"
                                                fill="#ffffff"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                RD
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-321">
                            <g>
                                <path
                                    d="M 1329 640 L 1349 640 L 1349 710 L 410 710 L 410 435 L 420.32 434.99"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 427.07 434.98 L 418.07 439.49 L 420.32 434.99 L 418.06 430.49 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-329">
                            <g>
                                <path
                                    d="M 81.5 98.76 L 81.5 84 L 81.67 60"
                                    fill="none"
                                    stroke="#0000ff"
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 81.5 104.76 L 77.5 96.76 L 81.5 98.76 L 85.5 96.76 Z"
                                    fill="#0000ff"
                                    stroke="#0000ff"
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-338">
                            <g>
                                <path
                                    d="M 147.24 116.5 L 169 116.5 L 189 116.56"
                                    fill="none"
                                    stroke="#ff0000"
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 141.24 116.5 L 149.24 112.5 L 147.24 116.5 L 149.24 120.5 Z"
                                    fill="#ff0000"
                                    stroke="#ff0000"
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-331">
                            <g>
                                <path
                                    d="M 219 250 L 230.76 250"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 236.76 250 L 228.76 254 L 230.76 250 L 228.76 246 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="2"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-332">
                            <g>
                                <path
                                    d="M 168.9 221.3 L 159 221.3 L 139 221.64"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 175.65 221.3 L 166.65 225.8 L 168.9 221.3 L 166.65 216.8 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-336">
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "1px",
                                                        height: "1px",
                                                        paddingTop: "221px",
                                                        marginLeft: "132px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "11px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                whiteSpace: "nowrap",
                                                            }}
                                                        >
                                                            <b>
                                                                <font style={{ fontSize: "15px" }}>
                                                                    1
                                                                </font>
                                                            </b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="132"
                                                y="225"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="11px"
                                                text-anchor="middle"
                                            >
                                                1
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-330">
                            <g>
                                <path
                                    d="M 179 215 L 219 236 L 219 264 L 179 285 L 179 271 L 199 260.5 L 199 239.5 L 179 229 Z"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                            <g>
                                <g transform="translate(-0.5 -0.5)">
                                    <switch>
                                        <foreignObject
                                            pointer-events="none"
                                            width="100%"
                                            height="100%"
                                            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                            style={{ overflow: "visible", textAlign: "left" }}
                                        >
                                            <div
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "unsafe center",
                                                    justifyContent: "unsafe center",
                                                    width: "38px",
                                                    height: "1px",
                                                    paddingTop: "250px",
                                                    marginLeft: "180px",
                                                }}
                                            >
                                                <div
                                                    data-drawio-colors="color: rgb(0, 0, 0); "
                                                    style={{
                                                        boxSizing: "border-box",
                                                        fontSize: "0px",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            fontSize: "12px",
                                                            fontFamily: "Helvetica",
                                                            color: "rgb(0, 0, 0)",
                                                            lineHeight: "1.2",
                                                            pointerEvents: "all",
                                                            whiteSpace: "normal",
                                                            overflowWrap: "normal",
                                                        }}
                                                    >
                                                             +
                                                    </div>
                                                </div>
                                            </div>
                                        </foreignObject>
                                        <text
                                            x="199"
                                            y="254"
                                            fill="rgb(0, 0, 0)"
                                            font-family='"Helvetica"'
                                            font-size="12px"
                                            text-anchor="middle"
                                        >
                                                 +
                                        </text>
                                    </switch>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-334">
                            <g>
                                <path
                                    d="M 89 305 L 89 278.7 L 168.9 278.7"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 175.65 278.7 L 166.65 283.2 L 168.9 278.7 L 166.65 274.2 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-335">
                            <g>
                                <path
                                    d="M 18.9 485.78 L 9 485.8 L 9 390 L 160 390 L 159.03 283"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 25.65 485.76 L 16.66 490.28 L 18.9 485.78 L 16.63 481.28 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <ellipse
                                    cx="159"
                                    cy="280"
                                    rx="3"
                                    ry="3"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-339">
                            <g />
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-328">
                                <g>
                                    <rect
                                        x="74"
                                        y="100"
                                        width="60"
                                        height="30"
                                        fill="none"
                                        stroke="none"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "58px",
                                                        height: "1px",
                                                        paddingTop: "115px",
                                                        marginLeft: "75px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            <b>1        0</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="104"
                                                y="119"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                1        0
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-326">
                                <g>
                                    <path
                                        d="M 59 126 L 79 107 L 129 107 L 149 126 Z"
                                        fill="none"
                                        stroke="rgb(0, 0, 0)"
                                        strokeMiterlimit="10"
                                        transform="rotate(-180,104,116.5)"
                                        pointer-events="all"
                                    />
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-340">
                            <g />
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-341">
                                <g>
                                    <rect
                                        x="51"
                                        y="160"
                                        width="60"
                                        height="30"
                                        fill="none"
                                        stroke="none"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "58px",
                                                        height: "1px",
                                                        paddingTop: "175px",
                                                        marginLeft: "52px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            <b>1        0</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="81"
                                                y="179"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                1        0
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="1W33FOhmNmDA0zy-Gag4-342">
                                <g>
                                    <path
                                        d="M 36 186 L 56 167 L 106 167 L 126 186 Z"
                                        fill="none"
                                        stroke="rgb(0, 0, 0)"
                                        strokeMiterlimit="10"
                                        transform="rotate(-180,81,176.5)"
                                        pointer-events="all"
                                    />
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-343">
                            <g>
                                <path
                                    d="M 104 126 L 104 146.5 L 103.75 156.9"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 103.58 163.65 L 99.3 154.54 L 103.75 156.9 L 108.3 154.76 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-349">
                            <g>
                                <path
                                    d="M 81 186 L 81 245.5 L 9 245.5 L 9 340 L 18.9 340"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 25.65 340 L 16.65 344.5 L 18.9 340 L 16.65 335.5 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-350">
                            <g>
                                <path
                                    d="M 126.5 96.9 L 126.5 70 L 219 70 L 219 247"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 126.5 103.65 L 122 94.65 L 126.5 96.9 L 131 94.65 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                                <ellipse
                                    cx="219"
                                    cy="250"
                                    rx="3"
                                    ry="3"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                        <g data-cell-id="1W33FOhmNmDA0zy-Gag4-351">
                            <g>
                                <path
                                    d="M 279 10 L 359.5 10 L 359.05 188"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <ellipse
                                    cx="359.04"
                                    cy="191"
                                    rx="3"
                                    ry="3"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    pointer-events="all"
                                />
                            </g>
                            <g data-cell-id="iDGc5PNU-aZqenxwyxyE-5">
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "1px",
                                                        height: "1px",
                                                        paddingTop: "169px",
                                                        marginLeft: "413px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "11px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                whiteSpace: "nowrap",
                                                            }}
                                                        >
                                                            <font style={{ fontSize: "13px" }}>
                                                                <b>15:0</b>
                                                            </font>
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="413"
                                                y="172"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="11px"
                                                text-anchor="middle"
                                            >
                                                15:0
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="iDGc5PNU-aZqenxwyxyE-6">
                            <g />
                            <g data-cell-id="iDGc5PNU-aZqenxwyxyE-7">
                                <g>
                                    <rect
                                        x="199"
                                        y="10"
                                        width="80"
                                        height="30"
                                        fill="#fad9d5"
                                        stroke="#ae4132"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe flex-end",
                                                        justifyContent: "unsafe center",
                                                        width: "78px",
                                                        height: "1px",
                                                        paddingTop: "37px",
                                                        marginLeft: "200px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: rgb(0, 0, 0); "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(0, 0, 0)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            {values.jmpAddr}
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="239"
                                                y="37"
                                                fill="rgb(0, 0, 0)"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                plh_jmpAddr
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                            <g data-cell-id="iDGc5PNU-aZqenxwyxyE-9">
                                <g>
                                    <rect
                                        x="199"
                                        y="0"
                                        width="80"
                                        height="20"
                                        rx="6"
                                        ry="6"
                                        fill="#e51400"
                                        stroke="#b20000"
                                        pointer-events="all"
                                    />
                                </g>
                                <g>
                                    <g transform="translate(-0.5 -0.5)">
                                        <switch>
                                            <foreignObject
                                                pointer-events="none"
                                                width="100%"
                                                height="100%"
                                                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                                                style={{ overflow: "visible", textAlign: "left" }}
                                            >
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "unsafe center",
                                                        justifyContent: "unsafe center",
                                                        width: "78px",
                                                        height: "1px",
                                                        paddingTop: "10px",
                                                        marginLeft: "200px",
                                                    }}
                                                >
                                                    <div
                                                        data-drawio-colors="color: #ffffff; "
                                                        style={{
                                                            boxSizing: "border-box",
                                                            fontSize: "0px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                fontSize: "12px",
                                                                fontFamily: "Helvetica",
                                                                color: "rgb(255, 255, 255)",
                                                                lineHeight: "1.2",
                                                                pointerEvents: "all",
                                                                whiteSpace: "normal",
                                                                overflowWrap: "normal",
                                                            }}
                                                        >
                                                            <b>JumpAddr</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </foreignObject>
                                            <text
                                                x="239"
                                                y="14"
                                                fill="#ffffff"
                                                font-family='"Helvetica"'
                                                font-size="12px"
                                                text-anchor="middle"
                                            >
                                                JumpAddr
                                            </text>
                                        </switch>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g data-cell-id="iDGc5PNU-aZqenxwyxyE-11">
                            <g>
                                <path
                                    d="M 199 10 L 58.5 10 L 58.5 156.9"
                                    fill="none"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="stroke"
                                />
                                <path
                                    d="M 58.5 163.65 L 54 154.65 L 58.5 156.9 L 63 154.65 Z"
                                    fill="rgb(0, 0, 0)"
                                    stroke="rgb(0, 0, 0)"
                                    stroke-width="3"
                                    strokeMiterlimit="10"
                                    pointer-events="all"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
            <switch>
                <g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" />
                <a
                    transform="translate(0,-5)"
                    xlinkHref="https://www.drawio.com/doc/faq/svg-export-text-problems"
                    target="_blank"
                >
                    <text
                        text-anchor="middle"
                        font-size="10px"
                        x="50%"
                        y="100%"
                    >
                        Text is not SVG - cannot display
                    </text>
                </a>
            </switch>
        </svg>
    );
}

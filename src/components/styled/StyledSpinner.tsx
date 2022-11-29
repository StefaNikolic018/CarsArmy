import { memo } from 'react'
import styled from 'styled-components'

const StyledSpinner = styled.svg`
    padding-top: 20px;
    animation: rotate 1s linear infinite;
    margin: 40px;
    width: 50px;
    height: 50px;

    & .path {
        stroke: #5652bf;
        stroke-width: 5px;
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
        }
    }
`
export default memo(StyledSpinner)

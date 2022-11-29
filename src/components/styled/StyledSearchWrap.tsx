import { memo } from 'react'
import styled from 'styled-components'
import { device } from './device'

interface IStyledProps {
    loading: string | undefined
}

const initialSearch = `
position:absolute;
top: .8rem;
right: 1rem;
font-family: 'Font Awesome 5 Free' ;
font-size: 1.5rem ;
color: rgba(0,0,0, .5);
content: '\f002';
font-weight: 900 ;
`

const loadingSearch = `
position:absolute;
top: .9rem;
right: 1.1rem;
width: 1rem;
height: 1rem;
content: '';
border: 3px solid rgba(0,0,0, .5);
border-bottom: 3px solid transparent;
border-radius: 50%;
animation: spin 1s linear infinite;
`

const StyledSearchWrap = styled.div<IStyledProps>`
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    background-color: #f0f0f0;
    box-shadow: 5px 5px 16px 0px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    input {
        color: #434550;
        border-radius: 4px;
        background-color: hsl(0, 0%, 100%);
        border: 1px solid hsl(0, 0%, 80%);
        transition: all 0.3 ease-in-out;
        padding: 1rem;
        padding-right: 3rem;
        width: 100%;
        :focus {
            border: 1px solid #434343;
        }
        :focus-visible {
            outline: 0;
        }
        @media ${device.mobileL} {
            padding-right: 3rem;
        }
    }
    #searchIcon {
        /* padding-top: 1rem; */
        position: relative;
        transition: all 0.3 ease-in-out;
        ::after {
            ${(props) => (props.loading ? loadingSearch : initialSearch)}
        }
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        #iconClick {
            position: absolute;
            top: 0;
            right: 0.5rem;
            width: 3rem;
            height: 3rem;
            cursor: pointer;
            z-index: 1;
        }
    }
    .error-msg {
        width: 100%;
        color: #ce4c4c;
        padding-top: 10px;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
    }
    .invalid {
        border: 1px solid #e67676;
    }
`
export default memo(StyledSearchWrap)

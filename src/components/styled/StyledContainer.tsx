import { memo } from 'react'
import styled from 'styled-components'
import { device } from './device'

interface IStyledProps {
    bg?: string | undefined
}

const StyledContainer = styled.div<IStyledProps>`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding-inline: 10%;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2311%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient2312)'%3e%3c/rect%3e%3cpath d='M175.095%2c563.2C228.38%2c560.417%2c259.241%2c509.075%2c285.509%2c462.631C311.195%2c417.215%2c337.441%2c365.358%2c313.089%2c319.212C287.597%2c270.905%2c229.712%2c252.72%2c175.095%2c253.398C121.799%2c254.06%2c70.215%2c276.792%2c42.91%2c322.566C14.954%2c369.431%2c16.447%2c427.481%2c42.72%2c475.31C70.051%2c525.065%2c118.404%2c566.16%2c175.095%2c563.2' fill='rgba(67%2c 69%2c 80%2c 0.43)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1074.5161232100113 209.43402729794926L1010.8649363942976 366.54498693637964 1157.9431546718447 348.4860524867894z' fill='rgba(67%2c 69%2c 80%2c 0.43)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M589.136%2c349.173C604.802%2c348.889%2c618.703%2c340.731%2c627.36%2c327.67C637.193%2c312.835%2c645.275%2c293.732%2c635.916%2c278.593C626.807%2c263.858%2c606.445%2c265.141%2c589.136%2c265.839C573.498%2c266.47%2c556.934%2c268.959%2c548.466%2c282.121C539.384%2c296.237%2c539.728%2c314.75%2c548.433%2c329.101C556.842%2c342.964%2c572.925%2c349.467%2c589.136%2c349.173' fill='rgba(67%2c 69%2c 80%2c 0.43)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M73.85 8.64 a112.26 112.26 0 1 0 224.52 0 a112.26 112.26 0 1 0 -224.52 0z' fill='rgba(67%2c 69%2c 80%2c 0.43)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1413.6367701221027 324.4461969893489L1392.274143388328 223.9429400400835 1252.2005713313172 306.2385086153781z' fill='rgba(67%2c 69%2c 80%2c 0.43)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M426.337%2c301.488C468.138%2c300.575%2c502.446%2c269.779%2c520.583%2c232.107C536.505%2c199.035%2c526.189%2c162.406%2c508.88%2c130.038C490.184%2c95.077%2c465.979%2c56.43%2c426.337%2c55.869C386.132%2c55.3%2c359.379%2c92.61%2c339.649%2c127.645C320.406%2c161.815%2c307.179%2c201.291%2c324.679%2c236.386C343.925%2c274.982%2c383.219%2c302.43%2c426.337%2c301.488' fill='rgba(67%2c 69%2c 80%2c 0.43)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M789.556%2c501.628C823.387%2c498.649%2c847.423%2c471.479%2c863.036%2c441.318C877.201%2c413.954%2c880.233%2c382.113%2c865.405%2c355.103C850.006%2c327.054%2c821.543%2c308.308%2c789.556%2c307.473C756.082%2c306.6%2c725.167%2c323.14%2c706.526%2c350.957C685.25%2c382.705%2c671.183%2c423.115%2c689.628%2c456.587C708.528%2c490.884%2c750.547%2c505.063%2c789.556%2c501.628' fill='rgba(67%2c 69%2c 80%2c 0.43)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2311'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='50%25' y1='100%25' x2='50%25' y2='0%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2312'%3e%3cstop stop-color='rgba(161%2c 161%2c 161%2c 0.3)' offset='0.05'%3e%3c/stop%3e%3cstop stop-color='rgba(67%2c 69%2c 80%2c 0.47)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
    background-size: cover;
    .spinner {
        display: flex;
        height: 15rem;
        justify-content: center;
        align-items: center;
    }
    @media ${device.tablet} {
        padding-inline: 5%;
    }
`
export default memo(StyledContainer)

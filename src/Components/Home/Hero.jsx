import React from 'react'
import Navbar from '../Universal/Navbar'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { zoomIn } from '../Universal/Animation';

function Hero({ bg, display, padding }) {
    const [ref, inView] = useInView({
        triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes into view
    });
    
    return (
        <section className='w-full '>
            <section className={`w-full  min-h-min ${padding} ${bg}  flex flex-col  items-center gap-5 bg-[length:400px_800px] lg:bg-cover bg-[url("https://i.ibb.co/H77pzkt/heroimg.jpg")] `}>
                <header>
                    <img className='w-48 lg:w-64  ' src=" data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiB6b29tQW5kUGFuPSJtYWduaWZ5IiB2aWV3Qm94PSIwIDAgMzc1IDM3NC45OTk5OTEiIGhlaWdodD0iNTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2ZXJzaW9uPSIxLjAiPjxkZWZzPjxnLz48Y2xpcFBhdGggaWQ9IjU1ZWYxZTRkMTEiPjxwYXRoIGQ9Ik0gMTkzIDM3LjUgTCAyNDYgMzcuNSBMIDI0NiA3OSBMIDE5MyA3OSBaIE0gMTkzIDM3LjUgIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBmaWxsPSIjNmIzZTBhIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyLjg3ODU1OSwgMjkxLjQ5ODA4NikiPjxnPjxwYXRoIGQ9Ik0gMTMuMTA5Mzc1IDAgTCAxMC4zNDM3NSAtNS4yNSBMIDYuNjA5Mzc1IC01LjI1IEwgNi42MDkzNzUgMCBMIDEuODU5Mzc1IDAgTCAxLjg1OTM3NSAtMTguNjU2MjUgTCAxMC4yMDMxMjUgLTE4LjY1NjI1IEMgMTIuNjcxODc1IC0xOC42NTYyNSAxNC41NzgxMjUgLTE4LjA4NTkzOCAxNS45MjE4NzUgLTE2Ljk1MzEyNSBDIDE3LjI3MzQzOCAtMTUuODI4MTI1IDE3Ljk1MzEyNSAtMTQuMjIyNjU2IDE3Ljk1MzEyNSAtMTIuMTQwNjI1IEMgMTcuOTUzMTI1IC05LjI2NTYyNSAxNi44MjgxMjUgLTcuMjY5NTMxIDE0LjU3ODEyNSAtNi4xNTYyNSBMIDE4LjQ4NDM3NSAwIFogTSA2LjYwOTM3NSAtOC45ODQzNzUgTCAxMC4yMDMxMjUgLTguOTg0Mzc1IEMgMTEuMjM0Mzc1IC04Ljk4NDM3NSAxMi4wMzEyNSAtOS4yMzgyODEgMTIuNTkzNzUgLTkuNzUgQyAxMy4xNjQwNjIgLTEwLjI1NzgxMiAxMy40NTMxMjUgLTExLjAwMzkwNiAxMy40NTMxMjUgLTExLjk4NDM3NSBDIDEzLjQ1MzEyNSAtMTIuOTQxNDA2IDEzLjE2NDA2MiAtMTMuNjcxODc1IDEyLjU5Mzc1IC0xNC4xNzE4NzUgQyAxMi4wMzEyNSAtMTQuNjcxODc1IDExLjIzNDM3NSAtMTQuOTIxODc1IDEwLjIwMzEyNSAtMTQuOTIxODc1IEwgNi42MDkzNzUgLTE0LjkyMTg3NSBaIE0gNi42MDkzNzUgLTguOTg0Mzc1ICIvPjwvZz48L2c+PC9nPjxnIGZpbGw9IiM2YjNlMGEiIGZpbGwtb3BhY2l0eT0iMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDIuODI4NDUzLCAyOTEuNDk4MDg2KSI+PGc+PHBhdGggZD0iTSAxNC4yNSAtMy40Mzc1IEwgNi4wOTM3NSAtMy40Mzc1IEwgNC43MzQzNzUgMCBMIC0wLjE0MDYyNSAwIEwgNy45MDYyNSAtMTguNjU2MjUgTCAxMi43ODEyNSAtMTguNjU2MjUgTCAyMC42NDA2MjUgMCBMIDE1LjU3ODEyNSAwIFogTSAxMi44NzUgLTcuMDMxMjUgTCAxMC4yMDMxMjUgLTEzLjkzNzUgTCA3LjQ4NDM3NSAtNy4wMzEyNSBaIE0gMTIuODc1IC03LjAzMTI1ICIvPjwvZz48L2c+PC9nPjxnIGZpbGw9IiM2YjNlMGEiIGZpbGwtb3BhY2l0eT0iMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjQuMDAzNTc5LCAyOTEuNDk4MDg2KSI+PGc+PHBhdGggZD0iTSAyMi4zNDM3NSAwIEwgMTguMTcxODc1IDAgTCAxOC4xNDA2MjUgLTEyLjEyNSBMIDEzLjY3MTg3NSAtMS44NTkzNzUgTCAxMC41NzgxMjUgLTEuODU5Mzc1IEwgNi4wOTM3NSAtMTIuMTI1IEwgNi4wOTM3NSAwIEwgMS44NTkzNzUgMCBMIDEuODU5Mzc1IC0xOC42NzE4NzUgTCA3LjA2MjUgLTE4LjY3MTg3NSBMIDEyLjEyNSAtNy41NjI1IEwgMTcuMTg3NSAtMTguNjcxODc1IEwgMjIuMzQzNzUgLTE4LjY3MTg3NSBaIE0gMjIuMzQzNzUgMCAiLz48L2c+PC9nPjwvZz48ZyBmaWxsPSIjNmIzZTBhIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg4LjkwNzY2LCAyOTEuNDk4MDg2KSI+PGc+PHBhdGggZD0iTSAxNC4yNSAtMy40Mzc1IEwgNi4wOTM3NSAtMy40Mzc1IEwgNC43MzQzNzUgMCBMIC0wLjE0MDYyNSAwIEwgNy45MDYyNSAtMTguNjU2MjUgTCAxMi43ODEyNSAtMTguNjU2MjUgTCAyMC42NDA2MjUgMCBMIDE1LjU3ODEyNSAwIFogTSAxMi44NzUgLTcuMDMxMjUgTCAxMC4yMDMxMjUgLTEzLjkzNzUgTCA3LjQ4NDM3NSAtNy4wMzEyNSBaIE0gMTIuODc1IC03LjAzMTI1ICIvPjwvZz48L2c+PC9nPjxnIGZpbGw9IiM2YjNlMGEiIGZpbGwtb3BhY2l0eT0iMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEwLjA4Mjc4MiwgMjkxLjQ5ODA4NikiPjxnPjxwYXRoIGQ9Ik0gMTEuNDg0Mzc1IC02LjAxNTYyNSBMIDExLjQ4NDM3NSAwIEwgNi43NjU2MjUgMCBMIDYuNzY1NjI1IC01Ljg5MDYyNSBMIC0wLjE0MDYyNSAtMTguNjU2MjUgTCA0LjYwOTM3NSAtMTguNjU2MjUgTCA5LjEwOTM3NSAtMTAuNTE1NjI1IEwgMTMuNSAtMTguNjU2MjUgTCAxOC4yNSAtMTguNjU2MjUgWiBNIDExLjQ4NDM3NSAtNi4wMTU2MjUgIi8+PC9nPjwvZz48L2c+PGcgZmlsbD0iIzZiM2UwYSIgZmlsbC1vcGFjaXR5PSIxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjguODYwNzI2LCAyOTEuNDk4MDg2KSI+PGcvPjwvZz48L2c+PGcgZmlsbD0iIzZiM2UwYSIgZmlsbC1vcGFjaXR5PSIxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzUuNzA2MDE5LCAyOTEuNDk4MDg2KSI+PGc+PHBhdGggZD0iTSA5LjAzMTI1IC0xOC44NTkzNzUgQyAxMS44MjAzMTIgLTE4Ljg1OTM3NSAxNC4yNzM0MzggLTE4LjE2NDA2MiAxNi4zOTA2MjUgLTE2Ljc4MTI1IEwgMTQuNTkzNzUgLTEzLjA3ODEyNSBDIDEzLjYyNSAtMTMuNjQ4NDM4IDEyLjU3ODEyNSAtMTQuMTE3MTg4IDExLjQ1MzEyNSAtMTQuNDg0Mzc1IEMgMTAuMzM1OTM4IC0xNC44NDc2NTYgOS4zOTQ1MzEgLTE1LjAzMTI1IDguNjI1IC0xNS4wMzEyNSBDIDcuMjU3ODEyIC0xNS4wMzEyNSA2LjU3ODEyNSAtMTQuNTc4MTI1IDYuNTc4MTI1IC0xMy42NzE4NzUgQyA2LjU3ODEyNSAtMTMuMDc4MTI1IDYuOTE0MDYyIC0xMi42MDE1NjIgNy41OTM3NSAtMTIuMjUgQyA4LjI2OTUzMSAtMTEuODk0NTMxIDkuMDkzNzUgLTExLjU4NTkzOCAxMC4wNjI1IC0xMS4zMjgxMjUgQyAxMS4wMzEyNSAtMTEuMDc4MTI1IDExLjk5MjE4OCAtMTAuNzY5NTMxIDEyLjk1MzEyNSAtMTAuNDA2MjUgQyAxMy45MjE4NzUgLTEwLjAzOTA2MiAxNC43NDIxODggLTkuNDQ1MzEyIDE1LjQyMTg3NSAtOC42MjUgQyAxNi4wOTc2NTYgLTcuODEyNSAxNi40Mzc1IC02Ljc4NTE1NiAxNi40Mzc1IC01LjU0Njg3NSBDIDE2LjQzNzUgLTMuNzQyMTg4IDE1LjczNDM3NSAtMi4zNDM3NSAxNC4zMjgxMjUgLTEuMzQzNzUgQyAxMi45Mjk2ODggLTAuMzQzNzUgMTEuMTQ4NDM4IDAuMTU2MjUgOC45ODQzNzUgMC4xNTYyNSBDIDcuNDI5Njg4IDAuMTU2MjUgNS44OTg0MzggLTAuMTA5Mzc1IDQuMzkwNjI1IC0wLjY0MDYyNSBDIDIuODc4OTA2IC0xLjE3MTg3NSAxLjU2NjQwNiAtMS44OTg0MzggMC40NTMxMjUgLTIuODI4MTI1IEwgMi4yOTY4NzUgLTYuNDY4NzUgQyAzLjIzNDM3NSAtNS42NTYyNSA0LjM0Mzc1IC00Ljk4NDM3NSA1LjYyNSAtNC40NTMxMjUgQyA2LjkwNjI1IC0zLjkyOTY4OCA4LjAzOTA2MiAtMy42NzE4NzUgOS4wMzEyNSAtMy42NzE4NzUgQyA5Ljc4OTA2MiAtMy42NzE4NzUgMTAuMzgyODEyIC0zLjgwNDY4OCAxMC44MTI1IC00LjA3ODEyNSBDIDExLjIzODI4MSAtNC4zNTkzNzUgMTEuNDUzMTI1IC00Ljc2NTYyNSAxMS40NTMxMjUgLTUuMjk2ODc1IEMgMTEuNDUzMTI1IC01LjgxNjQwNiAxMS4yMDcwMzEgLTYuMjUgMTAuNzE4NzUgLTYuNTkzNzUgQyAxMC4yMjY1NjIgLTYuOTM3NSA5LjYxNzE4OCAtNy4xOTE0MDYgOC44OTA2MjUgLTcuMzU5Mzc1IEMgOC4xNzE4NzUgLTcuNTM1MTU2IDcuMzgyODEyIC03Ljc2NTYyNSA2LjUzMTI1IC04LjA0Njg3NSBDIDUuNjc1NzgxIC04LjMyODEyNSA0Ljg4MjgxMiAtOC42MzI4MTIgNC4xNTYyNSAtOC45Njg3NSBDIDMuNDI1NzgxIC05LjMxMjUgMi44MTY0MDYgLTkuODQ3NjU2IDIuMzI4MTI1IC0xMC41NzgxMjUgQyAxLjgzNTkzOCAtMTEuMzE2NDA2IDEuNTkzNzUgLTEyLjIwMzEyNSAxLjU5Mzc1IC0xMy4yMzQzNzUgQyAxLjU5Mzc1IC0xNC45NDE0MDYgMi4yNjk1MzEgLTE2LjMwNDY4OCAzLjYyNSAtMTcuMzI4MTI1IEMgNC45ODgyODEgLTE4LjM0NzY1NiA2Ljc4OTA2MiAtMTguODU5Mzc1IDkuMDMxMjUgLTE4Ljg1OTM3NSBaIE0gOS4wMzEyNSAtMTguODU5Mzc1ICIvPjwvZz48L2c+PC9nPjxnIGZpbGw9IiM2YjNlMGEiIGZpbGwtb3BhY2l0eT0iMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUzLjUyNTA4MywgMjkxLjQ5ODA4NikiPjxnPjxwYXRoIGQ9Ik0gMTYuNDY4NzUgLTE0LjkyMTg3NSBMIDYuNjA5Mzc1IC0xNC45MjE4NzUgTCA2LjYwOTM3NSAtMTEuMjE4NzUgTCAxNS41IC0xMS4yMTg3NSBMIDE1LjUgLTcuNDg0Mzc1IEwgNi42MDkzNzUgLTcuNDg0Mzc1IEwgNi42MDkzNzUgLTMuNzM0Mzc1IEwgMTYuNzUgLTMuNzM0Mzc1IEwgMTYuNzUgMCBMIDEuODU5Mzc1IDAgTCAxLjg1OTM3NSAtMTguNjU2MjUgTCAxNi40Njg3NSAtMTguNjU2MjUgWiBNIDE2LjQ2ODc1IC0xNC45MjE4NzUgIi8+PC9nPjwvZz48L2c+PGcgZmlsbD0iIzZiM2UwYSIgZmlsbC1vcGFjaXR5PSIxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzIuMTQzMjE3LCAyOTEuNDk4MDg2KSI+PGc+PHBhdGggZD0iTSAxNi40Njg3NSAtMTQuOTIxODc1IEwgNi42MDkzNzUgLTE0LjkyMTg3NSBMIDYuNjA5Mzc1IC0xMS4yMTg3NSBMIDE1LjUgLTExLjIxODc1IEwgMTUuNSAtNy40ODQzNzUgTCA2LjYwOTM3NSAtNy40ODQzNzUgTCA2LjYwOTM3NSAtMy43MzQzNzUgTCAxNi43NSAtMy43MzQzNzUgTCAxNi43NSAwIEwgMS44NTkzNzUgMCBMIDEuODU5Mzc1IC0xOC42NTYyNSBMIDE2LjQ2ODc1IC0xOC42NTYyNSBaIE0gMTYuNDY4NzUgLTE0LjkyMTg3NSAiLz48L2c+PC9nPjwvZz48ZyBmaWxsPSIjNmIzZTBhIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5MC43NjEzNTEsIDI5MS40OTgwODYpIj48Zz48cGF0aCBkPSJNIDEuODU5Mzc1IC0xOC42NTYyNSBMIDkuODkwNjI1IC0xOC42NTYyNSBDIDEyLjgxNjQwNiAtMTguNjU2MjUgMTUuMTk1MzEyIC0xNy43ODkwNjIgMTcuMDMxMjUgLTE2LjA2MjUgQyAxOC44NzUgLTE0LjM0Mzc1IDE5Ljc5Njg3NSAtMTIuMDk3NjU2IDE5Ljc5Njg3NSAtOS4zMjgxMjUgQyAxOS43OTY4NzUgLTYuNTY2NDA2IDE4Ljg2MzI4MSAtNC4zMjAzMTIgMTcgLTIuNTkzNzUgQyAxNS4xMzI4MTIgLTAuODYzMjgxIDEyLjcwMzEyNSAwIDkuNzAzMTI1IDAgTCAxLjg1OTM3NSAwIFogTSA2LjYwOTM3NSAtMTQuODU5Mzc1IEwgNi42MDkzNzUgLTMuNzgxMjUgTCA5Ljk4NDM3NSAtMy43ODEyNSBDIDExLjQ0MTQwNiAtMy43ODEyNSAxMi42MzI4MTIgLTQuMjg5MDYyIDEzLjU2MjUgLTUuMzEyNSBDIDE0LjUgLTYuMzMyMDMxIDE0Ljk2ODc1IC03LjY2MDE1NiAxNC45Njg3NSAtOS4yOTY4NzUgQyAxNC45Njg3NSAtMTAuOTI5Njg4IDE0LjQ3NjU2MiAtMTIuMjY1NjI1IDEzLjUgLTEzLjI5Njg3NSBDIDEyLjUzMTI1IC0xNC4zMzU5MzggMTEuMjg5MDYyIC0xNC44NTkzNzUgOS43ODEyNSAtMTQuODU5Mzc1IFogTSA2LjYwOTM3NSAtMTQuODU5Mzc1ICIvPjwvZz48L2c+PC9nPjxnIGZpbGw9IiM2YjNlMGEiIGZpbGwtb3BhY2l0eT0iMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjExLjg1NjU2NywgMjkxLjQ5ODA4NikiPjxnPjxwYXRoIGQ9Ik0gOS4wMzEyNSAtMTguODU5Mzc1IEMgMTEuODIwMzEyIC0xOC44NTkzNzUgMTQuMjczNDM4IC0xOC4xNjQwNjIgMTYuMzkwNjI1IC0xNi43ODEyNSBMIDE0LjU5Mzc1IC0xMy4wNzgxMjUgQyAxMy42MjUgLTEzLjY0ODQzOCAxMi41NzgxMjUgLTE0LjExNzE4OCAxMS40NTMxMjUgLTE0LjQ4NDM3NSBDIDEwLjMzNTkzOCAtMTQuODQ3NjU2IDkuMzk0NTMxIC0xNS4wMzEyNSA4LjYyNSAtMTUuMDMxMjUgQyA3LjI1NzgxMiAtMTUuMDMxMjUgNi41NzgxMjUgLTE0LjU3ODEyNSA2LjU3ODEyNSAtMTMuNjcxODc1IEMgNi41NzgxMjUgLTEzLjA3ODEyNSA2LjkxNDA2MiAtMTIuNjAxNTYyIDcuNTkzNzUgLTEyLjI1IEMgOC4yNjk1MzEgLTExLjg5NDUzMSA5LjA5Mzc1IC0xMS41ODU5MzggMTAuMDYyNSAtMTEuMzI4MTI1IEMgMTEuMDMxMjUgLTExLjA3ODEyNSAxMS45OTIxODggLTEwLjc2OTUzMSAxMi45NTMxMjUgLTEwLjQwNjI1IEMgMTMuOTIxODc1IC0xMC4wMzkwNjIgMTQuNzQyMTg4IC05LjQ0NTMxMiAxNS40MjE4NzUgLTguNjI1IEMgMTYuMDk3NjU2IC03LjgxMjUgMTYuNDM3NSAtNi43ODUxNTYgMTYuNDM3NSAtNS41NDY4NzUgQyAxNi40Mzc1IC0zLjc0MjE4OCAxNS43MzQzNzUgLTIuMzQzNzUgMTQuMzI4MTI1IC0xLjM0Mzc1IEMgMTIuOTI5Njg4IC0wLjM0Mzc1IDExLjE0ODQzOCAwLjE1NjI1IDguOTg0Mzc1IDAuMTU2MjUgQyA3LjQyOTY4OCAwLjE1NjI1IDUuODk4NDM4IC0wLjEwOTM3NSA0LjM5MDYyNSAtMC42NDA2MjUgQyAyLjg3ODkwNiAtMS4xNzE4NzUgMS41NjY0MDYgLTEuODk4NDM4IDAuNDUzMTI1IC0yLjgyODEyNSBMIDIuMjk2ODc1IC02LjQ2ODc1IEMgMy4yMzQzNzUgLTUuNjU2MjUgNC4zNDM3NSAtNC45ODQzNzUgNS42MjUgLTQuNDUzMTI1IEMgNi45MDYyNSAtMy45Mjk2ODggOC4wMzkwNjIgLTMuNjcxODc1IDkuMDMxMjUgLTMuNjcxODc1IEMgOS43ODkwNjIgLTMuNjcxODc1IDEwLjM4MjgxMiAtMy44MDQ2ODggMTAuODEyNSAtNC4wNzgxMjUgQyAxMS4yMzgyODEgLTQuMzU5Mzc1IDExLjQ1MzEyNSAtNC43NjU2MjUgMTEuNDUzMTI1IC01LjI5Njg3NSBDIDExLjQ1MzEyNSAtNS44MTY0MDYgMTEuMjA3MDMxIC02LjI1IDEwLjcxODc1IC02LjU5Mzc1IEMgMTAuMjI2NTYyIC02LjkzNzUgOS42MTcxODggLTcuMTkxNDA2IDguODkwNjI1IC03LjM1OTM3NSBDIDguMTcxODc1IC03LjUzNTE1NiA3LjM4MjgxMiAtNy43NjU2MjUgNi41MzEyNSAtOC4wNDY4NzUgQyA1LjY3NTc4MSAtOC4zMjgxMjUgNC44ODI4MTIgLTguNjMyODEyIDQuMTU2MjUgLTguOTY4NzUgQyAzLjQyNTc4MSAtOS4zMTI1IDIuODE2NDA2IC05Ljg0NzY1NiAyLjMyODEyNSAtMTAuNTc4MTI1IEMgMS44MzU5MzggLTExLjMxNjQwNiAxLjU5Mzc1IC0xMi4yMDMxMjUgMS41OTM3NSAtMTMuMjM0Mzc1IEMgMS41OTM3NSAtMTQuOTQxNDA2IDIuMjY5NTMxIC0xNi4zMDQ2ODggMy42MjUgLTE3LjMyODEyNSBDIDQuOTg4MjgxIC0xOC4zNDc2NTYgNi43ODkwNjIgLTE4Ljg1OTM3NSA5LjAzMTI1IC0xOC44NTkzNzUgWiBNIDkuMDMxMjUgLTE4Ljg1OTM3NSAiLz48L2c+PC9nPjwvZz48ZyBmaWxsPSIjNmIzZTBhIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyOS42NzU2MzEsIDI5MS40OTgwODYpIj48Zy8+PC9nPjwvZz48ZyBmaWxsPSIjNmIzZTBhIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzNi41MjA5MjQsIDI5MS40OTgwODYpIj48Zz48cGF0aCBkPSJNIDEuODU5Mzc1IC0xOC42NTYyNSBMIDkuOTg0Mzc1IC0xOC42NTYyNSBDIDEyLjM2NzE4OCAtMTguNjU2MjUgMTQuMjE4NzUgLTE4LjA4NTkzOCAxNS41MzEyNSAtMTYuOTUzMTI1IEMgMTYuODQzNzUgLTE1LjgyODEyNSAxNy41IC0xNC4yMjI2NTYgMTcuNSAtMTIuMTQwNjI1IEMgMTcuNSAtOS45NjA5MzggMTYuODQzNzUgLTguMjY5NTMxIDE1LjUzMTI1IC03LjA2MjUgQyAxNC4yMTg3NSAtNS44NTE1NjIgMTIuMzY3MTg4IC01LjI1IDkuOTg0Mzc1IC01LjI1IEwgNi42MDkzNzUgLTUuMjUgTCA2LjYwOTM3NSAwIEwgMS44NTkzNzUgMCBaIE0gNi42MDkzNzUgLTE0LjkyMTg3NSBMIDYuNjA5Mzc1IC04Ljk4NDM3NSBMIDkuNzUgLTguOTg0Mzc1IEMgMTAuODAwNzgxIC04Ljk4NDM3NSAxMS42MDkzNzUgLTkuMjM4MjgxIDEyLjE3MTg3NSAtOS43NSBDIDEyLjc0MjE4OCAtMTAuMjU3ODEyIDEzLjAzMTI1IC0xMS4wMDM5MDYgMTMuMDMxMjUgLTExLjk4NDM3NSBDIDEzLjAzMTI1IC0xMi45NDE0MDYgMTIuNzQyMTg4IC0xMy42NzE4NzUgMTIuMTcxODc1IC0xNC4xNzE4NzUgQyAxMS42MDkzNzUgLTE0LjY3MTg3NSAxMC44MDA3ODEgLTE0LjkyMTg3NSA5Ljc1IC0xNC45MjE4NzUgWiBNIDYuNjA5Mzc1IC0xNC45MjE4NzUgIi8+PC9nPjwvZz48L2c+PGcgZmlsbD0iIzZiM2UwYSIgZmlsbC1vcGFjaXR5PSIxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTUuMjk4ODY5LCAyOTEuNDk4MDg2KSI+PGc+PHBhdGggZD0iTSAxMi4xMjUgMCBMIDcuMjE4NzUgMCBMIC0wLjAzMTI1IC0xOC42NTYyNSBMIDUuMDMxMjUgLTE4LjY1NjI1IEwgOS43OTY4NzUgLTQuOTIxODc1IEwgMTQuNTc4MTI1IC0xOC42NTYyNSBMIDE5LjQ1MzEyNSAtMTguNjU2MjUgWiBNIDEyLjEyNSAwICIvPjwvZz48L2c+PC9nPjxnIGZpbGw9IiM2YjNlMGEiIGZpbGwtb3BhY2l0eT0iMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjc1LjM4MTk1LCAyOTEuNDk4MDg2KSI+PGc+PHBhdGggZD0iTSAxNi4xMjUgLTE0Ljg0Mzc1IEwgMTAuNSAtMTQuODQzNzUgTCAxMC41IDAgTCA1Ljc1IDAgTCA1Ljc1IC0xNC44NDM3NSBMIDAuMTg3NSAtMTQuODQzNzUgTCAwLjE4NzUgLTE4LjY3MTg3NSBMIDE2LjEyNSAtMTguNjcxODc1IFogTSAxNi4xMjUgLTE0Ljg0Mzc1ICIvPjwvZz48L2c+PC9nPjxnIGZpbGw9IiM2YjNlMGEiIGZpbGwtb3BhY2l0eT0iMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjkyLjMyMjA1NCwgMjkxLjQ5ODA4NikiPjxnLz48L2c+PC9nPjxnIGZpbGw9IiM2YjNlMGEiIGZpbGwtb3BhY2l0eT0iMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjk5LjE2NzM2MSwgMjkxLjQ5ODA4NikiPjxnPjxwYXRoIGQ9Ik0gNi42MDkzNzUgLTMuOTY4NzUgTCAxNC41MTU2MjUgLTMuOTY4NzUgTCAxNC41MTU2MjUgMCBMIDEuODU5Mzc1IDAgTCAxLjg1OTM3NSAtMTguNjU2MjUgTCA2LjYwOTM3NSAtMTguNjU2MjUgWiBNIDYuNjA5Mzc1IC0zLjk2ODc1ICIvPjwvZz48L2c+PC9nPjxnIGZpbGw9IiM2YjNlMGEiIGZpbGwtb3BhY2l0eT0iMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzE0Ljc0OTA1OCwgMjkxLjQ5ODA4NikiPjxnPjxwYXRoIGQ9Ik0gMTYuMTI1IC0xNC44NDM3NSBMIDEwLjUgLTE0Ljg0Mzc1IEwgMTAuNSAwIEwgNS43NSAwIEwgNS43NSAtMTQuODQzNzUgTCAwLjE4NzUgLTE0Ljg0Mzc1IEwgMC4xODc1IC0xOC42NzE4NzUgTCAxNi4xMjUgLTE4LjY3MTg3NSBaIE0gMTYuMTI1IC0xNC44NDM3NSAiLz48L2c+PC9nPjwvZz48ZyBmaWxsPSIjNmIzZTBhIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMzMS42ODkxNjEsIDI5MS40OTgwODYpIj48Zz48cGF0aCBkPSJNIDEuODU5Mzc1IC0xOC42NTYyNSBMIDkuODkwNjI1IC0xOC42NTYyNSBDIDEyLjgxNjQwNiAtMTguNjU2MjUgMTUuMTk1MzEyIC0xNy43ODkwNjIgMTcuMDMxMjUgLTE2LjA2MjUgQyAxOC44NzUgLTE0LjM0Mzc1IDE5Ljc5Njg3NSAtMTIuMDk3NjU2IDE5Ljc5Njg3NSAtOS4zMjgxMjUgQyAxOS43OTY4NzUgLTYuNTY2NDA2IDE4Ljg2MzI4MSAtNC4zMjAzMTIgMTcgLTIuNTkzNzUgQyAxNS4xMzI4MTIgLTAuODYzMjgxIDEyLjcwMzEyNSAwIDkuNzAzMTI1IDAgTCAxLjg1OTM3NSAwIFogTSA2LjYwOTM3NSAtMTQuODU5Mzc1IEwgNi42MDkzNzUgLTMuNzgxMjUgTCA5Ljk4NDM3NSAtMy43ODEyNSBDIDExLjQ0MTQwNiAtMy43ODEyNSAxMi42MzI4MTIgLTQuMjg5MDYyIDEzLjU2MjUgLTUuMzEyNSBDIDE0LjUgLTYuMzMyMDMxIDE0Ljk2ODc1IC03LjY2MDE1NiAxNC45Njg3NSAtOS4yOTY4NzUgQyAxNC45Njg3NSAtMTAuOTI5Njg4IDE0LjQ3NjU2MiAtMTIuMjY1NjI1IDEzLjUgLTEzLjI5Njg3NSBDIDEyLjUzMTI1IC0xNC4zMzU5MzggMTEuMjg5MDYyIC0xNC44NTkzNzUgOS43ODEyNSAtMTQuODU5Mzc1IFogTSA2LjYwOTM3NSAtMTQuODU5Mzc1ICIvPjwvZz48L2c+PC9nPjxnIGZpbGw9IiMzMzQ0M2MiIGZpbGwtb3BhY2l0eT0iMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzIuNjYwNDUyLCAzMTQuOTEzNzQ4KSI+PGc+PHBhdGggZD0iTSAxLjAxNTYyNSAwIEwgMS4wMTU2MjUgLTExLjczNDM3NSBMIDUuNjQwNjI1IC0xMS43MzQzNzUgQyA2Ljk3MjY1NiAtMTEuNzM0Mzc1IDguMDAzOTA2IC0xMS4zODI4MTIgOC43MzQzNzUgLTEwLjY4NzUgQyA5LjQ3MjY1NiAtOS45ODgyODEgOS44NDM3NSAtOS4wNTQ2ODggOS44NDM3NSAtNy44OTA2MjUgQyA5Ljg0Mzc1IC03LjA4NTkzOCA5LjY2NDA2MiAtNi4zOTg0MzggOS4zMTI1IC01LjgyODEyNSBDIDguOTU3MDMxIC01LjI2NTYyNSA4LjQ0NTMxMiAtNC44NDM3NSA3Ljc4MTI1IC00LjU2MjUgTCAxMC4yNjU2MjUgMCBMIDcuNTMxMjUgMCBMIDUuMzEyNSAtNC4xNTYyNSBMIDMuNSAtNC4xNTYyNSBMIDMuNSAwIFogTSAzLjUgLTYuMTU2MjUgTCA1LjE4NzUgLTYuMTU2MjUgQyA2LjU5Mzc1IC02LjE1NjI1IDcuMjk2ODc1IC02LjczNDM3NSA3LjI5Njg3NSAtNy44OTA2MjUgQyA3LjI5Njg3NSAtOS4wOTc2NTYgNi41ODU5MzggLTkuNzAzMTI1IDUuMTcxODc1IC05LjcwMzEyNSBMIDMuNSAtOS43MDMxMjUgWiBNIDMuNSAtNi4xNTYyNSAiLz48L2c+PC9nPjwvZz48ZyBmaWxsPSIjMzM0NDNjIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg0Ljg1OTIwNSwgMzE0LjkxMzc0OCkiPjxnPjxwYXRoIGQ9Ik0gMy4wNDY4NzUgMCBMIDAuMzkwNjI1IDAgTCA0LjQzNzUgLTExLjczNDM3NSBMIDcuNjI1IC0xMS43MzQzNzUgTCAxMS42NzE4NzUgMCBMIDkuMDE1NjI1IDAgTCA4LjE0MDYyNSAtMi42NzE4NzUgTCAzLjkwNjI1IC0yLjY3MTg3NSBaIE0gNC41NDY4NzUgLTQuNjA5Mzc1IEwgNy41MTU2MjUgLTQuNjA5Mzc1IEwgNi4wNzgxMjUgLTkuMDQ2ODc1IEwgNS45ODQzNzUgLTkuMDQ2ODc1IFogTSA0LjU0Njg3NSAtNC42MDkzNzUgIi8+PC9nPjwvZz48L2c+PGcgZmlsbD0iIzMzNDQzYyIgZmlsbC1vcGFjaXR5PSIxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5OC41MzU4MTQsIDMxNC45MTM3NDgpIj48Zz48cGF0aCBkPSJNIDEuMDE1NjI1IC0xMS43MzQzNzUgTCA0LjA3ODEyNSAtMTEuNzM0Mzc1IEwgNy4zMTI1IC0zLjg0Mzc1IEwgNy40Mzc1IC0zLjg0Mzc1IEwgMTAuNjcxODc1IC0xMS43MzQzNzUgTCAxMy43MzQzNzUgLTExLjczNDM3NSBMIDEzLjczNDM3NSAwIEwgMTEuMzI4MTI1IDAgTCAxMS4zMjgxMjUgLTcuNjQwNjI1IEwgMTEuMjM0Mzc1IC03LjY0MDYyNSBMIDguMTg3NSAtMC4wNjI1IEwgNi41NjI1IC0wLjA2MjUgTCAzLjUxNTYyNSAtNy42NTYyNSBMIDMuNDIxODc1IC03LjY1NjI1IEwgMy40MjE4NzUgMCBMIDEuMDE1NjI1IDAgWiBNIDEuMDE1NjI1IC0xMS43MzQzNzUgIi8+PC9nPjwvZz48L2c+PGcgZmlsbD0iIzMzNDQzYyIgZmlsbC1vcGFjaXR5PSIxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTUuMDUzNTk5LCAzMTQuOTEzNzQ4KSI+PGc+PHBhdGggZD0iTSAzLjA0Njg3NSAwIEwgMC4zOTA2MjUgMCBMIDQuNDM3NSAtMTEuNzM0Mzc1IEwgNy42MjUgLTExLjczNDM3NSBMIDExLjY3MTg3NSAwIEwgOS4wMTU2MjUgMCBMIDguMTQwNjI1IC0yLjY3MTg3NSBMIDMuOTA2MjUgLTIuNjcxODc1IFogTSA0LjU0Njg3NSAtNC42MDkzNzUgTCA3LjUxNTYyNSAtNC42MDkzNzUgTCA2LjA3ODEyNSAtOS4wNDY4NzUgTCA1Ljk4NDM3NSAtOS4wNDY4NzUgWiBNIDQuNTQ2ODc1IC00LjYwOTM3NSAiLz48L2c+PC9nPjwvZz48ZyBmaWxsPSIjMzM0NDNjIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyOC43MzAyMSwgMzE0LjkxMzc0OCkiPjxnPjxwYXRoIGQ9Ik0gMC4zMjgxMjUgLTExLjczNDM3NSBMIDMuMTA5Mzc1IC0xMS43MzQzNzUgTCA1Ljc4MTI1IC02LjY3MTg3NSBMIDUuODkwNjI1IC02LjY3MTg3NSBMIDguNTc4MTI1IC0xMS43MzQzNzUgTCAxMS4zNDM3NSAtMTEuNzM0Mzc1IEwgNy4wNzgxMjUgLTQuMTQwNjI1IEwgNy4wNzgxMjUgMCBMIDQuNjA5Mzc1IDAgTCA0LjYwOTM3NSAtNC4xNDA2MjUgWiBNIDAuMzI4MTI1IC0xMS43MzQzNzUgIi8+PC9nPjwvZz48L2c+PGcgZmlsbD0iIzMzNDQzYyIgZmlsbC1vcGFjaXR5PSIxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDIuMDI4NzcyLCAzMTQuOTEzNzQ4KSI+PGcvPjwvZz48L2c+PGcgZmlsbD0iIzMzNDQzYyIgZmlsbC1vcGFjaXR5PSIxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDcuMzgyMzUyLCAzMTQuOTEzNzQ4KSI+PGc+PHBhdGggZD0iTSAwLjg5MDYyNSAwIEwgMC44OTA2MjUgLTEuNDY4NzUgTCA2Ljc1IC05LjY4NzUgTCAwLjg3NSAtOS42ODc1IEwgMC44NzUgLTExLjczNDM3NSBMIDkuODU5Mzc1IC0xMS43MzQzNzUgTCA5Ljg1OTM3NSAtMTAuMjUgTCA0IC0yLjA0Njg3NSBMIDkuODc1IC0yLjA0Njg3NSBMIDkuODc1IDAgWiBNIDAuODkwNjI1IDAgIi8+PC9nPjwvZz48L2c+PGcgZmlsbD0iIzMzNDQzYyIgZmlsbC1vcGFjaXR5PSIxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTkuNzUyOTUxLCAzMTQuOTEzNzQ4KSI+PGc+PHBhdGggZD0iTSAzLjA0Njg3NSAwIEwgMC4zOTA2MjUgMCBMIDQuNDM3NSAtMTEuNzM0Mzc1IEwgNy42MjUgLTExLjczNDM3NSBMIDExLjY3MTg3NSAwIEwgOS4wMTU2MjUgMCBMIDguMTQwNjI1IC0yLjY3MTg3NSBMIDMuOTA2MjUgLTIuNjcxODc1IFogTSA0LjU0Njg3NSAtNC42MDkzNzUgTCA3LjUxNTYyNSAtNC42MDkzNzUgTCA2LjA3ODEyNSAtOS4wNDY4NzUgTCA1Ljk4NDM3NSAtOS4wNDY4NzUgWiBNIDQuNTQ2ODc1IC00LjYwOTM3NSAiLz48L2c+PC9nPjwvZz48ZyBmaWxsPSIjMzM0NDNjIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3My40Mjk1NTcsIDMxNC45MTM3NDgpIj48Zz48cGF0aCBkPSJNIDEuMDE1NjI1IDAgTCAxLjAxNTYyNSAtMTEuNzM0Mzc1IEwgNS42NDA2MjUgLTExLjczNDM3NSBDIDYuOTcyNjU2IC0xMS43MzQzNzUgOC4wMDM5MDYgLTExLjM4MjgxMiA4LjczNDM3NSAtMTAuNjg3NSBDIDkuNDcyNjU2IC05Ljk4ODI4MSA5Ljg0Mzc1IC05LjA1NDY4OCA5Ljg0Mzc1IC03Ljg5MDYyNSBDIDkuODQzNzUgLTcuMDg1OTM4IDkuNjY0MDYyIC02LjM5ODQzOCA5LjMxMjUgLTUuODI4MTI1IEMgOC45NTcwMzEgLTUuMjY1NjI1IDguNDQ1MzEyIC00Ljg0Mzc1IDcuNzgxMjUgLTQuNTYyNSBMIDEwLjI2NTYyNSAwIEwgNy41MzEyNSAwIEwgNS4zMTI1IC00LjE1NjI1IEwgMy41IC00LjE1NjI1IEwgMy41IDAgWiBNIDMuNSAtNi4xNTYyNSBMIDUuMTg3NSAtNi4xNTYyNSBDIDYuNTkzNzUgLTYuMTU2MjUgNy4yOTY4NzUgLTYuNzM0Mzc1IDcuMjk2ODc1IC03Ljg5MDYyNSBDIDcuMjk2ODc1IC05LjA5NzY1NiA2LjU4NTkzOCAtOS43MDMxMjUgNS4xNzE4NzUgLTkuNzAzMTI1IEwgMy41IC05LjcwMzEyNSBaIE0gMy41IC02LjE1NjI1ICIvPjwvZz48L2c+PC9nPjxnIGZpbGw9IiMzMzQ0M2MiIGZpbGwtb3BhY2l0eT0iMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg1LjYyODMwNSwgMzE0LjkxMzc0OCkiPjxnPjxwYXRoIGQ9Ik0gMy4wNDY4NzUgMCBMIDAuMzkwNjI1IDAgTCA0LjQzNzUgLTExLjczNDM3NSBMIDcuNjI1IC0xMS43MzQzNzUgTCAxMS42NzE4NzUgMCBMIDkuMDE1NjI1IDAgTCA4LjE0MDYyNSAtMi42NzE4NzUgTCAzLjkwNjI1IC0yLjY3MTg3NSBaIE0gNC41NDY4NzUgLTQuNjA5Mzc1IEwgNy41MTU2MjUgLTQuNjA5Mzc1IEwgNi4wNzgxMjUgLTkuMDQ2ODc1IEwgNS45ODQzNzUgLTkuMDQ2ODc1IFogTSA0LjU0Njg3NSAtNC42MDkzNzUgIi8+PC9nPjwvZz48L2c+PGcgZmlsbD0iIzMzNDQzYyIgZmlsbC1vcGFjaXR5PSIxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOTkuMzA0OTExLCAzMTQuOTEzNzQ4KSI+PGc+PHBhdGggZD0iTSAzLjUgLTExLjczNDM3NSBMIDMuNSAwIEwgMS4wMTU2MjUgMCBMIDEuMDE1NjI1IC0xMS43MzQzNzUgWiBNIDMuNSAtMTEuNzM0Mzc1ICIvPjwvZz48L2c+PC9nPjxnIGZpbGw9IiMzMzQ0M2MiIGZpbGwtb3BhY2l0eT0iMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjA1LjQ0MzI1NywgMzE0LjkxMzc0OCkiPjxnLz48L2c+PC9nPjxnIGZpbGw9IiMzMzQ0M2MiIGZpbGwtb3BhY2l0eT0iMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEwLjc5NjgzMiwgMzE0LjkxMzc0OCkiPjxnPjxwYXRoIGQ9Ik0gNy4zNzUgLTguMzU5Mzc1IEMgNy4zMzIwMzEgLTguODE2NDA2IDcuMTMyODEyIC05LjE3MTg3NSA2Ljc4MTI1IC05LjQyMTg3NSBDIDYuNDM3NSAtOS42Nzk2ODggNS45Njg3NSAtOS44MTI1IDUuMzc1IC05LjgxMjUgQyA0Ljc2OTUzMSAtOS44MTI1IDQuMzA0Njg4IC05LjY4NzUgMy45ODQzNzUgLTkuNDM3NSBDIDMuNjYwMTU2IC05LjE4NzUgMy41IC04Ljg3NSAzLjUgLTguNSBDIDMuNDg4MjgxIC04LjA4MjAzMSAzLjY2NDA2MiAtNy43NjU2MjUgNC4wMzEyNSAtNy41NDY4NzUgQyA0LjQwNjI1IC03LjMyODEyNSA0Ljg0Mzc1IC03LjE2MDE1NiA1LjM0Mzc1IC03LjA0Njg3NSBMIDYuNDA2MjUgLTYuNzk2ODc1IEMgNy4wODIwMzEgLTYuNjQwNjI1IDcuNjc5Njg4IC02LjQxNDA2MiA4LjIwMzEyNSAtNi4xMjUgQyA4LjczNDM3NSAtNS44NDM3NSA5LjE0ODQzOCAtNS40NzI2NTYgOS40NTMxMjUgLTUuMDE1NjI1IEMgOS43NjU2MjUgLTQuNTU0Njg4IDkuOTIxODc1IC00IDkuOTIxODc1IC0zLjM0Mzc1IEMgOS45MTAxNTYgLTIuMjY5NTMxIDkuNTAzOTA2IC0xLjQxNDA2MiA4LjcwMzEyNSAtMC43ODEyNSBDIDcuOTEwMTU2IC0wLjE0NDUzMSA2Ljc5Njg3NSAwLjE3MTg3NSA1LjM1OTM3NSAwLjE3MTg3NSBDIDMuOTQxNDA2IDAuMTcxODc1IDIuODA0Njg4IC0wLjE0ODQzOCAxLjk1MzEyNSAtMC43OTY4NzUgQyAxLjEwOTM3NSAtMS40NTMxMjUgMC42NzE4NzUgLTIuNDE0MDYyIDAuNjQwNjI1IC0zLjY4NzUgTCAzLjA0Njg3NSAtMy42ODc1IEMgMy4wODU5MzggLTMuMDkzNzUgMy4zMTY0MDYgLTIuNjQ0NTMxIDMuNzM0Mzc1IC0yLjM0Mzc1IEMgNC4xNjAxNTYgLTIuMDUwNzgxIDQuNjk1MzEyIC0xLjkwNjI1IDUuMzQzNzUgLTEuOTA2MjUgQyA1Ljk2ODc1IC0xLjkwNjI1IDYuNDY4NzUgLTIuMDM5MDYyIDYuODQzNzUgLTIuMzEyNSBDIDcuMjE4NzUgLTIuNTgyMDMxIDcuNDEwMTU2IC0yLjkyOTY4OCA3LjQyMTg3NSAtMy4zNTkzNzUgQyA3LjQxMDE1NiAtMy43NTM5MDYgNy4yMzQzNzUgLTQuMDU0Njg4IDYuODkwNjI1IC00LjI2NTYyNSBDIDYuNTQ2ODc1IC00LjQ4NDM3NSA2LjA1NDY4OCAtNC42NzE4NzUgNS40MjE4NzUgLTQuODI4MTI1IEwgNC4xNDA2MjUgLTUuMTQwNjI1IEMgMy4xNDg0MzggLTUuMzc4OTA2IDIuMzY3MTg4IC01Ljc1MzkwNiAxLjc5Njg3NSAtNi4yNjU2MjUgQyAxLjIyMjY1NiAtNi43ODUxNTYgMC45NDE0MDYgLTcuNDc2NTYyIDAuOTUzMTI1IC04LjM0Mzc1IEMgMC45NDE0MDYgLTkuMDUwNzgxIDEuMTI4OTA2IC05LjY3MTg3NSAxLjUxNTYyNSAtMTAuMjAzMTI1IEMgMS44OTg0MzggLTEwLjczNDM3NSAyLjQyNTc4MSAtMTEuMTQ0NTMxIDMuMDkzNzUgLTExLjQzNzUgQyAzLjc2OTUzMSAtMTEuNzM4MjgxIDQuNTM1MTU2IC0xMS44OTA2MjUgNS4zOTA2MjUgLTExLjg5MDYyNSBDIDYuMjY1NjI1IC0xMS44OTA2MjUgNy4wMjM0MzggLTExLjczODI4MSA3LjY3MTg3NSAtMTEuNDM3NSBDIDguMzI4MTI1IC0xMS4xNDQ1MzEgOC44MzIwMzEgLTEwLjczNDM3NSA5LjE4NzUgLTEwLjIwMzEyNSBDIDkuNTUwNzgxIC05LjY3MTg3NSA5LjczODI4MSAtOS4wNTQ2ODggOS43NSAtOC4zNTkzNzUgWiBNIDcuMzc1IC04LjM1OTM3NSAiLz48L2c+PC9nPjwvZz48ZyBmaWxsPSIjMzM0NDNjIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyMi45NzI2NjksIDMxNC45MTM3NDgpIj48Zz48cGF0aCBkPSJNIDEuMDE1NjI1IDAgTCAxLjAxNTYyNSAtMTEuNzM0Mzc1IEwgOC45MjE4NzUgLTExLjczNDM3NSBMIDguOTIxODc1IC05LjY4NzUgTCAzLjUgLTkuNjg3NSBMIDMuNSAtNi44OTA2MjUgTCA4LjUxNTYyNSAtNi44OTA2MjUgTCA4LjUxNTYyNSAtNC44NDM3NSBMIDMuNSAtNC44NDM3NSBMIDMuNSAtMi4wNDY4NzUgTCA4LjkzNzUgLTIuMDQ2ODc1IEwgOC45Mzc1IDAgWiBNIDEuMDE1NjI1IDAgIi8+PC9nPjwvZz48L2c+PGcgZmlsbD0iIzMzNDQzYyIgZmlsbC1vcGFjaXR5PSIxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzQuNDY2ODQ2LCAzMTQuOTEzNzQ4KSI+PGc+PHBhdGggZD0iTSAxLjAxNTYyNSAwIEwgMS4wMTU2MjUgLTExLjczNDM3NSBMIDUuNjQwNjI1IC0xMS43MzQzNzUgQyA2Ljk3MjY1NiAtMTEuNzM0Mzc1IDguMDAzOTA2IC0xMS4zODI4MTIgOC43MzQzNzUgLTEwLjY4NzUgQyA5LjQ3MjY1NiAtOS45ODgyODEgOS44NDM3NSAtOS4wNTQ2ODggOS44NDM3NSAtNy44OTA2MjUgQyA5Ljg0Mzc1IC03LjA4NTkzOCA5LjY2NDA2MiAtNi4zOTg0MzggOS4zMTI1IC01LjgyODEyNSBDIDguOTU3MDMxIC01LjI2NTYyNSA4LjQ0NTMxMiAtNC44NDM3NSA3Ljc4MTI1IC00LjU2MjUgTCAxMC4yNjU2MjUgMCBMIDcuNTMxMjUgMCBMIDUuMzEyNSAtNC4xNTYyNSBMIDMuNSAtNC4xNTYyNSBMIDMuNSAwIFogTSAzLjUgLTYuMTU2MjUgTCA1LjE4NzUgLTYuMTU2MjUgQyA2LjU5Mzc1IC02LjE1NjI1IDcuMjk2ODc1IC02LjczNDM3NSA3LjI5Njg3NSAtNy44OTA2MjUgQyA3LjI5Njg3NSAtOS4wOTc2NTYgNi41ODU5MzggLTkuNzAzMTI1IDUuMTcxODc1IC05LjcwMzEyNSBMIDMuNSAtOS43MDMxMjUgWiBNIDMuNSAtNi4xNTYyNSAiLz48L2c+PC9nPjwvZz48ZyBmaWxsPSIjMzM0NDNjIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0Ni42NjU2MDUsIDMxNC45MTM3NDgpIj48Zz48cGF0aCBkPSJNIDMuMTQwNjI1IC0xMS43MzQzNzUgTCA1Ljk2ODc1IC0yLjgxMjUgTCA2LjA3ODEyNSAtMi44MTI1IEwgOC45MjE4NzUgLTExLjczNDM3NSBMIDExLjY3MTg3NSAtMTEuNzM0Mzc1IEwgNy42MjUgMCBMIDQuNDM3NSAwIEwgMC4zOTA2MjUgLTExLjczNDM3NSBaIE0gMy4xNDA2MjUgLTExLjczNDM3NSAiLz48L2c+PC9nPjwvZz48ZyBmaWxsPSIjMzM0NDNjIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2MC4zNDIyMSwgMzE0LjkxMzc0OCkiPjxnPjxwYXRoIGQ9Ik0gMy41IC0xMS43MzQzNzUgTCAzLjUgMCBMIDEuMDE1NjI1IDAgTCAxLjAxNTYyNSAtMTEuNzM0Mzc1IFogTSAzLjUgLTExLjczNDM3NSAiLz48L2c+PC9nPjwvZz48ZyBmaWxsPSIjMzM0NDNjIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2Ni40ODA1NTcsIDMxNC45MTM3NDgpIj48Zz48cGF0aCBkPSJNIDExLjM1OTM3NSAtNy42MjUgTCA4Ljg1OTM3NSAtNy42MjUgQyA4Ljc2NTYyNSAtOC4yNjk1MzEgOC40ODgyODEgLTguNzczNDM4IDguMDMxMjUgLTkuMTQwNjI1IEMgNy41ODIwMzEgLTkuNTAzOTA2IDcuMDE1NjI1IC05LjY4NzUgNi4zMjgxMjUgLTkuNjg3NSBDIDUuNDIxODc1IC05LjY4NzUgNC42OTE0MDYgLTkuMzUxNTYyIDQuMTQwNjI1IC04LjY4NzUgQyAzLjU5NzY1NiAtOC4wMzEyNSAzLjMyODEyNSAtNy4wODU5MzggMy4zMjgxMjUgLTUuODU5Mzc1IEMgMy4zMjgxMjUgLTQuNjA5Mzc1IDMuNjAxNTYyIC0zLjY1NjI1IDQuMTU2MjUgLTMgQyA0LjcwNzAzMSAtMi4zNTE1NjIgNS40MjU3ODEgLTIuMDMxMjUgNi4zMTI1IC0yLjAzMTI1IEMgNi45NzY1NjIgLTIuMDMxMjUgNy41MzkwNjIgLTIuMjAzMTI1IDggLTIuNTQ2ODc1IEMgOC40NTcwMzEgLTIuODkwNjI1IDguNzQyMTg4IC0zLjM3ODkwNiA4Ljg1OTM3NSAtNC4wMTU2MjUgTCAxMS4zNTkzNzUgLTQgQyAxMS4yNzM0MzggLTMuMjgxMjUgMTEuMDE5NTMxIC0yLjYwMTU2MiAxMC41OTM3NSAtMS45Njg3NSBDIDEwLjE3NTc4MSAtMS4zMzIwMzEgOS42MDE1NjIgLTAuODE2NDA2IDguODc1IC0wLjQyMTg3NSBDIDguMTQ0NTMxIC0wLjAzNTE1NjIgNy4yODEyNSAwLjE1NjI1IDYuMjgxMjUgMC4xNTYyNSBDIDUuMjI2NTYyIDAuMTU2MjUgNC4yODkwNjIgLTAuMDc4MTI1IDMuNDY4NzUgLTAuNTQ2ODc1IEMgMi42NDQ1MzEgLTEuMDIzNDM4IDEuOTkyMTg4IC0xLjcxMDkzOCAxLjUxNTYyNSAtMi42MDkzNzUgQyAxLjA0Njg3NSAtMy41MDM5MDYgMC44MTI1IC00LjU4NTkzOCAwLjgxMjUgLTUuODU5Mzc1IEMgMC44MTI1IC03LjE0MDYyNSAxLjA1MDc4MSAtOC4yMjY1NjIgMS41MzEyNSAtOS4xMjUgQyAyLjAwNzgxMiAtMTAuMDE5NTMxIDIuNjYwMTU2IC0xMC43MDMxMjUgMy40ODQzNzUgLTExLjE3MTg3NSBDIDQuMzE2NDA2IC0xMS42NDg0MzggNS4yNSAtMTEuODkwNjI1IDYuMjgxMjUgLTExLjg5MDYyNSBDIDcuMTg3NSAtMTEuODkwNjI1IDggLTExLjcyMjY1NiA4LjcxODc1IC0xMS4zOTA2MjUgQyA5LjQ0NTMxMiAtMTEuMDU0Njg4IDEwLjAzOTA2MiAtMTAuNTcwMzEyIDEwLjUgLTkuOTM3NSBDIDEwLjk2ODc1IC05LjMwMDc4MSAxMS4yNTM5MDYgLTguNTMxMjUgMTEuMzU5Mzc1IC03LjYyNSBaIE0gMTEuMzU5Mzc1IC03LjYyNSAiLz48L2c+PC9nPjwvZz48ZyBmaWxsPSIjMzM0NDNjIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4MC4yMjU5MTcsIDMxNC45MTM3NDgpIj48Zz48cGF0aCBkPSJNIDEuMDE1NjI1IDAgTCAxLjAxNTYyNSAtMTEuNzM0Mzc1IEwgOC45MjE4NzUgLTExLjczNDM3NSBMIDguOTIxODc1IC05LjY4NzUgTCAzLjUgLTkuNjg3NSBMIDMuNSAtNi44OTA2MjUgTCA4LjUxNTYyNSAtNi44OTA2MjUgTCA4LjUxNTYyNSAtNC44NDM3NSBMIDMuNSAtNC44NDM3NSBMIDMuNSAtMi4wNDY4NzUgTCA4LjkzNzUgLTIuMDQ2ODc1IEwgOC45Mzc1IDAgWiBNIDEuMDE1NjI1IDAgIi8+PC9nPjwvZz48L2c+PGcgZmlsbD0iIzMzNDQzYyIgZmlsbC1vcGFjaXR5PSIxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOTEuNzIwMDk0LCAzMTQuOTEzNzQ4KSI+PGc+PHBhdGggZD0iTSA3LjM3NSAtOC4zNTkzNzUgQyA3LjMzMjAzMSAtOC44MTY0MDYgNy4xMzI4MTIgLTkuMTcxODc1IDYuNzgxMjUgLTkuNDIxODc1IEMgNi40Mzc1IC05LjY3OTY4OCA1Ljk2ODc1IC05LjgxMjUgNS4zNzUgLTkuODEyNSBDIDQuNzY5NTMxIC05LjgxMjUgNC4zMDQ2ODggLTkuNjg3NSAzLjk4NDM3NSAtOS40Mzc1IEMgMy42NjAxNTYgLTkuMTg3NSAzLjUgLTguODc1IDMuNSAtOC41IEMgMy40ODgyODEgLTguMDgyMDMxIDMuNjY0MDYyIC03Ljc2NTYyNSA0LjAzMTI1IC03LjU0Njg3NSBDIDQuNDA2MjUgLTcuMzI4MTI1IDQuODQzNzUgLTcuMTYwMTU2IDUuMzQzNzUgLTcuMDQ2ODc1IEwgNi40MDYyNSAtNi43OTY4NzUgQyA3LjA4MjAzMSAtNi42NDA2MjUgNy42Nzk2ODggLTYuNDE0MDYyIDguMjAzMTI1IC02LjEyNSBDIDguNzM0Mzc1IC01Ljg0Mzc1IDkuMTQ4NDM4IC01LjQ3MjY1NiA5LjQ1MzEyNSAtNS4wMTU2MjUgQyA5Ljc2NTYyNSAtNC41NTQ2ODggOS45MjE4NzUgLTQgOS45MjE4NzUgLTMuMzQzNzUgQyA5LjkxMDE1NiAtMi4yNjk1MzEgOS41MDM5MDYgLTEuNDE0MDYyIDguNzAzMTI1IC0wLjc4MTI1IEMgNy45MTAxNTYgLTAuMTQ0NTMxIDYuNzk2ODc1IDAuMTcxODc1IDUuMzU5Mzc1IDAuMTcxODc1IEMgMy45NDE0MDYgMC4xNzE4NzUgMi44MDQ2ODggLTAuMTQ4NDM4IDEuOTUzMTI1IC0wLjc5Njg3NSBDIDEuMTA5Mzc1IC0xLjQ1MzEyNSAwLjY3MTg3NSAtMi40MTQwNjIgMC42NDA2MjUgLTMuNjg3NSBMIDMuMDQ2ODc1IC0zLjY4NzUgQyAzLjA4NTkzOCAtMy4wOTM3NSAzLjMxNjQwNiAtMi42NDQ1MzEgMy43MzQzNzUgLTIuMzQzNzUgQyA0LjE2MDE1NiAtMi4wNTA3ODEgNC42OTUzMTIgLTEuOTA2MjUgNS4zNDM3NSAtMS45MDYyNSBDIDUuOTY4NzUgLTEuOTA2MjUgNi40Njg3NSAtMi4wMzkwNjIgNi44NDM3NSAtMi4zMTI1IEMgNy4yMTg3NSAtMi41ODIwMzEgNy40MTAxNTYgLTIuOTI5Njg4IDcuNDIxODc1IC0zLjM1OTM3NSBDIDcuNDEwMTU2IC0zLjc1MzkwNiA3LjIzNDM3NSAtNC4wNTQ2ODggNi44OTA2MjUgLTQuMjY1NjI1IEMgNi41NDY4NzUgLTQuNDg0Mzc1IDYuMDU0Njg4IC00LjY3MTg3NSA1LjQyMTg3NSAtNC44MjgxMjUgTCA0LjE0MDYyNSAtNS4xNDA2MjUgQyAzLjE0ODQzOCAtNS4zNzg5MDYgMi4zNjcxODggLTUuNzUzOTA2IDEuNzk2ODc1IC02LjI2NTYyNSBDIDEuMjIyNjU2IC02Ljc4NTE1NiAwLjk0MTQwNiAtNy40NzY1NjIgMC45NTMxMjUgLTguMzQzNzUgQyAwLjk0MTQwNiAtOS4wNTA3ODEgMS4xMjg5MDYgLTkuNjcxODc1IDEuNTE1NjI1IC0xMC4yMDMxMjUgQyAxLjg5ODQzOCAtMTAuNzM0Mzc1IDIuNDI1NzgxIC0xMS4xNDQ1MzEgMy4wOTM3NSAtMTEuNDM3NSBDIDMuNzY5NTMxIC0xMS43MzgyODEgNC41MzUxNTYgLTExLjg5MDYyNSA1LjM5MDYyNSAtMTEuODkwNjI1IEMgNi4yNjU2MjUgLTExLjg5MDYyNSA3LjAyMzQzOCAtMTEuNzM4MjgxIDcuNjcxODc1IC0xMS40Mzc1IEMgOC4zMjgxMjUgLTExLjE0NDUzMSA4LjgzMjAzMSAtMTAuNzM0Mzc1IDkuMTg3NSAtMTAuMjAzMTI1IEMgOS41NTA3ODEgLTkuNjcxODc1IDkuNzM4MjgxIC05LjA1NDY4OCA5Ljc1IC04LjM1OTM3NSBaIE0gNy4zNzUgLTguMzU5Mzc1ICIvPjwvZz48L2c+PC9nPjxwYXRoIGZpbGw9IiM4N2NiMjgiIGQ9Ik0gMTU5LjY2NDA2MiA5NS4yMzQzNzUgQyAxNTcuOTcyNjU2IDk2LjM1MTU2MiAxNTYuNDQxNDA2IDk3LjUwNzgxMiAxNTUuMDcwMzEyIDk4LjY0ODQzOCBDIDE0OS4zOTg0MzggMTAzLjM0NzY1NiAxNDYuNDYwOTM4IDEwNy43MjY1NjIgMTQ2LjQ2MDkzOCAxMDcuNzI2NTYyIEMgMTQ2LjQ2MDkzOCAxMDcuNzI2NTYyIDE1MS4xMDE1NjIgMTA0LjkxMDE1NiAxNTguNjQwNjI1IDEwMi40MTQwNjIgQyAxNjAuNTE1NjI1IDEwMS43OTI5NjkgMTYyLjU3MDMxMiAxMDEuMTkxNDA2IDE2NC43NzczNDQgMTAwLjY1NjI1IEMgMTc3Ljk5MjE4OCA5Ny40NzI2NTYgMTk2LjY2NDA2MiA5Ni43MzQzNzUgMjE1LjAzNTE1NiAxMDguODMyMDMxIEMgMjE1LjAzNTE1NiAxMDguODMyMDMxIDE5NC41NTg1OTQgOTkuMDA3ODEyIDE3MS4wNzQyMTkgMTA2LjIzODI4MSBDIDE2OS4yNzczNDQgMTA2Ljc4OTA2MiAxNjcuNDY0ODQ0IDEwNy40NDUzMTIgMTY1LjYzNjcxOSAxMDguMjEwOTM4IEMgMTYxLjU3MDMxMiAxMDkuOTE3OTY5IDE1Ny40NTMxMjUgMTEyLjE3OTY4OCAxNTMuMzc1IDExNS4xMzI4MTIgQyAxNzMuMzU1NDY5IDEzMy43OTI5NjkgMTkyLjg5NDUzMSAxMjkuMjgxMjUgMjA4Ljc1IDEyNC4xNjQwNjIgQyAyMTAuNzQ2MDk0IDEyMy41MjM0MzggMjEyLjY3OTY4OCAxMjIuODcxMDk0IDIxNC41NTQ2ODggMTIyLjI1IEMgMjIyLjk5NjA5NCAxMTkuNDY0ODQ0IDIyOS45NDUzMTIgMTE4LjYyMTA5NCAyMzUuMDExNzE5IDExOC41MjM0MzggQyAyNDEuMDc4MTI1IDExOC40MTAxNTYgMjQ0LjQ0NTMxMiAxMTkuMzcxMDk0IDI0NC40NDUzMTIgMTE5LjM3MTA5NCBDIDIwNC4yODEyNSA3Ny44NjMyODEgMTc1LjI2NTYyNSA4NC45MDYyNSAxNTkuNjY0MDYyIDk1LjIzNDM3NSAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PGcgY2xpcC1wYXRoPSJ1cmwoIzU1ZWYxZTRkMTEpIj48cGF0aCBmaWxsPSIjODdjYjI4IiBkPSJNIDI0MC4zNTU0NjkgNDEuMDQ2ODc1IEMgMjM3LjQ0NTMxMiA0Mi42MzY3MTkgMjMzLjIyNjU2MiA0NC40MTAxNTYgMjI3LjUzMTI1IDQ1LjU3MDMxMiBDIDIyNi4yNjk1MzEgNDUuODI0MjE5IDIyNC45NTcwMzEgNDYuMDg1OTM4IDIyMy42MTcxODggNDYuMzYzMjgxIEMgMjEyLjk1NzAzMSA0OC42MDU0NjkgMjAwLjQwMjM0NCA1Mi4zODY3MTkgMTk1LjExNzE4OCA2OS40NTcwMzEgQyAxOTguMzkwNjI1IDY5LjgxMjUgMjAxLjQ2MDkzOCA2OS43NTc4MTIgMjA0LjMyNDIxOSA2OS40MDYyNSBDIDIwNS42MDkzNzUgNjkuMjUgMjA2Ljg1MTU2MiA2OS4wMzEyNSAyMDguMDUwNzgxIDY4Ljc2MTcxOSBDIDIyMy43MjI2NTYgNjUuMjQ2MDk0IDIzMi4xNTYyNSA1My4wMjczNDQgMjMyLjE1NjI1IDUzLjAyNzM0NCBDIDIyNS42NTIzNDQgNjUuODU1NDY5IDIxNC44MjAzMTIgNzEuNDk2MDk0IDIwNi4yODUxNTYgNzMuOTcyNjU2IEMgMjA0Ljg1OTM3NSA3NC4zODY3MTkgMjAzLjUgNzQuNzEwOTM4IDIwMi4yMzQzNzUgNzQuOTY4NzUgQyAxOTcuMTQ0NTMxIDc1Ljk5NjA5NCAxOTMuNTkzNzUgNzUuOTAyMzQ0IDE5My41OTM3NSA3NS45MDIzNDQgQyAxOTMuNTkzNzUgNzUuOTAyMzQ0IDE5Ni42ODM1OTQgNzcuNDM3NSAyMDEuNDI5Njg4IDc4LjI2NTYyNSBDIDIwMi41NzQyMTkgNzguNDY0ODQ0IDIwMy44MjAzMTIgNzguNjI1IDIwNS4xNDA2MjUgNzguNzEwOTM4IEMgMjE3LjM0NzY1NiA3OS41MTE3MTkgMjM2LjEwMTU2MiA3NC4wOTM3NSAyNDUuNDI5Njg4IDM3LjUwMzkwNiBDIDI0NS40Mjk2ODggMzcuNTAzOTA2IDI0My44MzIwMzEgMzkuMTQwNjI1IDI0MC4zNTU0NjkgNDEuMDQ2ODc1ICIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PHBhdGggZmlsbD0iIzg3Y2IyOCIgZD0iTSAyMjYuNzY5NTMxIDI0NC4wODk4NDQgQyAxODEuOTIxODc1IDI1My4zMDA3ODEgMTM4LjEwMTU2MiAyMjQuNDEwMTU2IDEyOC44OTA2MjUgMTc5LjU2NjQwNiBDIDExOS42Nzk2ODggMTM0LjcyMjY1NiAxNDguNTcwMzEyIDkwLjg5ODQzOCAxOTMuNDE0MDYyIDgxLjY4NzUgQyAyMTEuNDQ5MjE5IDc3Ljk4ODI4MSAyMjkuMzE2NDA2IDgwLjQ0NTMxMiAyNDQuODM1OTM4IDg3LjYyNSBDIDIyNi40NDkyMTkgNzYuOTAyMzQ0IDIwNC4yMDMxMjUgNzIuNjQ4NDM4IDE4MS43MTA5MzggNzcuMjY5NTMxIEMgMTMzLjI0NjA5NCA4Ny4yMjI2NTYgMTAyLjAyNzM0NCAxMzQuNTc4MTI1IDExMS45ODQzNzUgMTgzLjAzOTA2MiBDIDEyMS45Mzc1IDIzMS41IDE2OS4yODkwNjIgMjYyLjcxODc1IDIxNy43NTM5MDYgMjUyLjc2NTYyNSBDIDI0MC4yNDYwOTQgMjQ4LjE0ODQzOCAyNTkuMDE5NTMxIDIzNS40Njg3NSAyNzEuNjg3NSAyMTguMzY3MTg4IEMgMjYwLjI1MzkwNiAyMzEuMDgyMDMxIDI0NC44MDQ2ODggMjQwLjM4NjcxOSAyMjYuNzY5NTMxIDI0NC4wODk4NDQgIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGZpbGw9IiM2YjNlMGEiIGQ9Ik0gMTQxLjI3MzQzOCAxNjcuMTA1NDY5IEMgMTM5LjQ3MjY1NiAxNjcuNzE4NzUgMTM3LjcyNjU2MiAxNjguMzc1IDEzNi4wNDI5NjkgMTY5LjA3MDMxMiBDIDIwNC44NTkzNzUgMTc3Ljk3MjY1NiAyMzMuNTExNzE5IDIxMy40MTQwNjIgMjQ0LjUwNzgxMiAyMzMuODkwNjI1IEMgMjUxLjU1MDc4MSAyMzAuNDg4MjgxIDI1OC4wNDI5NjkgMjI2LjA0Mjk2OSAyNjMuODE2NDA2IDIyMC42NTIzNDQgQyAyNTMuMzgyODEyIDIwOS43NjE3MTkgMjEyLjYyODkwNiAxNzIuMzM1OTM4IDE0MS4yNzM0MzggMTY3LjEwNTQ2OSBaIE0gMTkzLjc4MTI1IDE2MS44ODY3MTkgQyAxNzUuMjEwOTM4IDE2MC4xNTYyNSAxNTcuNzkyOTY5IDE2MS45NDUzMTIgMTQzLjYwMTU2MiAxNjYuMzU1NDY5IEMgMTY2LjAzMTI1IDE2NS45MDYyNSAyMjkuNTg1OTM4IDE2OC45MDIzNDQgMjcwLjcwNzAzMSAyMTMuNDU3MDMxIEMgMjcwLjcxNDg0NCAyMTMuMzkwNjI1IDI3MC43MjI2NTYgMjEzLjMyNDIxOSAyNzAuNzMwNDY5IDIxMy4yNTM5MDYgQyAyNzIuOTg0Mzc1IDE4OS4wNTA3ODEgMjM4LjUzMTI1IDE2Ni4wNTQ2ODggMTkzLjc4MTI1IDE2MS44ODY3MTkgWiBNIDEzNSAxNjkuNTE1NjI1IEMgMTM0LjIzNDM3NSAxNjkuODQzNzUgMTMzLjQ4MDQ2OSAxNzAuMTg3NSAxMzIuNzM4MjgxIDE3MC41MzEyNSBDIDE3NS4yNzM0MzggMTgzLjkwMjM0NCAxOTYuMjM4MjgxIDIxNi4wMDc4MTIgMjA2LjQ0OTIxOSAyNDEuNjk5MjE5IEMgMjEyLjk2MDkzOCAyNDEuOTkyMTg4IDIxOS41MDc4MTIgMjQxLjQ4NDM3NSAyMjUuOTYwOTM4IDI0MC4xNjAxNTYgQyAyMjcuODI4MTI1IDIzOS43NzczNDQgMjI5LjY3MTg3NSAyMzkuMzIwMzEyIDIzMS40ODgyODEgMjM4LjgxMjUgQyAyMDYuOTIxODc1IDE4OS41OTM3NSAxNTQuMzc4OTA2IDE3My43ODUxNTYgMTM1IDE2OS41MTU2MjUgWiBNIDEzMS42NjAxNTYgMTcxLjM3ODkwNiBDIDEzMS45MzM1OTQgMTczLjgzOTg0NCAxMzIuMzE2NDA2IDE3Ni4zMDA3ODEgMTMyLjgyMDMxMiAxNzguNzU3ODEyIEMgMTM5LjAyNzM0NCAyMDguOTgwNDY5IDE2MS42MzI4MTIgMjMyLjE0MDYyNSAxOTAuNzU3ODEyIDIzOS40MDIzNDQgQyAxNzUuMDIzNDM4IDE5OC40OTYwOTQgMTQ0LjEzNjcxOSAxNzguMTgzNTk0IDEzMS42NjAxNTYgMTcxLjM3ODkwNiAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+" alt="" />
                </header>
                <nav>
                    <Navbar/>
                </nav>
                <section className={`${display} text-2xl lg:text-4xl font-bold  flex-col justify-center items-center  border-y-4 mx-4 border-zinc-200 py-5`} >
                    <motion.p ref={ref} variants={zoomIn("", "1.5")} initial="hidden" animate={inView ? "show" : "hidden" } className='text-center' >CULTIVATING NEW CROPS TO MAKE FARMERS </motion.p>
                    <motion.p ref={ref} variants={zoomIn("", "2")} initial="hidden" animate={inView ? "show" : "hidden"} className='text-orange-500'>INCREASE PROFITS!</motion.p>
                </section>
            </section>

        </section>
    )
}

export default Hero
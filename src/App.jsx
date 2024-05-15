import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import About from './Components/AboutUs/About'
import Contact from './Components/Contacts/Contact'
import Services from './Components/Services/Services'
import Products from './Components/Products/Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

    return (
       <div className='relative w-full    overflow-hidden  '>
            <a href="https://wa.me/+923207859048" target="_blank" rel="noopener noreferrer" className='fixed  w-16 h-16 bottom-2 right-0 z-40  text-white rounded-full p-2 m-1 '>
                <img className='' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICANCiAgICA8dGl0bGU+V2hhdHNhcHAtY29sb3I8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxkZWZzPg0KDQo8L2RlZnM+DQogICAgPGcgaWQ9Ikljb25zIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IkNvbG9yLSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcwMC4wMDAwMDAsIC0zNjAuMDAwMDAwKSIgZmlsbD0iIzY3QzE1RSI+DQogICAgICAgICAgICA8cGF0aCBkPSJNNzIzLjk5MzAzMywzNjAgQzcxMC43NjIyNTIsMzYwIDcwMCwzNzAuNzY1Mjg3IDcwMCwzODMuOTk5ODAxIEM3MDAsMzg5LjI0ODQ1MSA3MDEuNjkyNjYxLDM5NC4xMTYwMjUgNzA0LjU3MDAyNiwzOTguMDY2OTQ3IEw3MDEuNTc5NjA1LDQwNi45ODM3OTggTDcxMC44MDQ0NDksNDA0LjAzNTUzOSBDNzE0LjU5ODYwNSw0MDYuNTQ2OTc1IDcxOS4xMjY0MzQsNDA4IDcyNC4wMDY5NjcsNDA4IEM3MzcuMjM3NzQ4LDQwOCA3NDgsMzk3LjIzNDMxNSA3NDgsMzg0LjAwMDE5OSBDNzQ4LDM3MC43NjU2ODUgNzM3LjIzNzc0OCwzNjAuMDAwMzk4IDcyNC4wMDY5NjcsMzYwLjAwMDM5OCBMNzIzLjk5MzAzMywzNjAuMDAwMzk4IEw3MjMuOTkzMDMzLDM2MCBaIE03MTcuMjkyODUsMzcyLjE5MDgzNiBDNzE2LjgyNzQ4OCwzNzEuMDc2MjggNzE2LjQ3NDc4NCwzNzEuMDM0MDcxIDcxNS43Njk3NzQsMzcxLjAwNTQwMSBDNzE1LjUyOTcyOCwzNzAuOTkxNDY0IDcxNS4yNjIyMTQsMzcwLjk3NzUyNyA3MTQuOTY1NjQsMzcwLjk3NzUyNyBDNzE0LjA0ODQ1LDM3MC45Nzc1MjcgNzEzLjA4OTQ2MiwzNzEuMjQ1NTE0IDcxMi41MTEwNDMsMzcxLjgzODAzMyBDNzExLjgwNjAzMywzNzIuNTU3NTc3IDcxMC4wNTY4NDMsMzc0LjIzNjM4IDcxMC4wNTY4NDMsMzc3LjY3OTIwMiBDNzEwLjA1Njg0MywzODEuMTIyMDIzIDcxMi41Njc1NzEsMzg0LjQ1MTc1NiA3MTIuOTA1OTQ0LDM4NC45MTc2NDggQzcxMy4yNTg2NDgsMzg1LjM4Mjc0MyA3MTcuODAwODA4LDM5Mi41NTAzMSA3MjQuODUzMjk3LDM5NS40NzE0OTIgQzczMC4zNjgzNzksMzk3Ljc1NzE0OSA3MzIuMDA0OTEsMzk3LjU0NTMwNyA3MzMuMjYwMDc0LDM5Ny4yNzczMiBDNzM1LjA5MzY1OCwzOTYuODgyMzA4IDczNy4zOTMwMDIsMzk1LjUyNzIzOSA3MzcuOTcxNDIxLDM5My44OTEwNDMgQzczOC41NDk4NCwzOTIuMjU0MDUgNzM4LjU0OTg0LDM5MC44NTcxNzEgNzM4LjM4MDI1NSwzOTAuNTYwOTEyIEM3MzguMjExMDY4LDM5MC4yNjQ2NTIgNzM3Ljc0NTMwOCwzOTAuMDk1ODE2IDczNy4wNDAyOTgsMzg5Ljc0MjYxNSBDNzM2LjMzNTI4OCwzODkuMzg5ODExIDczMi45MDczNywzODcuNjk2NjczIDczMi4yNTg0OSwzODcuNDcwODk0IEM3MzEuNjIzNTQzLDM4Ny4yMzExNzkgNzMxLjAxNzI1OSwzODcuMzE1OTk1IDczMC41Mzc5NjMsMzg3Ljk5MzMzIEM3MjkuODYwODE5LDM4OC45Mzg2NTMgNzI5LjE5ODAwNiwzODkuODk4MzEgNzI4LjY2MTc4NSwzOTAuNDc2NDk0IEM3MjguMjM4NjE5LDM5MC45MjgwNTEgNzI3LjU0NzE0NCwzOTAuOTg0NTk1IDcyNi45NjkxMjMsMzkwLjc0NDQ4MSBDNzI2LjE5MzI1NCwzOTAuNDIwMzQ4IDcyNC4wMjEyOTgsMzg5LjY1Nzc5OCA3MjEuMzQwOTg1LDM4Ny4yNzMzODggQzcxOS4yNjczNTYsMzg1LjQyNTM1IDcxNy44NTY5MzgsMzgzLjEyNTc1NiA3MTcuNDQ4MTA0LDM4Mi40MzQ0ODQgQzcxNy4wMzg4NzEsMzgxLjcyOTI3NSA3MTcuNDA1OTA3LDM4MS4zMTk1MjkgNzE3LjcyOTk0OCwzODAuOTM4ODUyIEM3MTguMDgyNjUzLDM4MC41MDEyMzIgNzE4LjQyMTAyNiwzODAuMTkxMDM2IDcxOC43NzM3MywzNzkuNzgxNjg4IEM3MTkuMTI2NDM0LDM3OS4zNzI3MzggNzE5LjMyMzg4NCwzNzkuMTYwODk3IDcxOS41NDk1OTksMzc4LjY4MTA2OCBDNzE5Ljc4OTY0NSwzNzguMjE1NTc1IDcxOS42MjAwNiwzNzcuNzM1NzQ2IDcxOS40NTA4NzQsMzc3LjM4Mjk0MiBDNzE5LjI4MTY4NywzNzcuMDMwMTM5IDcxNy44NzEyNjksMzczLjU4NzMxNyA3MTcuMjkyODUsMzcyLjE5MDgzNiBaIiBpZD0iV2hhdHNhcHAiPg0KDQo8L3BhdGg+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=" alt="" />
            </a>

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
            
        </div>
    )
}

export default App

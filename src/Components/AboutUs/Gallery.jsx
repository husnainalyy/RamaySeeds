import React from 'react'


function Gallery() {
    return (
        <div className='w-full bg-[#3d405b]   flex flex-col items-center gap-5 pb-20'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,160L14.1,149.3C28.2,139,56,117,85,106.7C112.9,96,141,96,169,128C197.6,160,226,224,254,240C282.4,256,311,224,339,197.3C367.1,171,395,149,424,144C451.8,139,480,149,508,176C536.5,203,565,245,593,234.7C621.2,224,649,160,678,149.3C705.9,139,734,181,762,208C790.6,235,819,245,847,234.7C875.3,224,904,192,932,165.3C960,139,988,117,1016,128C1044.7,139,1073,181,1101,208C1129.4,235,1158,245,1186,224C1214.1,203,1242,149,1271,149.3C1298.8,149,1327,203,1355,197.3C1383.5,192,1412,128,1426,96L1440,64L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"></path></svg>
            <h1 className='text-5xl font-bold text-orange-400'>Gallery</h1>
            <div class="lg:grid lg:grid-cols-4 md:grid-cols-4 gap-8 px-8">
                <div class="lg:grid lg:gap-8 flex flex-col gap-y-8 pt-10 lg:py-0">
                    <div>
                        <img class="h-96 w-96 lg:h-52 lg:w-80 rounded-lg hover:rotate-2 hover:scale-110 transform" src="https://i.ibb.co/pP5SRHR/Whats-App-Image-2024-05-11-at-17-43-43-ad213470.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-96 w-96 lg:h-52 lg:w-80  rounded-lg hover:rotate-2 hover:scale-110 transform" src="https://i.ibb.co/584hdvr/Whats-App-Image-2024-05-11-at-17-46-56-43dd4181.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-96 w-96 lg:h-52 lg:w-80  rounded-lg hover:rotate-2 hover:scale-110 transform" src="https://i.ibb.co/0y2hwbV/Whats-App-Image-2024-05-11-at-17-43-42-4745e900.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-96 w-96 lg:h-52 lg:w-80  rounded-lg hover:rotate-2 hover:scale-110 transform" src="https://i.ibb.co/kQkH6Z1/IMG-20240512-WA0005.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-96 w-96 lg:h-52 lg:w-80  rounded-lg hover:rotate-2 hover:scale-110 transform" src="https://i.ibb.co/nnGpwW8/IMG-20240512-WA0007.jpg" alt="" />
                    </div>
                </div>
                <div class="lg:grid lg:gap-8 flex flex-col gap-y-8 pt-10 lg:py-0">  
                    <div>
                        <img class="h-96 w-96 lg:h-52 lg:w-80 rounded-lg hover:rotate-2 hover:scale-110 transform" src="https://i.ibb.co/3sTjQRY/Whats-App-Image-2024-05-11-at-17-43-41-dd891b95.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-96 w-96 lg:h-52 lg:w-80 rounded-lg hover:rotate-2 hover:scale-110 transform" src="https://i.ibb.co/pP5SRHR/Whats-App-Image-2024-05-11-at-17-43-43-ad213470.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-96 w-96 lg:h-52 lg:w-80 rounded-lg hover:rotate-2 hover:scale-110 transform" src="https://i.ibb.co/ZBhr8rb/Whats-App-Image-2024-05-11-at-17-43-44-18bb4603.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-96 w-96 lg:h-52 lg:w-80 rounded-lg hover:rotate-2 hover:scale-110 transform" src="https://i.ibb.co/jGycP8m/IMG-20240512-WA0004.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-96 w-96 lg:h-52 lg:w-80 rounded-lg hover:rotate-2 hover:scale-110 transform" src="https://i.ibb.co/xhSN5bh/Whats-App-Image-2024-05-12-at-14-30-52-6b7b9853.jpg" alt="" />
                    </div>
                </div>
                <div class="lg:grid lg:gap-8 flex flex-col gap-y-8 pt-10 lg:py-0">
                    <div>
                        <img class="h-96 w-96 lg:h-52 lg:w-80 rounded-lg hover:rotate-2 hover:scale-110 transform" src="https://i.ibb.co/Bckm2S0/Whats-App-Image-2024-05-11-at-17-43-45-80e38116.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-96 w-96 lg:h-52 lg:w-80 rounded-lg hover:rotate-2 hover:scale-110 transform" src="https://i.ibb.co/PMmZ2G2/Whats-App-Image-2024-05-11-at-17-46-53-6319f417.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-96 w-96 lg:h-52 lg:w-80 rounded-lg hover:rotate-2 hover:scale-110 transform" src="https://i.ibb.co/MNM3n9t/Whats-App-Image-2024-05-11-at-17-46-51-35833a69.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-96 w-96 lg:h-52 lg:w-80 rounded-lg hover:rotate-2 hover:scale-110 transform" src="https://i.ibb.co/f9Fmsm9/Whats-App-Image-2024-05-11-at-17-46-54-8b7cb64a.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-96 w-96 lg:h-52 lg:w-80 rounded-lg hover:rotate-2 hover:scale-110 transform" src="https://i.ibb.co/XDPNBDz/IMG-20240512-WA0009.jpg" alt="" />
                    </div>
                </div>
                <div class="lg:grid lg:gap-8 flex flex-col gap-y-8 pt-10 lg:py-0">
                    <div>
                        <img class="h-96 w-96 lg:h-52 lg:w-80 rounded-lg hover:rotate-2 hover:scale-110 transform" src="https://i.ibb.co/c3sPJRm/Whats-App-Image-2024-05-11-at-17-50-09-241fd2e9.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-96 w-96 lg:h-52 lg:w-80 rounded-lg hover:rotate-2 hover:scale-110 transform" src="https://i.ibb.co/1b70chs/Whats-App-Image-2024-05-11-at-17-43-43-c61be7a0.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-96 w-96 lg:h-52 lg:w-80 rounded-lg hover:rotate-2 hover:scale-110 transform" src="https://i.ibb.co/x3wVVjR/IMG-20240512-WA0006.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-96 w-96 lg:h-52 lg:w-80 rounded-lg hover:rotate-2 hover:scale-110 transform" src="https://i.ibb.co/zP9frRM/IMG-20240512-WA0011.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-96 w-96 lg:h-52 lg:w-80 rounded-lg hover:rotate-2 hover:scale-110 transform" src="https://i.ibb.co/mbTk58T/IMG-20240512-WA0010.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Gallery
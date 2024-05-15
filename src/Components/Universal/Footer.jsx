import React from 'react'

function Footer() {
    return (
        <div>
            <footer class="bg-orange-400 text-white py-4 px-3 ">
                <div class="container mx-auto flex flex-wrap items-center justify-between">
                    <div class="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
                        <p class="text-xs text-center text-zinc-200 md:text-sm">Copyright 2020 &copy; All Rights Reserved by Ramay Zarai Services</p>
                    </div>
                    <div class="w-full md:w-1/2 md:text-center md:mb-0 ">
                        <ul class="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
                            <li><p href="" class="text-zinc-200 hover:text-white">Contact</p></li>
                            <li class="mx-4"><p href="" class="text-zinc-200 hover:text-white">Privacy Policy</p></li>
                            <li><p href="" class="text-zinc-200 hover:text-white">Terms of Use</p></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
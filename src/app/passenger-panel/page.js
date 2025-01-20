import React from 'react'
import PassengerForm from '@/components/Templates/passengerPanel/PassengerForm'

import Navbar from '@/components/module/navabar/Navbar';
import Story from '@/components/Templates/index/Story';
import Hero from '@/components/Templates/index/Hero';
import Footer from '@/components/module/footer/Footer';
import BreadCrumb from '@/components/module/breadcrumb/BreadCrumb';
export default function page() {
    return (

        <div className='dark:bg-slate-700'>
            <Navbar />
            <BreadCrumb />
            <Story />
            <Hero />
            <PassengerForm />
            <Footer />

        </div>
    )
}

import Image from "next/image"

const Card = () => {
    return (
       <div className="grid grid-cols-3 gap-24 mt-24">
        {Skills.map((item, index) => (
            <div key={index} className="w-[289px] h-[287px] p-4 bg-[#9C9DA1] border-none border border-gray-200 rounded-2xl shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <Image src={item.image} alt="logo" width={120} height={120} className="flex mx-auto" />
                <p>{item.title}</p>
            </div>
        ))}
       </div>
    )
}

export default Card;

const Skills =[
    {
        image: '/www.svg',
        title: 'Software as a service',
    },
    {
        image: '/www.svg',
        title: 'Software as a service',
    },
    {
        image: '/www.svg',
        title: 'Software as a service',
    },
    {
        image: '/www.svg',
        title: 'Software as a service',
    },
    {
        image: '/www.svg',
        title: 'Software as a service',
    },
]
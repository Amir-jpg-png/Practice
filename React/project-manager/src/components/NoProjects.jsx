import image from '../assets/no-projects.png'
import Button from './Button'

export default function NoProjects({onClick}) {
    return (
        <div className='m-auto'>
            <img src={image} alt="No Project created or selected yet" className='object-contain h-12 w-12 m-auto' />
            <h2 className='text-center text-stone-600 font-bold mt-3 mb-2'>
                No Project Selected
            </h2>
            <p className='text-center text-stone-500'>
                Select a project or get started with a new one
            </p>
            <div className='text-center mt-6'>
                <Button onClick={onClick}>
                    Create New Project
                </Button>
            </div>
        </div>

    )
}
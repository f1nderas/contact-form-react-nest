import axios from "axios"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

interface ContactFormDataProps {
    name: string
    email: string
    phone: string
    projectType: string
    projectDescription: string
    budgetMin: number
    budgetMax: number
}

export const ContactForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormDataProps>()

    const onSubmit = async (data: ContactFormDataProps) => {
        const formattedData = {
            ...data,
            budgetMin: Number(data.budgetMin),
            budgetMax: Number(data.budgetMax)
        }
        try {
            await axios.post('http://localhost:3000/contact', formattedData)
            toast.success('Форма успешно отправлена')
            reset()
        } catch (error) {
            toast.error('Ошибка при отправке формы')
        }
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Форма обратной связи</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input {...register('name', { required: 'Введите имя' })} className="w-full border p-2 rounded" placeholder="Имя" />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                <input {...register('email', { required: 'Введите email' })} className="w-full border p-2 rounded" placeholder="Email" />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                <input {...register('phone', { required: 'ВВедите номер телефона' })} className="w-full border p-2 rounded" placeholder="Телефон" />
                {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

                <input {...register('projectType', { required: 'Введите тип проекта' })} className="w-full border p-2 rounded" placeholder="Тип проекта" />
                {errors.projectType && <p className="text-red-500">{errors.projectType.message}</p>}

                <input {...register('projectDescription', { required: 'Введите описание проекта' })} className="w-full border p-2 rounded" placeholder="Описаине проекта" />
                {errors.projectDescription && <p className="text-red-500">{errors.projectDescription.message} </p>}

                <input type="number" {...register('budgetMin', { required: 'Введите минимальный бюджет' })} className="w-full border p-2 rounded" placeholder="Мин. бюджет" />
                {errors.budgetMin && <p className="text-red-500">{errors.budgetMin.message}</p>}

                <input type="number" {...register('budgetMax', { required: 'Введите максимальный бюджет' })} className="w-full border p-2 rounded" placeholder="Макс. бюджет" />
                {errors.budgetMax && <p className="text-red-500">{errors.budgetMax.message}</p>}

                <button className="w-full bg-blue-500 text-white p-2 rounded cursor-pointer hover:bg-blue-600">Отправить</button>
            </form>
        </div>
    )
}
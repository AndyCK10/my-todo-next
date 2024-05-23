'use server'

export async function login(prevState: any, formData: FormData) {
    const email = formData.get('email')
    const password = formData.get('password')

    if (email !== 'ch10united@gmail.com' && password !== '1234') {
        return { 
            message: 'Login Fail',
        }
    }

    // Login Pass
    console.log(email, password);
    
}
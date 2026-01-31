import signinImg from '../assets/signin.png';

const SignIn = () => {
    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat px-4 md:px-8 py-5"
             style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${signinImg})` }}>
            SignIn Page
        </div>
    )
}
export default SignIn; 
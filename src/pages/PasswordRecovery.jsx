import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import appLogoCompressed from '../assets/app-logo-compressed-black.png';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

// Styled components
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff9f9;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    -webkit-box-shadow: 5px 5px 15px -11px #000000;
    box-shadow: 5px 5px 10px -11px #000000;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.img`
    height: 40px;
    margin: 10px;
`;

const Title = styled.h1`
    font-size: 16px;
    font-weight: 300;
    margin-top: 30px;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 20px;
`;

const Input = styled.input`
    width: 80%;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid lightpink;
`;

const CodeInput = styled.input`
    width: 20%;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid lightpink;
    text-align: center;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: lightpink;
    color: #040404;
    cursor: pointer;
    border-radius: 5px;
    margin: 0px 10px;
`;

const FormLink = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    color: #040404;
`;

const NavigationButtons = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
`;

// Components for each step
const Step1 = ({ setEmail, onNext }) => (
    <Wrapper>
        <Logo src={appLogoCompressed} />
        <Title>Enter Your Email</Title>
        <Form onSubmit={onNext}>
            <Input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <NavigationButtons>
                <Button type="submit">Next</Button>
            </NavigationButtons>
            <Link to="/auth/login" style={{textDecoration: 'none'}}><FormLink>BACK TO SIGN IN</FormLink></Link>
        </Form>
    </Wrapper>
);

const Step2 = ({ setCode, onNext, onBack, onResend }) => {

    const [codes, setCodes] = useState(['', '', '', '']);
    const inputRefs = useRef([]);

    const handleChange = (index, value) => {
        const newCodes = [...codes];
        newCodes[index] = value;
        setCodes(newCodes);

        if (value !== '' && index < codes.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && index > 0 && codes[index] === '') {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const code = codes.join('');
        setCode(code);
        onNext(e);
    };

    const handleBack = (e) => {
        e.preventDefault();
        onBack(e);  // Ensure the event is passed here
    };

    return (
        <Wrapper>
        <Logo src={appLogoCompressed} />
        <Title>Enter the code that has been sent to your email address</Title>
        <Form onSubmit={handleSubmit}>
            <InputContainer>
            {codes.map((code, index) => (
                <CodeInput
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    placeholder="•"
                    maxLength="1"
                    value={code}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    autoFocus={index === 0}
                />
            ))}
            </InputContainer>
            <NavigationButtons>
                <Button type="button" onClick={handleBack}>Back</Button>
                <Button type="submit">Next</Button>
            </NavigationButtons>
            <FormLink onClick={onResend}>Resend Code</FormLink>
        </Form>
    </Wrapper>
    );
};

const Step3 = ({ setPassword, onSubmit, onBack }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);

    const toggleShowPassword = () => setShowPassword(!showPassword);
    const toggleShowRepeatPassword = () => setShowRepeatPassword(!showRepeatPassword);
    
    return (
    <Wrapper>
        <Logo src={appLogoCompressed} />
        <Title>Set New Password</Title>
        <Form onSubmit={onSubmit}>
            <div style={{ position: 'relative', width: '80%' }}>
                    <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="New Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <IconButton
                        style={{ color: '#040404', cursor: 'pointer', position: 'absolute', right: '-10px', top: '50%', transform: 'translateY(-50%)' }}
                        onClick={toggleShowPassword}
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </div>
            <NavigationButtons>
                <Button type="button" onClick={onBack}>Back</Button>
                <Button type="submit">Submit</Button>
            </NavigationButtons>
        </Form>
    </Wrapper>
)};

// Main component
const PasswordRecovery = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');

    const handleNext = (e) => {
        e.preventDefault();
        setStep((prevStep) => prevStep + 1);
    };

    const handleBack = (e) => {
        e.preventDefault();
        setStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, code, password });
        // Handle form submission (e.g., send data to server)
    };

    return (
        <Container>
            {step === 1 && <Step1 setEmail={setEmail} onNext={handleNext} />}
            {step === 2 && <Step2 setCode={setCode} onNext={handleNext} onBack={handleBack} />}
            {step === 3 && <Step3 setPassword={setPassword} onSubmit={handleSubmit} onBack={handleBack} />}
        </Container>
    );
};

export default PasswordRecovery;

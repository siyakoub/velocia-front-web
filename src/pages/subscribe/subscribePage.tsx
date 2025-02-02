import React, { useState } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import GoogleIcon from '../login/googleIcon.tsx';
import Logo from '../../assets/img/logo/logo1.png';

interface FormElements extends HTMLFormControlsCollection {
    firstName: HTMLInputElement;
    lastName: HTMLInputElement;
    email: HTMLInputElement;
    password: HTMLInputElement;
    confirmPassword: HTMLInputElement;
    persistent: HTMLInputElement;
    accountType: HTMLSelectElement; // Le select sera accessible via son nom
}
interface SignUpFormElement extends HTMLFormElement {
    readonly elements: FormElements;
}

const SubscribePage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent<SignUpFormElement>) => {
        event.preventDefault();
        const formElements = event.currentTarget.elements;
        const data = {
            firstName: formElements.firstName.value,
            lastName: formElements.lastName.value,
            email: formElements.email.value,
            password: formElements.password.value,
            confirmPassword: formElements.confirmPassword.value,
            persistent: formElements.persistent.checked,
            accountType: formElements.accountType.value,
        };
        console.log("Sign up data:", data);
        setSubmitted(true);
    };

    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <GlobalStyles
                styles={{
                    ':root': {
                        '--Form-maxWidth': '800px',
                        '--Transition-duration': '0.4s',
                    },
                }}
            />
            <Box
                sx={{
                    width: { xs: '100%', md: '50vw' },
                    transition: 'width var(--Transition-duration)',
                    transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    backdropFilter: 'blur(12px)',
                    backgroundColor: 'rgba(255 255 255 / 0.2)',
                }}
            >
                {/* Conteneur gauche scrollable */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100vh',
                        width: '100%',
                        px: 2,
                        overflowY: 'auto',
                    }}
                >
                    <Box
                        component="header"
                        sx={{ py: 3, display: 'flex', justifyContent: 'space-between' }}
                    >
                        <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
                            <img src={Logo} alt="Velocia" height={70} />
                        </Box>
                        {/* Vous pouvez ajouter ici un bouton pour accéder à la page de connexion si besoin */}
                    </Box>
                    <Box
                        component="main"
                        sx={{
                            my: 'auto',
                            py: 2,
                            pb: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            width: 400,
                            maxWidth: '100%',
                            mx: 'auto',
                            borderRadius: 'sm',
                            '& form': {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                            },
                            [`& .MuiFormLabel-asterisk`]: {
                                visibility: 'hidden',
                            },
                        }}
                    >
                        <Stack sx={{ gap: 4, mb: 2 }}>
                            <Stack sx={{ gap: 1 }}>
                                <Typography component="h1" level="h3">
                                    Inscription
                                </Typography>
                                <Typography level="body-sm">
                                    Vous avez déjà un compte?{' '}
                                    <Link href="/login" level="title-sm">
                                        Connectez-vous!
                                    </Link>
                                </Typography>
                            </Stack>
                            <Button
                                variant="soft"
                                color="neutral"
                                fullWidth
                                startDecorator={<GoogleIcon />}
                            >
                                Continuer avec Google
                            </Button>
                        </Stack>
                        <Divider
                            sx={{
                                color: { xs: '#FFF', md: 'text.tertiary' },
                            }}
                        >
                            ou
                        </Divider>
                        <Stack sx={{ gap: 4, mt: 2 }}>
                            {submitted ? (
                                <Typography sx={{ mb: 2, textAlign: 'center' }}>
                                    Merci pour votre inscription. Veuillez vérifier votre email pour confirmer votre compte.
                                </Typography>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <Stack spacing={2}>
                                        {/* Ajout du select Joy UI */}
                                        <FormControl required>
                                            <FormLabel>Type de compte</FormLabel>
                                            <Select
                                                defaultValue="client"
                                                name="accountType"
                                                placeholder="Sélectionnez un type de compte"
                                            >
                                                <Option value="client">Compte Client</Option>
                                                <Option value="seller">Compte Vendeur</Option>
                                            </Select>
                                        </FormControl>
                                        <FormControl required>
                                            <FormLabel>Prénom</FormLabel>
                                            <Input name="firstName" placeholder="Entrez votre prénom" />
                                        </FormControl>
                                        <FormControl required>
                                            <FormLabel>Nom</FormLabel>
                                            <Input name="lastName" placeholder="Entrez votre nom" />
                                        </FormControl>
                                        <FormControl required>
                                            <FormLabel>Email</FormLabel>
                                            <Input name="email" type="email" placeholder="Entrez votre email" />
                                        </FormControl>
                                        <FormControl required>
                                            <FormLabel>Mot de passe</FormLabel>
                                            <Input name="password" type="password" placeholder="Entrez votre mot de passe" />
                                        </FormControl>
                                        <FormControl required>
                                            <FormLabel>Confirmer le mot de passe</FormLabel>
                                            <Input name="confirmPassword" type="password" placeholder="Confirmez votre mot de passe" />
                                        </FormControl>
                                        <Stack sx={{ gap: 4, mt: 2 }}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Checkbox size="sm" label="Se souvenir de moi" name="persistent" />
                                            </Box>
                                            <Button type="submit" color="success" fullWidth>
                                                S'inscrire
                                            </Button>
                                        </Stack>
                                    </Stack>
                                </form>
                            )}
                        </Stack>
                    </Box>
                    <Box component="footer" sx={{ py: 3 }}>
                        <Typography level="body-xs" sx={{ textAlign: 'center' }}>
                            © Velocia {new Date().getFullYear()}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    height: '100%',
                    position: 'fixed',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    left: { xs: 0, md: '50vw' },
                    transition:
                        'background-image var(--Transition-duration), left var(--Transition-duration) !important',
                    transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
                    backgroundColor: '#ffffff',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)',
                }}
            />
        </CssVarsProvider>
    );
};

export default SubscribePage;

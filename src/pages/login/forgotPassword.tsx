import React, { useState } from 'react';
import { CssBaseline, Box, Typography, FormControl, FormLabel, Input, Button, Link, Stack } from '@mui/joy';

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Ici, vous pouvez ajouter la logique pour envoyer le lien de réinitialisation
        console.log("Reset email sent to:", email);
        setSubmitted(true);
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(130deg, #e7e7e7, #5cd416)',
            }}
        >
            <CssBaseline />
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 400, // Largeur maximale du formulaire
                    p: 3,
                    borderRadius: 'sm',
                    boxShadow: 'lg',
                    backgroundColor: 'background.body',
                }}
            >
                <Typography component="h1" level="h3" sx={{ mb: 2, textAlign: 'center' }}>
                    Forgot Password
                </Typography>
                {submitted ? (
                    <Typography sx={{ mb: 2, textAlign: 'center' }}>
                        A password reset link has been sent to your email.
                    </Typography>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2}>
                            <FormControl required>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormControl>
                            <Button type="submit" variant="solid" color="success" fullWidth>
                                Send Reset Link
                            </Button>
                            <Typography level="body-sm" sx={{ textAlign: 'center' }}>
                                <Link href="/login">Back to Login</Link>
                            </Typography>
                        </Stack>
                    </form>
                )}
            </Box>
        </Box>
    );
};

export default ForgotPassword;

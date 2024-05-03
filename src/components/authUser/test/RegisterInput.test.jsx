/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterInput from '../RegisterInput';

expect.extend(matchers);

describe('RegisterInput component', ()=> {
    afterEach(()=> {
        cleanup();
    });
    it('should handle name typing correctly', async () => {
        //Arrange
        render(<RegisterInput register={() => {}} />);
        const nameInput = await screen.getByPlaceholderText('Name');

        //Action
        await userEvent.type(nameInput, 'asandy');

        //Assert
        expect(nameInput).toHaveValue('asandy');
    });

    it('should handle email typing correctly', async () => {
        //Arrange
        render(<RegisterInput register={() => {}} />);
        const emailInput = await screen.getByPlaceholderText('Email');

        //Action
        await userEvent.type(emailInput, 'asandy@gmail.com');

        //Assert
        expect(emailInput).toHaveValue('asandy@gmail.com');
    });

    it('should handle password typing correctly', async () => {
        //Arrange
        render(<RegisterInput register={() => {}} />);
        const passwordInput = await screen.getByPlaceholderText('Password');

        //Action
        await userEvent.type(passwordInput, '123456');

        //Assert
        expect(passwordInput).toHaveValue('123456');
    })

    it('should call register function when register button is clicked', async () => {
        //Arrange
        const mockRegister = vi.fn();
        render(<RegisterInput register={mockRegister} />);
        const nameInput = await screen.getByPlaceholderText('Name');
        await userEvent.type(nameInput, 'asandy');
        const emailInput = await screen.getByPlaceholderText('Email');
        await userEvent.type(emailInput, 'asandy@gmail.com');
        const passwordInput = await screen.getByPlaceholderText('Password');
        await userEvent.type(passwordInput, '123456');
        const registerButton = await screen.getByRole('button', { name: 'Register' });
        //Action
        await userEvent.click(registerButton);

        //Assert
        expect(mockRegister).toBeCalledWith({
            name: 'asandy',
            email: 'asandy@gmail.com',
            password: '123456',
        });
    });
});
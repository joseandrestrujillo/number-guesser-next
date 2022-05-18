
import React from 'react'
import { render, screen } from '@testing-library/react'
import Ejemplo from '@/pages/Ejemplo'

test('renders a text', () => {
    const text = "hola"
    const component = render(<Ejemplo text={text}/>)

    component.getByText(text)
})

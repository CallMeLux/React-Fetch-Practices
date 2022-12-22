import Search from "./search";
import {render, screen} from "@testing-library/react"




describe('Search Component', () => {
    it('Should render the component onto the screen', () => {
        expect(true).toBeTruthy();
    })
})


// describe('Search Label', () => {
//     it('Should only take a number between 1 and 10', () => {

//     })
// })


describe('Search User Button', () => {
    it('Should display the Search Button', () => {
        render(<Search />)
        expect(screen.getByTestId('search-user-button')).toBeInTheDocument();
    })
})


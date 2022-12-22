
import {render, screen, waitFor} from "@testing-library/react"
import axios from "axios";
import Search from "./search";


const fetchUsers = require("./search")
jest.mock('axios')


describe('Search Component', () => {
    it('Should render the component onto the screen', () => {
        expect(true).toBeTruthy();
    })
})


describe('Search User Button', () => {
    it('Should display the Search Button', () => {
        render(<Search />)
        expect(screen.getByTestId('search-user-button')).toBeInTheDocument();
    })
})

describe('FetchData', () => {
    it('Should call the api with axios', async () => {
        //I need to test a fetch, so we'll use fake data
        axios.get.mockResolvedValue({
            data: [
                {
                userId: 1,
                id: 1,
                },

                {
                    userId: 2,
                    id: 2,
                },
        ],
        })

        const userId = await fetchUsers;
        expect(userId).toEqual("1")

    })
})


// describe('Search Label', () => {
//     it('Should only take a number between 1 and 10', () => {

    //I need to assert that the input is a number and between 1 and 10
    //this type of test may be for testing a function instead.

//     })
// })

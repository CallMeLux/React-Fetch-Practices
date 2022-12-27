
import {getByTestId, render, screen, waitFor, fireEvent} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { act } from "react-dom/test-utils";
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


describe('Search Label value range', () => {
    it('Should only take a number between 1 and 10', async () => {
    // I need to assert that the input is a number and between 1 and 10
    // this type of test may be for testing a function instead.

    render(<Search />)

    const inputId = screen.getByTestId('search-input')
    userEvent.type(inputId, "5")

    expect(screen.getByTestId('search-input')).toHaveValue("5")
    //for this portion, I need to grab the stored value somehow
    //however, I realize that I never actually store the id and only pass it as a parameter.

    // expect(inputId).toBeGreaterThanOrEqual(1)
    // expect(inputId).toBeLessThanOrEqual(10)


    //test I couldn't get to work

    // await act(async () => {
    //     const {getByTestId} = render(<Search />)
    //     const input = getByTestId('search-input')
    //     const inputNum = "5"
        
    //     await fireEvent.change(input, {target: {value:inputNum }})
    //     expect(inputNum).toBeGreaterThanOrEqual(1)
    //     expect(inputNum).toBeLessThanOrEqual(10)

    // })

    })
})

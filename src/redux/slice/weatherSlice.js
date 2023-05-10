import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const weatherData = createAsyncThunk("weatherData", async (val) => {
    // state.data.push(action.payload)
    const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=1193086c4eb1889bea40ec2ad676b791`)
    return responce.json()
})

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        data: null,
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(weatherData.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(weatherData.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
            // state.push(action.payload)
        })

        builder.addCase(weatherData.rejected, (state, action) => {
            state.isLoading = false
            // state.push(action.payload)
        })
    }

})
export default weatherSlice.reducer
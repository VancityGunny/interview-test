import { api } from "../config/axios.config"

export const useApi = (setLoadingState) => {

    return async (searchName, page = 1) => {
        try {
            setLoadingState(true)
            
            const response = await api.get(null, {
                params: {
                    s: searchName,
                    page
                }
            })
            setLoadingState(false)

            if(!(response.statusText === 'OK')) throw new Error('Server error')
    
            return response.data

        } catch (error) {
            console.log(error);
        }
    }
}
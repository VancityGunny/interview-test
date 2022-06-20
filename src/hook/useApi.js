import { api } from "../config/axios.config"

export const useApi = (setLoadingState) => {

    return async (searchName, page = 1) => {
        try {
            setLoadingState(true)
            
            const response = await api.get(null, {
                params: {
                    query: searchName,
                    page
                }
            })
            setLoadingState(false)

            if(!(response.status === 200)) throw new Error('API Call error')
    
            return response.data

        } catch (error) {
            console.log(error);
        }
    }
}
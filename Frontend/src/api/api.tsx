import axios from 'axios'
import { toast } from "react-hot-toast";

export const getData = async (prompt : string) => {
    try {
        const res = await axios.post(`/api/generatebio`, { text: prompt })
        if (res.status !== 200) {
            toast.error("An error occurred while generating the bio.")
            return;
        }else{
            return res.data.data;
        }
    } catch (error: any) {
        console.log("Error getting", error.message)
    }
}
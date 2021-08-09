import axios from 'axios'

export default axios.create({
    baseURL: "https://indonesiav3-gtgsuc3pkq-de.a.run.app",
    headers: {
      "Content-type": "application/json",
      "authorization": "key"
    }
});
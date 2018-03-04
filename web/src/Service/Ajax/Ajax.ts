type method = "GET"

export default class Ajax {
    public static get(url: string): Promise<XMLHttpRequest> {
        return Ajax.call(url, "GET")
    }

    private static call(url: string, method: method): Promise<XMLHttpRequest> {
        return new Promise((resolve, reject) => {

            const API_URL = url || "http://localhost:4000/get/goals"

            const request = new XMLHttpRequest()
            request.open(method, `${API_URL}`)

            request.addEventListener("load", (event) => {
                if (request.status >= 200 && request.status < 300) {
                    console.log("request successful")
                    resolve(request)
                } else {
                    console.error("request failed")
                    reject(request)
                }
            })

            request.send()
        })
    }
}
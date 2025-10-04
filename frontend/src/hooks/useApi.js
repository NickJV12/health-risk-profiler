import { useState, useRef, useCallback } from 'react'

export default function useApi() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const mountedRef = useRef(true);

    if(typeof window !== 'undefined'){
        window.addEventListener('beforeunload', () => (mountedRef.current = false))
    }

    const call = useCallback(async (fn, { retries = 1 } = {}) => {
        setLoading(true)
        setError(null)

        try {
            let attempt = 0;
            while(attempt <= retries){
                try {
                    const res = await fn()
                    if(mountedRef.current) setData(res?.data ?? res)
                    setLoading(false)
                    return res
                } catch (err) {
                    attempt += 1
                    if(attempt > retries) throw err
                }
            }
        } catch (err) {
            if(mountedRef.current) setError(err)
            setLoading(false)
            throw err
        }
    }, [])

    return { loading, error, data, call, setData, setError }
}
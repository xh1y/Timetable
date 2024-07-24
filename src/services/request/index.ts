/**
 * Create time: 2024 07 22  11:15:23
 * File name: index.tsx
 * Path: src/services/request
 * About:
 */

import axios, { AxiosInstance } from 'axios'
import { BASE_URL, TIMEOUT } from './config.ts'

class MyRequest {
    instance: AxiosInstance
    constructor(baseUrl: string, timeout?: number) {
        this.instance = axios.create({
            baseURL: baseUrl,
            timeout: timeout,
        })

        this.instance.interceptors.response.use(
            (res) => {
                return res.data
            },
            (err) => {
                return err
            }
        )
    }

    request(config: { url: any }) {
        return this.instance.request(config)
    }

    get(config: any = { url: '/' }) {
        return this.request({
            ...config,
            method: 'get',
        })
    }

    post(config: any) {
        return this.request({
            ...config,
            method: 'post',
        })
    }
}

export default new MyRequest(BASE_URL, TIMEOUT)

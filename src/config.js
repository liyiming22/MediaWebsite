import COS from 'cos-js-sdk-v5'
const cos = new COS({
  SecretId: 'AKIDhEWcT6CBhz2qOfRSxB9rJacNs76pYkvs',
  SecretKey: 'tZEgvxnQp1zkIdiX7QTGuIQIuFLBk38x'
})
const API_BASE = 'http://localhost:5000/api/mediaReq'
const mediaSet = new Set(['mp4', 'mkv', 'avi', '3gp', 'mp3', 'wav', 'rmvb'])
export { API_BASE, cos, mediaSet }

export default (item) => {
    let date = new Date(parseInt(time))
    let year = date.getFullYear()
    let month = (date.getMonth() + 1 + '').padStart(2, '0')
    let day = (date.getDate() + '').padStart(2, '0')
    return `${year}-${month}-${day}`
}
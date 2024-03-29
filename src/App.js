import React from 'react'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'
import image from './images/image.png'

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }
    async componentDidMount() {
        const dataFetch = await fetchData()
        this.setState({
            data: dataFetch
        })
    }

    handleCountryChange = async (country) => {
        // console.log(country)
        const fetchedData = await fetchData(country)
        this.setState({
            data: fetchedData,
            country: country
        })
    }

    render() {
        const { data, country } = this.state
        return (
            <div className={styles.container}>
                <img src={image} className={styles.coronaImage} />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App
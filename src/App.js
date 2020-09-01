import React, {Component} from 'react';
import './App.css';
import RTChart from 'react-rt-chart';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            acc: {
                date: new Date(),
                accx: 0,
                accy: 0,
                accz: 0
            },
            rr: {
                date: new Date(),
                rralpha: 0,
                rrbeta: 0,
                rrgamma: 0
            },
            o: {
                date: new Date(),
                oalpha: 0,
                obeta: 0,
                ogamma: 0
            }
        }
    }

    componentDidMount() {
        setInterval(() => this.setState({
            acc: {
                date: new Date(),
                accx: Math.random(),
                accy: Math.random(),
                accz: Math.random()
            },
            rr: {
                date: new Date(),
                rralpha: Math.random(),
                rrbeta: Math.random(),
                rrgamma: Math.random()
            },
            o: {
                date: new Date(),
                oalpha: Math.random(),
                obeta: Math.random(),
                ogamma: Math.random()
            }
        }), 1000);
        /*setInterval(() =>
            fetch('http://localhost:3000/getData')
                .then((res) => {
                    this.setState({
                        acc: {
                            date: new Date(),
                            accx: res.data.accx,
                            accy: res.data.accy,
                            accz: res.data.accz
                        },
                        rr: {
                            date: new Date(),
                            rralpha: res.data.rralpha,
                            rrbeta: res.data.rrbeta,
                            rrgamma: res.data.rrgamma
                        },
                        o: {
                            date: new Date(),
                            oalpha: res.data.oalpha,
                            obeta: res.data.obeta,
                            ogamma: res.data.ogamma
                        }
                    })
                })
                .catch((err) => console.log(err)),
        1000);*/
    }

    render() {
        return (
            <div className="App">
                <div className={'title'}>Mobile sensors values display</div>
                <div className={'chart'}>
                    <div className={'chart-title'}>Acceleration</div>
                    <RTChart
                        fields={['accx', 'accy', 'accz']}
                        data={this.state.acc}
                        flow={200}
                        maxValues={10}
                    />
                </div>
                <div className={'chart'}>
                    <div className={'chart-title'}>Rotation</div>
                    <RTChart
                        fields={['rralpha', 'rrbeta', 'rrgamma']}
                        data={this.state.rr}
                        flow={200}
                        maxValues={10}
                    />
                </div>
                <div className={'chart'}>
                    <div className={'chart-title'}>Orientation</div>
                    <RTChart
                        fields={['oalpha', 'obeta', 'ogamma']}
                        data={this.state.o}
                        flow={200}
                        maxValues={10}
                    />
                </div>
            </div>
        )
    }
}

export default App;

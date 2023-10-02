class Email extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            input: '',
            status: '',
            msg: '',
            display: false
        }

    }

    emailHandle = (e) => {
        this.setState({
            input: e.target.value,
            msg: ''
        })

        const test = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('inputError1').value)
        if (document.getElementById('inputError1').value.length === 0) {
            this.setState({
                status: '',
                msg: ''
            })
        }
        else if (test == false) {
            this.setState({
                status: 'has-error',
                msg: 'Valid email required'
            }) 
            document.getElementById('submit').setAttribute('disabled', 'disabled')
        } else {
            this.setState({
                status: 'has-success',
                msg: ''
            })
            document.getElementById('submit').removeAttribute('disabled', 'disabled')
        } 
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const test = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('inputError1').value)
        // console.log(test)
        if (!test) {
            this.setState({
                status: 'has-error',
                msg: 'Valid email required'
            })
            document.getElementById('submit').setAttribute('disabled', 'disabled')
        } else {
            this.setState({
                display: true
            })
        }
        
    }

    

    render() {
        const info = document.getElementById('design')
        const email = document.getElementById('email')
        const thanks = document.getElementById('thanks')
        if (this.state.display) {
            info.setAttribute('class', 'none')
            thanks.removeAttribute('class')
        } else {
            info.removeAttribute('class')
            thanks.setAttribute('class', 'none')
        }
        return (
            <div>
                {this.state.display ? email.innerHTML = this.state.input : email.innerHTML = ''}
                <form id="form" onSubmit={this.handleSubmit.bind(this)} method='post' >
                <div id="inp" className={this.state.status}>
                    <div className="alert">
                    <label className="em" for="inputError1">Email Address</label>
                    <label className="control-label valid" for="inputError1">{this.state.msg}</label>
                    </div>
                    <input type="email" className="form-control input" id="inputError1"  onChange={this.emailHandle.bind(this)} value={this.state.input} placeholder="email@company.com" />
                    <input id="submit" type="submit" className="btn btn-default btn-block" value="Subscribe to monthly newsletter" />
                </div>
            </form>
            </div>
        )
    }
}


ReactDOM.render(<Email/>, document.getElementById('newsletter'));
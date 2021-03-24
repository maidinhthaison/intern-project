import React, { Component } from 'react';
class CustomerCare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            problems: ''
        }
    }
    onChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    onSubmit(event) {
        event.preventDefault();

    }
    render() {
        return (
            <div className="ve">
                <div className="introduce">
                    <h2> Chào mừng bạn tham gia gia đình của Cát Hòa's mobile !! </h2>
                    <h3> Đây là trang thông tin hỗ trợ khách hàng </h3>
                </div>
                <div className="dangnhap">
                    <form onSubmit={this.onSubmit} className="login">
                        <p> What's wrong with you ?</p>
                        <br/>
                        <textarea id="service"onChange={this.onChange} placeholder="text here"> </textarea>
                        <button className="action"> Send Us </button>
                    </form>                 
                </div>

            </div>
        )
    }
}
export default CustomerCare
import {Component} from "react";

import './employers-add-form.css';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    // Для оптимизации записи кода:
    // Ниже у нас два инпута, которые принимают значения name и salary.
    // Эти два инпута по сути одинаковые, различие только в их значении. 
    // Т.к. инпуты одинаковы, создадим для них один метод. Для того, чтобы в state записывались корректно значения из инпутов
    // ниже прописаны дополнительно аттрибут name со значением name и salary.
    //  В setState используем event.target.name для записи его значения, которое варьируется в зависимости от инпута, в свойство state.
    // И записываем значение инпута e.target.value в свойство state
    // Квадратные скобки [e.target.name] - это ES6-синтаксис для записи свойств, которые являются составными (из нескольких частей, записанных через точку)
    onValueChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary); //Отправляем "наверх" данные из state, в котором уже содержатся данные после выполнения метода onValueChange() 
           
        // setState возвращает об'ект с пустыми name и salary.
        // Делается для того, чтобы после отправки формы поля очищались, 
        // так как идет двухстороннее связывание стэйта и атрибутов value. 
        // А данные уходят "наверх" при помощи метода onAdd
        this.setState({
            name: '',
            salary: ''
        })
        
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        onChange={this.onValueChange}                        
                        name="name"
                        value={name}/> 
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        onChange={this.onValueChange}
                        name="salary"
                        value={salary}/>
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;


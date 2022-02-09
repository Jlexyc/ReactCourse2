import React, { Component } from 'react'

import './TodoItem.css'

export class TodoItem extends Component {
  constructor(props) {
    super(props);
    // const title = props.item.title;
    // const description = props.item.description;
    // Деструкция, вытаскиваем title & description в переменные из props.item
    // const { title, description } = props.item;
    
    // this.state = {
    //   title: title || '',
    //   description: description || '',
    // }

    // Тут привязываем контекст this к функции. Если этого не сделать и вызвать из другого места, то контекста не будет или он будет другим.
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
  }

  onTitleChange(event) {
    this.props.onTitleChange(event.target.value);
    // this.setState({ title: event.target.value });
  }

  onDescriptionChange(event) {
    this.props.onDescriptionChange(event.target.value);
    // this.setState({ description: event.target.value });
  }

  render() {
    return (
      <div className='main'>
        <input value={this.props.item.title} onChange={this.onTitleChange} />
        <input value={this.props.item.description} onChange={this.onDescriptionChange} />
        <button onClick={this.props.onShowItem}>Show</button>
      </div>
    )
  }
}

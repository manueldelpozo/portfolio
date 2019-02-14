import React from 'react'
import { connect } from 'react-redux'
import { addWork } from '../redux/actions'

class AddWork extends React.Component {
    handleAddWork = () => {
        // dispatches actions to add todo
        this.props.addTodo(this.state.input)
    
        // sets state back to empty string
        this.setState({ input: '' })
      }
    
      render() {
        return (
          <div>
            <input
              onChange={e => this.updateInput(e.target.value)}
              value={this.state.input}
            />
            <button className="add-todo" onClick={this.handleAddWork}>
              Add Work
            </button>
          </div>
        )
      }
}

export default connect(
  null,
  { addWork }
)(AddWork)
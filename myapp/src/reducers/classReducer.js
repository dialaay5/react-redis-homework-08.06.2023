const init_state ={
    my_classes: [],
    classById: [],
    my_students: []
  }

  const classReducer = (state = init_state , action) => {
    if (action.type === 'save_classes_data') {
        console.log(state);
        console.log(action);
      return {
        ...state,
        my_classes: action.getList,
      }
    }

    else if (action.type === 'class_By_Id') {
        console.log(state);
        console.log(action);
        return {
            ...state,
            classById: {...action.getClass}
        }
      }

      else if (action.type === 'studint_List_By_Id') {
        console.log(state);
        console.log(action);
        return {
            ...state,
            my_students: [...action.getStudentList]
        }
      }
    return state;
  }

  export default classReducer;
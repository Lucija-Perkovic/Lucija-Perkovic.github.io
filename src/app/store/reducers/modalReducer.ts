import { type CustomAction } from '../actions/uiActions'
import { CLOSE_MODAL, OPEN_MODAL } from '../actions/modalActions'

export interface ModalState {
  showModal: boolean
}

const initialState: ModalState = {
  showModal: false
}

const modalReducer = (state: ModalState | undefined, action: CustomAction): ModalState => {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        showModal: true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false
      }
    default:
      return state
  }
}

export default modalReducer

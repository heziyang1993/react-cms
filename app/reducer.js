export default function counter(state = {
  
}, action) {
  switch (action.type) {
    case 'changeTab':
      return {
        count: count + 2
      }
    default:
      return state
  }
}

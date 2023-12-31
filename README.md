# What i aim to achieve
```In state management we always aim to have an organized state management and ensuring dataflow between components```
## We aim to
- Have state structure
- Have update state Logic maintainable
- Sharing state Betwwen Distant components using "Lifting state up"

### What we will cover with code
- Reacting to input with state
```We always aim to avoid having function on disable enables on success and error message```
- State Structure
```This help keeping our code DRY Don't REpeat Yourself```
- Sharing state Between components
``` when components are to react the same time to a state it's best to remove state and take it to the nearest parent they share```
- Preserving and resetting state
``` React needs to know what to update what to recreate from scratch, what to discard and what should remain as it is```
- Extracting state logic to reducer
``` State management can be overwhelming if you have lots of state updates across many event handlers for this you put together all the state update outside the component into a single function we call this funcion a reducer it is a pure function. the event handlers become concise because they focus on actions while the reducer function focuses on how state should update```


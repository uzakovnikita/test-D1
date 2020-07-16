interface State {
    state: {
        mouseEnter: string;
    } 
}
export const useMovieItem = (obj: State) => {
    const state = obj.state;
    const enter = () => {
        state.mouseEnter = 'enter';
    }
    const leave = () => {
        state.mouseEnter = 'leave';
    }
    return {enter, leave}
}
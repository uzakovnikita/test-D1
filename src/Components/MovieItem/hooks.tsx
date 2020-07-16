interface State {
    state: {
        mouseEnter: string;
    } 
}
export const useMovieItem = (obj: State) => {
    const state = obj.state;
    const onMouseEnter = () => {
        state.mouseEnter = 'enter';
    }
    const onMouseLeave = () => {
        state.mouseEnter = 'leave';
    }
    return {onMouseEnter, onMouseLeave}
}
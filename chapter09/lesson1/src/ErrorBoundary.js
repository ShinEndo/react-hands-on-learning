import React, {Component} from "react";



export default class ErrorBoundary extends Component {
    state = {error:null};

    static getDerivedStateFromError(error){
        return {error}
    }

    render() {
        const {error} = this.state;
        const {children, fallback} = this.props;

        if (error && !fallback) return <ErrorScreen error={error} />;
        if (error) return fallback({error});
        return children;
    }
}

function ErrorScreen({error}) {
    //
    // ここで描画前にエラーオブジェクトの内容をチェックもしくは加工できます
    //
    return (
        <div className="error">
            <h3>We are sorry... something went wrong</h3>
            <p>We cannot process your request at this moment.</p>
            <p>ERROR: {error.message}</p>
        </div>
    )
}

export const BreakThings = () => {
    throw new Error("We intentionally broke something");
}
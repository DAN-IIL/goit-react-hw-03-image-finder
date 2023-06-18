import { Component } from "react"
import { ModalOrevlay, ModalWindow } from "./Modal.styled"
import PropTypes from "prop-types"

export class Modal extends Component {
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = e => {
        const { close} = this.props;
            if (e.key === "Escape") {
            close(false);
        }
    };

     render() {
        const { largeImageURL, tags, escapeFromModal } = this.props;
        return (
            <ModalOrevlay id="modal" onClick={escapeFromModal}>
                <ModalWindow src={largeImageURL} alt={tags} />
            </ModalOrevlay>
    )
    }
}

Modal.propTypes = {
    srcLarge: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    escapeFromModal: PropTypes.func.isRequired,
    handleOnKeyDown: PropTypes.func.isRequired,
}
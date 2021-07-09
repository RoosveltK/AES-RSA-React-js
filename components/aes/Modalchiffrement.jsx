import React from "react";
import { Button, Modal } from "react-bootstrap";
import AesCtr from "../../public/AesCtr";

export default class Modalchiffrement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      show: false,
      clef: "",
      message: "",
    };
  }
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  handleCrypt = (event) => {
    event.preventDefault();

    if (this.state.clef != "" && this.state.message != "") {
      this.setState({ isLoading: true });
      const Msg = AesCtr.encrypt(this.state.message, this.state.clef, 256);
      setTimeout(() => {
        this.handleClose();
        this.setState({ isLoading: false });
      }, 2000);
      this.props.recup(Msg);
    }
  };

  render() {
    return (
      <>
        <button className="btn btnChif" onClick={this.handleShow}>
          Chiffrer
        </button>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header className="color-titre-ajout" closeButton>
            <Modal.Title className="colorTitre">CHIFFREMENT</Modal.Title>
          </Modal.Header>
          <Modal.Body className="cardTocrypt textColorModal">
            <div className="modal-form">
              <form>
                <div>
                  <label>Entrez la clef</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    onChange={(e) => this.setState({ clef: e.target.value })}
                  />
                </div>
                <div>
                  <label>Entrez le message </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    onChange={(e) => this.setState({ message: e.target.value })}
                    required
                  />
                </div>

                <div className="btnModal">
                  <button className="btn btnAll" onClick={this.handleClose}>
                    Fermer
                  </button>
                  {this.state.isLoading == true ? (
                    <button
                      type="submit"
                      disabled
                      className="btn color-titre-ajout"
                    >
                      Patientez ...
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={this.handleCrypt}
                      className="btn btnAll"
                    >
                      Valider
                    </button>
                  )}
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

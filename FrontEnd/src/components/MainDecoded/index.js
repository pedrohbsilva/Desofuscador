import React, { useState } from "react";
import api from "../../services/api";
import { GrDocumentUpload } from "react-icons/gr";
import { Container } from "./style";


export default function MainDecoded() {
  const [encoded, setEncoded] = useState("");
  const [decoded, setDecoded] = useState("");
  const [formDecode, setFormDecode] = useState(0);

  async function decodeText(event) {
    event.preventDefault();
      try {
        const decode = await api.post("/decode/text", { encoded });
        setFormDecode(1);
        setDecoded(decode.data);
      } catch (error) {
        alert(error.response.data.message);
    }
  }

  return (
    <Container>
        
        <h1><span>Desofusque</span> sua String aqui!</h1>

        <div className="desofuscador">

            <div className="upload-file">
                <form action="http://localhost:3333/decode/upload" method="POST" encType="multipart/form-data">
                    <p>
                        A partir de arquivo texto:
                    </p>
                    <input 
                        type="file" 
                        id="attachment" 
                        name="attachment" 
                        required={true} 
                        multiple 
                    />
                    <button type="submit" className="icon">
                        <GrDocumentUpload className="upload" />
                    </button>

                </form>
            </div>

            <div className="upload-string">
                <form onSubmit={decodeText}>
                    <p>
                        A partir de Strings:
                    </p>

                    <input
                        type="text"
                        placeholder="Informe o texto"
                        value={encoded}
                        required={true}
                        onChange={(event) => setEncoded(event.target.value)}
                    />

                    <button type="submit">Desofuscar</button>
                </form>
            </div>
            
        </div>

        <div className="resultado-string" >
            {formDecode === 0 ? "" :
                <div className="form">
                    <h2>Resultado: </h2>

                    <form>
                        <h4>
                            {decoded}
                        </h4>
                    </form>
                </div>
            }
        </div>

    </Container>
  );
}

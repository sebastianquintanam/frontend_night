import { useParams } from "react-router-dom";
import { getUsuario } from "../../js/getData";
import { estadoPrincipal, setEstadoPrincipal } from "../../js/global";

function EliminarUsuario(props) {
    let { idUsuario } = useParams();
    let usuario = getUsuario(idUsuario);
    setEstadoPrincipal({
        name: "N/A - " + estadoPrincipal.name,
        auhtenticated: false,
    });
    return (
        <div className="col-12 w-75 mx-auto">
            <h3>Pagina: Eliminar Usuario{estadoPrincipal.name}</h3>
            <form>
                <div class="row g-3">
                    <div class="">
                        <label for="identifier" class="form-label">
                            Id
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="identifier"
                            defaultValue={usuario.id}
                            required={true}
                            readOnly={true}
                        />
                    </div>

                    <div class="">
                        <label for="firstName" class="form-label">
                            Nombre Persona
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="firstName"
                            placeholder="Nombre de la persona"
                            defaultValue={usuario.firstName}
                            required={true}
                            minLength={4}
                            readOnly={true}
                        />
                    </div>

                    <div class="col-12">
                        <label for="username" class="form-label">
                            Nombre de Usuario
                        </label>
                        <div class="input-group has-validation">
                            <span class="input-group-text">@</span>
                            <input
                                type="text"
                                class="form-control"
                                id="username"
                                placeholder="Username"
                                defaultValue={usuario.username}
                                required={true}
                                minLength={4}
                                readOnly={true}
                            />
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="email" class="form-label">
                            Correo
                        </label>
                        <input
                            type={"email"}
                            class="form-control"
                            id="email"
                            placeholder="ejemplo@dominio.com"
                            defaultValue={usuario.email}
                            required={true}
                            readOnly={true}
                        />
                    </div>

                    <div class="col-12">
                        <label for="password" class="form-label">
                            Contrasena
                        </label>
                        <input
                            type={"password"}
                            class="form-control"
                            id="password"
                            defaultValue={usuario.password}
                            required={true}
                            readOnly={true}
                        />
                    </div>

                    <hr class="my-4" />

                    <button
                        class="w-100 btn btn-outline-danger btn-lg"
                        type="submit"
                        onClick={onClickSubmit}
                    >
                        Eliminar
                    </button>
                </div>
            </form>
        </div>
    );
}

function onClickSubmit(e) {
    e.preventDefault();
    console.log(e);
}

export default EliminarUsuario;
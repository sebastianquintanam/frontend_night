function LoginView(props) {
    return (
        <div className="w-75 mx-auto">
            <div
                class="text-center"
                data-new-gr-c-s-check-loaded="14.1085.0"
                data-gr-ext-installed=""
            >
                <main class="form-signin w-100 m-auto">
                    <form>
                        <img
                            class="mb-4"
                            src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
                            alt=""
                            width="72"
                            height="57"
                        />
                        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                        <div class="form-floating my-3">
                            <input
                                type="email"
                                class="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                            />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating my-3">
                            <input
                                type="password"
                                class="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                            />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <button
                            class="w-100 btn btn-lg btn-primary my-3"
                            type="button"
                        >
                            Sign in
                        </button>
                        <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
                    </form>
                </main>
            </div>
        </div>
    );
}

export default LoginView;

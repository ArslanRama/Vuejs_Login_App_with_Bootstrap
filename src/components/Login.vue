//! Creating a user login UI
/* It contains some strong web development fundamentals such as creating HTML forms, routing to navigate to some other screen, and two-way data-binding to extract the data from the login form. */

<template>
  <div class="row">
    <div class="col-md-6 mx-auto p-0">
      <!-- My login and sign up card -->
      <div class="card">
        <div class="login-box">
          <div class="login-snip">
               <h2 class="text-uppercase">My Mill</h2>
            <input
              id="tab-1"
              type="radio"
              name="tab"
              class="sign-in"
              checked
            /><label for="tab-1" class="tab">Login</label>
            <input id="tab-2" type="radio" name="tab" class="sign-up" /><label
              for="tab-2"
              class="tab"
              >Sign Up</label
            >
            <!-- Login Part -->
            <div class="login-space">
              <div class="login">
                <div class="group">
                  <label for="email" class="label">E-mail</label>
                  <input
                    id="email"
                    type="text"
                    class="input"
                    placeholder="Enter your email address"
                  />
                </div>
                <!-- PASSWORD -->
                <div class="group">
                  <label for="pass" class="label">Password</label>
                  <input
                    v-bind:type="[showPassword ? 'text' : 'password']"
                    id="pass"
                    class="input"
                    placeholder="Enter your password"
                  />
                  <div class="input-group-append">
                    <p
                      class="input-group-text"
                      @click="showPassword = !showPassword"
                    >
                      <i
                        class="fa"
                        :class="[showPassword ? 'fa-eye' : 'fa-eye-slash']"
                        aria-hidden="true"
                      ></i>
                    </p>
                  </div>
                </div>
                <div class="group">
                    <br> <br>
                  <input id="check" type="checkbox" class="check"  />
                  <label for="check"
                    ><span class="icon"></span> I agree to the <a href="#">Terms and Conditions</a></label
                  >
                </div>
                <!-- Reset Password -->
                <div class="group">
                  <input type="submit" class="button" value="Log In" />
                </div>
                <div class="hr"></div>
                <div class="foot">
                  <div class="foot">Forgot Password? <a href="#"> <u>Recover here</u>  <i class="fa fa-lock" aria-hidden="true"></i></a></div>
                </div>
              </div>
              <!-- Sign up Part -->
              <div class="sign-up-form">
                <div class="group">
                  <label for="user" class="label">Username</label>
                  <input
                    id="user"
                    type="text"
                    class="input"
                    placeholder="Create your Username"
                  />
                </div>
                <div class="group">
                  <label for="pass" class="label">Password</label>
                  <input
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                    placeholder="Create your password"
                  />
                </div>
                <div class="group">
                  <label for="pass" class="label">Repeat Password</label>
                  <input
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                    placeholder="Repeat your password"
                  />
                </div>
                <div class="group">
                  <label for="pass" class="label">E-mail </label>
                  <input
                    id="pass"
                    type="text"
                    class="input"
                    placeholder="Enter your email address"
                  />
                </div>
                <div class="group">
                  <input type="submit" class="button" value="Sign Up" />
                </div>
                <div class="hr"></div>
                <div class="foot">
                  <label for="tab-1">Already Member?</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
    };
  },
};
</script>
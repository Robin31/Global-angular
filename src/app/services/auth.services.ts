export class AuthServices {
  isAuth = false;
  signIn() {
    this.isAuth = true;
    // return new Promise(
    //   () => {
    //     setTimeout(
    //       () => {
    //         this.isAuth = true;
    //         (true);
    //       },
    //     )
    //   }
    // )
  }

  signOut() {
    this.isAuth = false!;
  }
}
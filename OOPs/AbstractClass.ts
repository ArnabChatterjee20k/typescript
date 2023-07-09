abstract class PhotoApp {
  protected username: string;

  constructor(username: string) {
    this.username = username;
  }

  abstract capturePhoto(): void; // this method must be implemented in the childs

  savePhoto(photo: string): void {
    console.log("saved!");
  }
}

class Insta extends PhotoApp {
  capturePhoto(): void {
    console.log("capturing...");
  }

  //   overriding
  savePhoto(photo: string): void {
    console.log("saving in insta");
  }
}

class Snap extends PhotoApp {
  constructor(username: string, id: number) {
    super(username);
  }

  capturePhoto(): void {
    console.log("capturing with filters");
  }
}

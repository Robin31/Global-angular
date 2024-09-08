export class ChienServices {
  chiens = [
    {
      id: 1,
      name: 'Nemo',
      status: 'gueri'
    },
    {
      id: 2,
      name: 'Boghor',
      status: 'gueri'
    },
    {
      id: 3,
      name: 'Sochs',
      status: 'malade'
    }
  ];

  getChiensById(id: number) {
    const chien = this.chiens.find(
      (chiensObject) => {
        return chiensObject.id === id;
      }
    );
    return chien;
  }

  switchOfAll() {
    for (let chien of this.chiens) {
      chien.status = "malade"
    }
  }

  switchOnAll() {
    for (let chien of this.chiens) {
      chien.status = "gueri"
    }
  }

  switchOnOne(index: number) {
    this.chiens[index].status = "malade";
  }

  switchOfOne(index: number) {
    this.chiens[index].status = "gueri";
  }
}
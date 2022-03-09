export class Reverse {
  interval!: ReturnType<typeof setInterval>;
  toolItem!: HTMLElement;

  reverse(i: number, j: number) {
    this.interval = setInterval(() => {
      if (i < 1) {
        i = 6;
        clearInterval(this.interval);
        return;
      }
      if (j > 3) {
        j = 1;
      }

      this.style([[i, j]]);
      i = i - 1;
    }, 100);
  }

  style(items: number[][]) {
    for (let item of items) {
      this.toolItem = document.getElementById(
        `tool-item-${item[0]}-${item[1]}`
      )!;

      this.toolItem.setAttribute('class', 'tool-item lighted-item');
    }
    let lightedItems = document.querySelectorAll('.lighted-item');

    setTimeout(() => {
      lightedItems.forEach((item) => {
        item.setAttribute('class', 'tool-item');
      });
    }, 200);
  }
}

export class BtnAnimation {
  addStyle() {
    setInterval(() => {
      let rev1 = new Reverse();
      let rev2 = new Reverse();
      let rev3 = new Reverse();

      rev1.reverse(6, 1);
      rev2.reverse(6, 2);
      rev3.reverse(6, 3);
    }, 3000);
  }
}

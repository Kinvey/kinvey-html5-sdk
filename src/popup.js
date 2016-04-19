/**
 * @private
 */
export class Popup {
  open(url = '/') {
    const promise = new Promise((resolve, reject) => {
      this.popup = global.open(url, '_blank', 'toolbar=no,location=no');

      if (this.popup) {
        this.interval = setInterval(() => {
          if (this.popup.closed) {
            this.closeHandler();
          } else {
            try {
              this.loadHandler({
                url: this.popup.location.href
              });
            } catch (e) {
              // catch any errors due to cross domain issues
            }
          }
        }, 100);
      } else {
        return reject(new Error('The popup was blocked.'));
      }

      return resolve(this);
    });

    return promise;
  }

  close() {
    const promise = new Promise(resolve => {
      if (this.popup) {
        this.popup.close();
      }
      resolve();
    });
    return promise;
  }

  loadHandler(event) {
    this.emit('loaded', event.url);
  }

  clickHandler() {
    this.close();
  }

  closeHandler() {
    clearTimeout(this.interval);
    this.emit('closed');
  }
}

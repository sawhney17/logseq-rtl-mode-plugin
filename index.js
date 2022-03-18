import "@logseq/libs";

// const settings = [{}]

function checkKeyboard(e){
    console.log(e.keyCode);
    console.log(e)
    if (e.code == 'ArrowRight') {
      console.log("you are mean")
            // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent
            const keyboardEvent = new KeyboardEvent('keydown', {
                key: 'ArrowLeft',
                keyCode: 37,
                bubbles: false,
                cancelable: false,
                shiftKey: false,
                ctrlKey: false,
                altKey: false,
                metaKey: false,
            });
  
            // https://stackoverflow.com/a/44190874/12101554
            // replace `document` with a specific element if you want to do a specific
            top.dispatchEvent(keyboardEvent)
            top.dispatchEvent(keyboardEvent);};
            if (e.code == 'ArrowLeft') {
              console.log("you are nice")
            // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent
            const keyboardEvent = new KeyboardEvent('keydown', {
                key: 'ArrowRight',
                keyCode: 39,
                bubbles: false,
                cancelable: false,
                shiftKey: false,
                ctrlKey: false,
                altKey: false,
                metaKey: false,
            });
  
            // https://stackoverflow.com/a/44190874/12101554
            // replace `document` with a specific element if you want to do a specific
            top.dispatchEvent(keyboardEvent)
            top.dispatchEvent(keyboardEvent);};
}
const main = async () => {
  // logseq.useSettings
  var isOn = true;
  logseq.provideModel({
    toggleRTL() {
      if (isOn) {
        logseq.provideStyle({
          key: `mainStyle`,
          style: `.block-children-left-border {
        z-index: 1;
        right: 36px;
        top: 0;
        height: 100%;
        cursor: pointer;
        background-clip: content-box;
        position: absolute;
        border-radius: 2px;
    }
    .block-children {
      border-left: 0px;
      border-right: 1px solid;
      border-right-color: var(--ls-guideline-color,#ddd);
      margin-left: 0px;
      margin-right: 37px;
      display: inline !important;
  }
  .block-content-wrapper {
      margin-right: 5px;
  }
  .content {
    direction: rtl;
  }
  .ls-page-title.title {
    direction: rtl;
}
    `,
        });
        isOn = false;
        logseq.App.registerUIItem("toolbar", {
          key: "toggleRTLbtn",
          template: `
            <a class="button" data-on-click="toggleRTL">
              <i class="ti ti-toggle-right"></i>
            </a>
          `,

          
        });

        top.addEventListener('keydown', checkKeyboard);
        
        // Your TamperMonkey script starts here
      } else {
        // removeEventListener()
        //remove event listener
        top.removeEventListener('keydown', checkKeyboard);
        console.log("removal")
        logseq.provideStyle({
          key: "mainStyle",
          style: `.block-children-left-border {
      }
      .block-children {
    }
    .block-content-wrapper {
    }
    .content {
    }
    .ls-page-title.title {
      direction: rtl;
    }
      `,
        });
        isOn = true;
        logseq.App.registerUIItem("toolbar", {
          key: "toggleRTLbtn",
          template: `
            <a class="button" data-on-click="toggleRTL">
              <i class="ti ti-toggle-left"></i>
            </a>
          `,
        });
      }
    },
  });
  logseq.App.registerUIItem("toolbar", {
    key: "toggleRTLbtn",
    template: `
      <a class="button" data-on-click="toggleRTL">
        <i class="ti ti-toggle-left"></i>
      </a>
    `,
  });
};

logseq.ready(main).catch(console.error);


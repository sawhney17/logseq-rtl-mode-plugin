import "@logseq/libs";
import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin.user";

function checkKeyboard(e) {
  if (e.code == "ArrowRight") {
    // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent
    const keyboardEvent = new KeyboardEvent("keydown", {
      key: "ArrowLeft",
      keyCode: 37,
      bubbles: false,
      cancelable: false,
      shiftKey: false,
      ctrlKey: false,
      altKey: false,
      metaKey: false,
    });

    // https://stackoverflow.com/a/44190874/12101554
    top?.dispatchEvent(keyboardEvent);
    top?.dispatchEvent(keyboardEvent);
  }
  if (e.code == "ArrowLeft") {
    // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent
    const keyboardEvent = new KeyboardEvent("keydown", {
      key: "ArrowRight",
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
    top?.dispatchEvent(keyboardEvent);
    top?.dispatchEvent(keyboardEvent);
  }
}
const main = async () => {
  
const settings: SettingSchemaDesc[] = [
  {
    key: "rtlKeyBinding",
    type: "string",
    default: "mod+shift+t",
    description: "Key binding to toggle RTL Mode",
    title: "Keybinding"
  },
]

logseq.useSettingsSchema(settings)
  const toggleRTLMode=() => {
    if (isOn) {
      logseq.provideStyle({
        key: `mainStyle`,
        style: `.block-children-left-border {
      z-index: 1;
      right: 36px;
      top?: 0;
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

      top?.addEventListener("keydown", checkKeyboard);

    } else {
      top?.removeEventListener("keydown", checkKeyboard);
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
  }
  var isOn = true;
  logseq.provideModel({
    toggleRTL() {
      toggleRTLMode();
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

  logseq.App.registerCommandPalette(
    {
      key: "toggleRTL",
      label: "Toggle RTL mode",
      keybinding: {
        binding: `${logseq.settings?.rtlKeyBinding}`
      }
    },
    toggleRTLMode
  )
};

logseq.ready(main).catch(console.error);

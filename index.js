import "@logseq/libs";

// const settings = [{}]

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
      } else {
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

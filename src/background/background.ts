const sendClickMessage = async (): Promise<void> => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0].id) {
      chrome.tabs.sendMessage(tabs[0].id, {});
    }
  });
};

const addContextMenu = (): void => {
  chrome.contextMenus.create({
    title: "今日の予定をコピーする",
    type: "normal",
    contexts: ["all"],
    onclick: sendClickMessage,
  });
};

((): void => {
  addContextMenu();
})();

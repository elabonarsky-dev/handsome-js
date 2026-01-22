const { exec } = require("child_process");

exec("taskmgr", (error) => {
  if (error) {
    console.error("Failed to open Task Manager:", error);
  }
});
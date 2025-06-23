// Helper function to add visible logs to the page
function addLogToPage(message: string) {
  console.log(message);
  const logDiv = document.createElement("div");
  logDiv.textContent = message;
  logDiv.style.border = "1px solid #3498db";
  logDiv.style.borderLeft = "5px solid #2980b9";
  logDiv.style.margin = "5px";
  logDiv.style.padding = "8px";
  logDiv.style.backgroundColor = "#f8f9fa";
  logDiv.style.fontFamily = "monospace";
  // Add to element with id 'log-container'
  const logContainer = document.getElementById("log-container");
  if (logContainer) {
    logContainer.appendChild(logDiv);
  }
}

/**
 * Logger decorator for methods
 */
export function Logger(
  _target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  // Replace the original method with our wrapped version
  descriptor.value = function (...args: any[]) {
    console.log(`[Logger] 🟣 Applying Logger decorator to: ${propertyKey}`);

    addLogToPage(
      `[Logger] 🚀 Starting: ${propertyKey}(args: ${JSON.stringify(args)})`
    );
    const result = originalMethod.apply(this, args);
    addLogToPage(`[Logger] ✅ Completed: ${propertyKey}`);
    return result;
  };

  return descriptor;
}

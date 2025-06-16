// This is a simpler test to check if decorators are working

// Function to add visible logs to the page
function addLogToPage(message: string) {
  console.log(message);
  const logDiv = document.createElement("div");
  logDiv.textContent = message;
  logDiv.style.border = "1px solid black";
  logDiv.style.margin = "5px";
  logDiv.style.padding = "5px";
  document.body.appendChild(logDiv);
}

function SimpleDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  addLogToPage("DECORATOR APPLIED TO: " + propertyKey);

  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    addLogToPage(
      "BEFORE METHOD CALL: " + propertyKey + ", args: " + JSON.stringify(args)
    );
    const result = original.apply(this, args);
    addLogToPage("AFTER METHOD CALL: " + propertyKey);
    return result;
  };
}

export class TestClass {
  @SimpleDecorator
  testMethod(message: string) {
    console.log("INSIDE METHOD:", message);
    return message;
  }
}

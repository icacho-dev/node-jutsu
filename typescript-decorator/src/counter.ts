/**
 * Logger Decorator - logs method execution with visual feedback
 *
 * This decorator can be applied to any method to log when the method starts and finishes execution.
 */

import { Logger } from "./logger.decorator";

export class Counter {
  private counter = 0;
  private element: HTMLButtonElement | null = null;

  setupCounter(element: HTMLButtonElement) {
    this.element = element;
    element.addEventListener("click", () => this.incrementCounter());
    this.updateDisplay();
  }

  @Logger
  incrementCounter() {
    this.counter += 1;
    this.updateDisplay();
  }

  private updateDisplay() {
    if (this.element) {
      this.element.innerHTML = `count is ${this.counter}`;
    }
  }
}

import { BasePage } from './base/BasePage.js';

/**
 * Page object representing the Sauce Demo login page.
 * Mirrors the instructions defined in `.context/instructions/pages/login-page.md`.
 */
export class LoginPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    // Input fields
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    // Buttons
    this.loginBtn = page.locator('[data-test="login-button"]');
    // Error handling
    this.errorMsg = page.locator('[data-test="error"]');
    this.errorDismissBtn = page.locator('.error-button');
  }

  /** Fill the username field */
  async enterUsername(username) {
    await this.usernameInput.fill(username);
    return this;
  }

  /** Fill the password field */
  async enterPassword(password) {
    await this.passwordInput.fill(password);
    return this;
  }

  /** Click the login button */
  async submit() {
    await this.loginBtn.click();
    return this;
  }

  /** Convenience method to login with credentials */
  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.submit();
    return this;
  }

  /** Dismiss the error message */
  async dismissError() {
    await this.errorDismissBtn.click();
    return this;
  }

  /** Get the current error message text */
  async getErrorMessage() {
    return this.errorMsg.textContent();
  }

  /** Check if the error container is visible */
  async isErrorVisible() {
    return await this.errorMsg.isVisible();
  }
}

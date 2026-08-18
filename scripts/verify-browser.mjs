import { chromium } from '@playwright/test';

console.log('Testing Playwright browser automation on http://localhost:4173...');

try {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });

  const title = await page.title();
  console.log('Page Title:', title);

  // Scroll through page
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);

  // Take full page screenshot
  await page.screenshot({ path: 'browser-verification.png', fullPage: true });

  console.log('Console Errors Count:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.log('Console Errors:', consoleErrors);
  }

  await browser.close();
  console.log('SUCCESS: Playwright browser automation test completed seamlessly!');
} catch (err) {
  console.error('Browser test error:', err.message);
  process.exit(1);
}

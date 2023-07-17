import { test, expect } from '@playwright/test';

 

test('test', async ({ page }) => {
  await page.goto("https://test3.jeeni.in/aarumbh37_test");
  await page.waitForRequest("https://test3.jeeni.in/aarumbh37_test/assets/aasests/images/final_logo.png");
  await page.keyboard.press("Control+a");
  await page.keyboard.type("nishant@perceptcs.com");
  await page.keyboard.press("Tab");
  await page.keyboard.type("abcd");
  for (let i = 0; i < 3; i++) { await page.keyboard.press("Tab"); }
  await page.keyboard.press("Enter");
})
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
});

test('Clear button', async ({ page }) => {
  page.getByText('1 + 1');
  await page.click('.btnClear');
  const result = await page.textContent('.screen');
  expect(result).toBe('0');
});

test('Equal button', async ({ page }) => {
    page.getByText('1 + 1');
    await page.click('.btnEqual');
    const result = await page.textContent('.screen');
    expect(result).toBe('2');
});

/*
    Les additions ne fonctionnent pas correctement, il faut corriger le code de src/App.tsx
    Les soustractions ne fonctionnent pas correctement, il faut corriger le code de src/App.tsx

    Les tests ne sont pas complets, il manque des tests pour les opérations de multiplication et de division
*/
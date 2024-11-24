import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("/");
});

test("Page loads", async ({ page }) => {
    await expect(page).toHaveTitle(/Experiments from Modern Physics/);
    await expect(page.getByRole("heading", { name: "Experiments from Modern Physics" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "All Experiments" })).toBeVisible();
});

test("Search for an experiment", async ({ page }) => {
    await page.getByPlaceholder("Search experiments...").fill("No results");

    await expect(page.getByRole("button", { name: "Watch" })).not.toBeVisible();
    await expect(page.locator("#root")).toContainText("Showing 0 of 33");

    await page.getByPlaceholder("Search experiments...").fill("Third Law");

    await expect(page.getByRole("button", { name: "Watch (51s)" })).toBeVisible();
    await expect(page.locator("#root")).toContainText("Showing 1 of 33");
});

test("Search shortcut", async ({ page }) => {
    await page.keyboard.press("ControlOrMeta+K");

    await expect(page.getByPlaceholder("Search experiments...")).toBeFocused();
});

test("Github link", async ({ page }) => {
    const link = page.getByRole("link", { name: "Punit Turlapati" });
    await expect(link).toBeVisible();

    await link.click();
    const newPage = await page.waitForEvent("popup");
    await expect(newPage).toHaveURL("https://github.com/TheBobTheBlob/Experiments-from-Modern-Physics");
});

test("Youtube video link", async ({ page }) => {
    await page.getByRole("button", { name: "Watch (51s)" }).click();
    const newPage = await page.waitForEvent("popup");

    await expect(newPage).toHaveURL("https://www.youtube.com/watch?v=ruBfXIVSYZ8&feature=youtu.be");
});

test("Youtube channel link", async ({ page }) => {
    await page.getByText("The PhysicsMaths Wizard").click();
    const newPage = await page.waitForEvent("popup");

    await expect(newPage).toHaveURL("https://www.youtube.com/@ThePhysicsMathsWizard");
});

test.describe("Filtering by chapter", () => {
    test.afterEach(async ({ page }) => {
        await expect(page.getByRole("heading", { name: "Chapter 11 Experiments" })).toBeVisible();
        await expect(page.getByRole("button", { name: "Clear filter" })).toBeVisible();

        await expect(page.locator("#root")).toContainText("Showing 1 of 33");
    });

    test("Chapter sidebar filter", async ({ page }) => {
        await page.getByRole("button", { name: "Semiconductor Theory" }).click();
    });

    test("Chapter pill filter", async ({ page }) => {
        await page.getByText("Chapter 11").click();
    });
});

test.describe("Clearing chapter filter", () => {
    test.beforeEach(async ({ page }) => {
        await page.getByRole("button", { name: "Semiconductor Theory" }).click();
    });

    test.afterEach(async ({ page }) => {
        await expect(page.getByRole("heading", { name: "All Experiments" })).toBeVisible();
        await expect(page.locator("#root")).toContainText("Showing 33 of 33");
    });

    test("Clear filter button", async ({ page }) => {
        await page.getByRole("button", { name: "Clear filter" }).click();
    });

    test("Logo", async ({ page }) => {
        await page.getByRole("img", { name: "logo" }).click();
    });

    test("Sidebar buttton again", async ({ page }) => {
        await page.getByRole("button", { name: "Semiconductor Theory" }).click();
    });
});

import { SupArticleCategoryClient } from "../../../packages/sdk/src/clients/support/SupArticleCategoryClient";

describe("SupArticleCategory SDK Client Integration Matrix", () => {
  const client = new SupArticleCategoryClient("test-api-key");

  test("fetches single SupArticleCategory via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("support");
  });

  test("lists SupArticleCategory entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

import { DocStorageBucketClient } from "../../../packages/sdk/src/clients/documents/DocStorageBucketClient";

describe("DocStorageBucket SDK Client Integration Matrix", () => {
  const client = new DocStorageBucketClient("test-api-key");

  test("fetches single DocStorageBucket via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("documents");
  });

  test("lists DocStorageBucket entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

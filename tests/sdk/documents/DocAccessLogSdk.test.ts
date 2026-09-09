import { DocAccessLogClient } from "../../../packages/sdk/src/clients/documents/DocAccessLogClient";

describe("DocAccessLog SDK Client Integration Matrix", () => {
  const client = new DocAccessLogClient("test-api-key");

  test("fetches single DocAccessLog via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("documents");
  });

  test("lists DocAccessLog entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

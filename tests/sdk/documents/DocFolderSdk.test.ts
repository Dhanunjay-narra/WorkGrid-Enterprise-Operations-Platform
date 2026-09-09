import { DocFolderClient } from "../../../packages/sdk/src/clients/documents/DocFolderClient";

describe("DocFolder SDK Client Integration Matrix", () => {
  const client = new DocFolderClient("test-api-key");

  test("fetches single DocFolder via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("documents");
  });

  test("lists DocFolder entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

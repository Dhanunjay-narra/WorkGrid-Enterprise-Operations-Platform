import { DocDocumentPermissionClient } from "../../../packages/sdk/src/clients/documents/DocDocumentPermissionClient";

describe("DocDocumentPermission SDK Client Integration Matrix", () => {
  const client = new DocDocumentPermissionClient("test-api-key");

  test("fetches single DocDocumentPermission via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("documents");
  });

  test("lists DocDocumentPermission entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

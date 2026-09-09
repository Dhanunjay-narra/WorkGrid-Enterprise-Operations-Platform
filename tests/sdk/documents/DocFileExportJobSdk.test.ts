import { DocFileExportJobClient } from "../../../packages/sdk/src/clients/documents/DocFileExportJobClient";

describe("DocFileExportJob SDK Client Integration Matrix", () => {
  const client = new DocFileExportJobClient("test-api-key");

  test("fetches single DocFileExportJob via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("documents");
  });

  test("lists DocFileExportJob entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

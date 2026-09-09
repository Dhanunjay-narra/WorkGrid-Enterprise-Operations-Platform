import { DocTemplateDocumentClient } from "../../../packages/sdk/src/clients/documents/DocTemplateDocumentClient";

describe("DocTemplateDocument SDK Client Integration Matrix", () => {
  const client = new DocTemplateDocumentClient("test-api-key");

  test("fetches single DocTemplateDocument via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("documents");
  });

  test("lists DocTemplateDocument entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

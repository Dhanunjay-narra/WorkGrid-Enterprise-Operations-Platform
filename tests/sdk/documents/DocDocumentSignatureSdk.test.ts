import { DocDocumentSignatureClient } from "../../../packages/sdk/src/clients/documents/DocDocumentSignatureClient";

describe("DocDocumentSignature SDK Client Integration Matrix", () => {
  const client = new DocDocumentSignatureClient("test-api-key");

  test("fetches single DocDocumentSignature via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("documents");
  });

  test("lists DocDocumentSignature entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

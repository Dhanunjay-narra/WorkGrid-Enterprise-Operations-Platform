import { DocOcrExtractedDataClient } from "../../../packages/sdk/src/clients/documents/DocOcrExtractedDataClient";

describe("DocOcrExtractedData SDK Client Integration Matrix", () => {
  const client = new DocOcrExtractedDataClient("test-api-key");

  test("fetches single DocOcrExtractedData via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("documents");
  });

  test("lists DocOcrExtractedData entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

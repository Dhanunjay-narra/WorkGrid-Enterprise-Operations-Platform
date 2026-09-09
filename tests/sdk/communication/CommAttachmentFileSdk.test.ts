import { CommAttachmentFileClient } from "../../../packages/sdk/src/clients/communication/CommAttachmentFileClient";

describe("CommAttachmentFile SDK Client Integration Matrix", () => {
  const client = new CommAttachmentFileClient("test-api-key");

  test("fetches single CommAttachmentFile via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("communication");
  });

  test("lists CommAttachmentFile entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

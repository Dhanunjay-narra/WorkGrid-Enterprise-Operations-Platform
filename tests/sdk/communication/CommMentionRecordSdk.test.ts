import { CommMentionRecordClient } from "../../../packages/sdk/src/clients/communication/CommMentionRecordClient";

describe("CommMentionRecord SDK Client Integration Matrix", () => {
  const client = new CommMentionRecordClient("test-api-key");

  test("fetches single CommMentionRecord via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("communication");
  });

  test("lists CommMentionRecord entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

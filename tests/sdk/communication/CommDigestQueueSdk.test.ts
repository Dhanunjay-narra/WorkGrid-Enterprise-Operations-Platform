import { CommDigestQueueClient } from "../../../packages/sdk/src/clients/communication/CommDigestQueueClient";

describe("CommDigestQueue SDK Client Integration Matrix", () => {
  const client = new CommDigestQueueClient("test-api-key");

  test("fetches single CommDigestQueue via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("communication");
  });

  test("lists CommDigestQueue entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

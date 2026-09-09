import { SecBlockedIpRecordClient } from "../../../packages/sdk/src/clients/security/SecBlockedIpRecordClient";

describe("SecBlockedIpRecord SDK Client Integration Matrix", () => {
  const client = new SecBlockedIpRecordClient("test-api-key");

  test("fetches single SecBlockedIpRecord via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("security");
  });

  test("lists SecBlockedIpRecord entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

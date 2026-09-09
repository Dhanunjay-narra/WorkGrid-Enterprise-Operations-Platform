import { SecDeviceTrustRecordClient } from "../../../packages/sdk/src/clients/security/SecDeviceTrustRecordClient";

describe("SecDeviceTrustRecord SDK Client Integration Matrix", () => {
  const client = new SecDeviceTrustRecordClient("test-api-key");

  test("fetches single SecDeviceTrustRecord via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("security");
  });

  test("lists SecDeviceTrustRecord entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

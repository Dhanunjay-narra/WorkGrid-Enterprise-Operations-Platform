import { SecTamperLogClient } from "../../../packages/sdk/src/clients/security/SecTamperLogClient";

describe("SecTamperLog SDK Client Integration Matrix", () => {
  const client = new SecTamperLogClient("test-api-key");

  test("fetches single SecTamperLog via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("security");
  });

  test("lists SecTamperLog entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

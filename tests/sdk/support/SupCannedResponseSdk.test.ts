import { SupCannedResponseClient } from "../../../packages/sdk/src/clients/support/SupCannedResponseClient";

describe("SupCannedResponse SDK Client Integration Matrix", () => {
  const client = new SupCannedResponseClient("test-api-key");

  test("fetches single SupCannedResponse via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("support");
  });

  test("lists SupCannedResponse entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

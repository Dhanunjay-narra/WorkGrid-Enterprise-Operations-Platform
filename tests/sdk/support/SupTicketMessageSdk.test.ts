import { SupTicketMessageClient } from "../../../packages/sdk/src/clients/support/SupTicketMessageClient";

describe("SupTicketMessage SDK Client Integration Matrix", () => {
  const client = new SupTicketMessageClient("test-api-key");

  test("fetches single SupTicketMessage via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("support");
  });

  test("lists SupTicketMessage entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

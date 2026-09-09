import { SupTicketTagClient } from "../../../packages/sdk/src/clients/support/SupTicketTagClient";

describe("SupTicketTag SDK Client Integration Matrix", () => {
  const client = new SupTicketTagClient("test-api-key");

  test("fetches single SupTicketTag via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("support");
  });

  test("lists SupTicketTag entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

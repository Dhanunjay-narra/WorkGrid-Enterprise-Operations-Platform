import { SupTicketClient } from "../../../packages/sdk/src/clients/support/SupTicketClient";

describe("SupTicket SDK Client Integration Matrix", () => {
  const client = new SupTicketClient("test-api-key");

  test("fetches single SupTicket via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("support");
  });

  test("lists SupTicket entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

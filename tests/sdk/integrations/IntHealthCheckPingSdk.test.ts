import { IntHealthCheckPingClient } from "../../../packages/sdk/src/clients/integrations/IntHealthCheckPingClient";

describe("IntHealthCheckPing SDK Client Integration Matrix", () => {
  const client = new IntHealthCheckPingClient("test-api-key");

  test("fetches single IntHealthCheckPing via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("integrations");
  });

  test("lists IntHealthCheckPing entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

import { IntConnectorConfigClient } from "../../../packages/sdk/src/clients/integrations/IntConnectorConfigClient";

describe("IntConnectorConfig SDK Client Integration Matrix", () => {
  const client = new IntConnectorConfigClient("test-api-key");

  test("fetches single IntConnectorConfig via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("integrations");
  });

  test("lists IntConnectorConfig entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

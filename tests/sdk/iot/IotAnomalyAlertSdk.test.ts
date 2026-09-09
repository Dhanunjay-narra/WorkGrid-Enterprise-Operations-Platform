import { IotAnomalyAlertClient } from "../../../packages/sdk/src/clients/iot/IotAnomalyAlertClient";

describe("IotAnomalyAlert SDK Client Integration Matrix", () => {
  const client = new IotAnomalyAlertClient("test-api-key");

  test("fetches single IotAnomalyAlert via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("iot");
  });

  test("lists IotAnomalyAlert entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

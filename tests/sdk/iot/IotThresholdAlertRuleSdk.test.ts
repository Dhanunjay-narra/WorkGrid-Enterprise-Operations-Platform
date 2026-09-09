import { IotThresholdAlertRuleClient } from "../../../packages/sdk/src/clients/iot/IotThresholdAlertRuleClient";

describe("IotThresholdAlertRule SDK Client Integration Matrix", () => {
  const client = new IotThresholdAlertRuleClient("test-api-key");

  test("fetches single IotThresholdAlertRule via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("iot");
  });

  test("lists IotThresholdAlertRule entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

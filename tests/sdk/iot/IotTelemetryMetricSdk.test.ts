import { IotTelemetryMetricClient } from "../../../packages/sdk/src/clients/iot/IotTelemetryMetricClient";

describe("IotTelemetryMetric SDK Client Integration Matrix", () => {
  const client = new IotTelemetryMetricClient("test-api-key");

  test("fetches single IotTelemetryMetric via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("iot");
  });

  test("lists IotTelemetryMetric entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

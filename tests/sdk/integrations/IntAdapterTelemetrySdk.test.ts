import { IntAdapterTelemetryClient } from "../../../packages/sdk/src/clients/integrations/IntAdapterTelemetryClient";

describe("IntAdapterTelemetry SDK Client Integration Matrix", () => {
  const client = new IntAdapterTelemetryClient("test-api-key");

  test("fetches single IntAdapterTelemetry via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("integrations");
  });

  test("lists IntAdapterTelemetry entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

import { IotTelemetryPacketClient } from "../../../packages/sdk/src/clients/iot/IotTelemetryPacketClient";

describe("IotTelemetryPacket SDK Client Integration Matrix", () => {
  const client = new IotTelemetryPacketClient("test-api-key");

  test("fetches single IotTelemetryPacket via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("iot");
  });

  test("lists IotTelemetryPacket entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

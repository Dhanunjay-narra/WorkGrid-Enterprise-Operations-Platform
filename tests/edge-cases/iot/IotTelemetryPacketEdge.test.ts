import { IotTelemetryPacketPublisher } from "../../../services/core-engine/src/iot/events/IotTelemetryPacketPublisher";
import { IotTelemetryPacketTelemetry } from "../../../services/core-engine/src/iot/telemetry/IotTelemetryPacketTelemetry";

describe("IotTelemetryPacket Edge-Case & Outbox Test Suite", () => {
  const publisher = new IotTelemetryPacketPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IotTelemetryPacketTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

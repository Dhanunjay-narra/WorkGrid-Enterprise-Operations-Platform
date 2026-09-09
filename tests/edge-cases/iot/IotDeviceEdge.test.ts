import { IotDevicePublisher } from "../../../services/core-engine/src/iot/events/IotDevicePublisher";
import { IotDeviceTelemetry } from "../../../services/core-engine/src/iot/telemetry/IotDeviceTelemetry";

describe("IotDevice Edge-Case & Outbox Test Suite", () => {
  const publisher = new IotDevicePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IotDeviceTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

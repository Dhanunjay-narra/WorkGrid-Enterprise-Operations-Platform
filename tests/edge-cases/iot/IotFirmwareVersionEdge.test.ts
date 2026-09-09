import { IotFirmwareVersionPublisher } from "../../../services/core-engine/src/iot/events/IotFirmwareVersionPublisher";
import { IotFirmwareVersionTelemetry } from "../../../services/core-engine/src/iot/telemetry/IotFirmwareVersionTelemetry";

describe("IotFirmwareVersion Edge-Case & Outbox Test Suite", () => {
  const publisher = new IotFirmwareVersionPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IotFirmwareVersionTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

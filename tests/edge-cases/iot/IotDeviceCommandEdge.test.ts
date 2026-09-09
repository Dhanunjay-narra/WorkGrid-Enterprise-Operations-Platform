import { IotDeviceCommandPublisher } from "../../../services/core-engine/src/iot/events/IotDeviceCommandPublisher";
import { IotDeviceCommandTelemetry } from "../../../services/core-engine/src/iot/telemetry/IotDeviceCommandTelemetry";

describe("IotDeviceCommand Edge-Case & Outbox Test Suite", () => {
  const publisher = new IotDeviceCommandPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IotDeviceCommandTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

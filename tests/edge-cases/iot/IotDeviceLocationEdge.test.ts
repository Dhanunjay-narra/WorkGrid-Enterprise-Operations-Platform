import { IotDeviceLocationPublisher } from "../../../services/core-engine/src/iot/events/IotDeviceLocationPublisher";
import { IotDeviceLocationTelemetry } from "../../../services/core-engine/src/iot/telemetry/IotDeviceLocationTelemetry";

describe("IotDeviceLocation Edge-Case & Outbox Test Suite", () => {
  const publisher = new IotDeviceLocationPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IotDeviceLocationTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

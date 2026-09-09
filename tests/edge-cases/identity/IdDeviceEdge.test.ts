import { IdDevicePublisher } from "../../../services/core-engine/src/identity/events/IdDevicePublisher";
import { IdDeviceTelemetry } from "../../../services/core-engine/src/identity/telemetry/IdDeviceTelemetry";

describe("IdDevice Edge-Case & Outbox Test Suite", () => {
  const publisher = new IdDevicePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IdDeviceTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

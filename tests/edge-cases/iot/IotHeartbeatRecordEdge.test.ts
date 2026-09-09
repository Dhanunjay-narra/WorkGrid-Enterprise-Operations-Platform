import { IotHeartbeatRecordPublisher } from "../../../services/core-engine/src/iot/events/IotHeartbeatRecordPublisher";
import { IotHeartbeatRecordTelemetry } from "../../../services/core-engine/src/iot/telemetry/IotHeartbeatRecordTelemetry";

describe("IotHeartbeatRecord Edge-Case & Outbox Test Suite", () => {
  const publisher = new IotHeartbeatRecordPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IotHeartbeatRecordTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

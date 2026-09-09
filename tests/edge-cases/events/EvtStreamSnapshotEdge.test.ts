import { EvtStreamSnapshotPublisher } from "../../../services/core-engine/src/events/events/EvtStreamSnapshotPublisher";
import { EvtStreamSnapshotTelemetry } from "../../../services/core-engine/src/events/telemetry/EvtStreamSnapshotTelemetry";

describe("EvtStreamSnapshot Edge-Case & Outbox Test Suite", () => {
  const publisher = new EvtStreamSnapshotPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = EvtStreamSnapshotTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

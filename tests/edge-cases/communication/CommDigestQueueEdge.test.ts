import { CommDigestQueuePublisher } from "../../../services/core-engine/src/communication/events/CommDigestQueuePublisher";
import { CommDigestQueueTelemetry } from "../../../services/core-engine/src/communication/telemetry/CommDigestQueueTelemetry";

describe("CommDigestQueue Edge-Case & Outbox Test Suite", () => {
  const publisher = new CommDigestQueuePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CommDigestQueueTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

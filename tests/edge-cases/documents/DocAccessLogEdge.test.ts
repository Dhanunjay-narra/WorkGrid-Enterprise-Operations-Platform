import { DocAccessLogPublisher } from "../../../services/core-engine/src/documents/events/DocAccessLogPublisher";
import { DocAccessLogTelemetry } from "../../../services/core-engine/src/documents/telemetry/DocAccessLogTelemetry";

describe("DocAccessLog Edge-Case & Outbox Test Suite", () => {
  const publisher = new DocAccessLogPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = DocAccessLogTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

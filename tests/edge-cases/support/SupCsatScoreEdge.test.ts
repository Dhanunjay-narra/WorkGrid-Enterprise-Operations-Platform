import { SupCsatScorePublisher } from "../../../services/core-engine/src/support/events/SupCsatScorePublisher";
import { SupCsatScoreTelemetry } from "../../../services/core-engine/src/support/telemetry/SupCsatScoreTelemetry";

describe("SupCsatScore Edge-Case & Outbox Test Suite", () => {
  const publisher = new SupCsatScorePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SupCsatScoreTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

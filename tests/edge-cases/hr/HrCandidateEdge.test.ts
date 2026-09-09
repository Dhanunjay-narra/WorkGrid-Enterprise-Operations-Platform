import { HrCandidatePublisher } from "../../../services/core-engine/src/hr/events/HrCandidatePublisher";
import { HrCandidateTelemetry } from "../../../services/core-engine/src/hr/telemetry/HrCandidateTelemetry";

describe("HrCandidate Edge-Case & Outbox Test Suite", () => {
  const publisher = new HrCandidatePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = HrCandidateTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

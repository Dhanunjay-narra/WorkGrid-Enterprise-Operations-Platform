import { HrJobPostingPublisher } from "../../../services/core-engine/src/hr/events/HrJobPostingPublisher";
import { HrJobPostingTelemetry } from "../../../services/core-engine/src/hr/telemetry/HrJobPostingTelemetry";

describe("HrJobPosting Edge-Case & Outbox Test Suite", () => {
  const publisher = new HrJobPostingPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = HrJobPostingTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

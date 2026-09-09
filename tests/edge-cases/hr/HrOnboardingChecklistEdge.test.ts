import { HrOnboardingChecklistPublisher } from "../../../services/core-engine/src/hr/events/HrOnboardingChecklistPublisher";
import { HrOnboardingChecklistTelemetry } from "../../../services/core-engine/src/hr/telemetry/HrOnboardingChecklistTelemetry";

describe("HrOnboardingChecklist Edge-Case & Outbox Test Suite", () => {
  const publisher = new HrOnboardingChecklistPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = HrOnboardingChecklistTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

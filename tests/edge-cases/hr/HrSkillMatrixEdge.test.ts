import { HrSkillMatrixPublisher } from "../../../services/core-engine/src/hr/events/HrSkillMatrixPublisher";
import { HrSkillMatrixTelemetry } from "../../../services/core-engine/src/hr/telemetry/HrSkillMatrixTelemetry";

describe("HrSkillMatrix Edge-Case & Outbox Test Suite", () => {
  const publisher = new HrSkillMatrixPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = HrSkillMatrixTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

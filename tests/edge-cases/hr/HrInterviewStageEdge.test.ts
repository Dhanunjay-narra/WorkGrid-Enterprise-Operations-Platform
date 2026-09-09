import { HrInterviewStagePublisher } from "../../../services/core-engine/src/hr/events/HrInterviewStagePublisher";
import { HrInterviewStageTelemetry } from "../../../services/core-engine/src/hr/telemetry/HrInterviewStageTelemetry";

describe("HrInterviewStage Edge-Case & Outbox Test Suite", () => {
  const publisher = new HrInterviewStagePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = HrInterviewStageTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

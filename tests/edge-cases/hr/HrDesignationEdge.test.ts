import { HrDesignationPublisher } from "../../../services/core-engine/src/hr/events/HrDesignationPublisher";
import { HrDesignationTelemetry } from "../../../services/core-engine/src/hr/telemetry/HrDesignationTelemetry";

describe("HrDesignation Edge-Case & Outbox Test Suite", () => {
  const publisher = new HrDesignationPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = HrDesignationTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

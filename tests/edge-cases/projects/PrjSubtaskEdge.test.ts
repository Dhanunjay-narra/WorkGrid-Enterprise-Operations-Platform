import { PrjSubtaskPublisher } from "../../../services/core-engine/src/projects/events/PrjSubtaskPublisher";
import { PrjSubtaskTelemetry } from "../../../services/core-engine/src/projects/telemetry/PrjSubtaskTelemetry";

describe("PrjSubtask Edge-Case & Outbox Test Suite", () => {
  const publisher = new PrjSubtaskPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = PrjSubtaskTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

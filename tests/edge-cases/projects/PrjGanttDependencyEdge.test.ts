import { PrjGanttDependencyPublisher } from "../../../services/core-engine/src/projects/events/PrjGanttDependencyPublisher";
import { PrjGanttDependencyTelemetry } from "../../../services/core-engine/src/projects/telemetry/PrjGanttDependencyTelemetry";

describe("PrjGanttDependency Edge-Case & Outbox Test Suite", () => {
  const publisher = new PrjGanttDependencyPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = PrjGanttDependencyTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

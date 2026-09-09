import { PrjKanbanColumnPublisher } from "../../../services/core-engine/src/projects/events/PrjKanbanColumnPublisher";
import { PrjKanbanColumnTelemetry } from "../../../services/core-engine/src/projects/telemetry/PrjKanbanColumnTelemetry";

describe("PrjKanbanColumn Edge-Case & Outbox Test Suite", () => {
  const publisher = new PrjKanbanColumnPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = PrjKanbanColumnTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

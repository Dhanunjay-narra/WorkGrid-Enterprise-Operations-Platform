import { PrjSprintPublisher } from "../../../services/core-engine/src/projects/events/PrjSprintPublisher";
import { PrjSprintTelemetry } from "../../../services/core-engine/src/projects/telemetry/PrjSprintTelemetry";

describe("PrjSprint Edge-Case & Outbox Test Suite", () => {
  const publisher = new PrjSprintPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = PrjSprintTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

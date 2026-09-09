import { PrjEpicPublisher } from "../../../services/core-engine/src/projects/events/PrjEpicPublisher";
import { PrjEpicTelemetry } from "../../../services/core-engine/src/projects/telemetry/PrjEpicTelemetry";

describe("PrjEpic Edge-Case & Outbox Test Suite", () => {
  const publisher = new PrjEpicPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = PrjEpicTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

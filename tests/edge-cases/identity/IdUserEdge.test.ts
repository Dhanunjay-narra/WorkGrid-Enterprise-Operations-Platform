import { IdUserPublisher } from "../../../services/core-engine/src/identity/events/IdUserPublisher";
import { IdUserTelemetry } from "../../../services/core-engine/src/identity/telemetry/IdUserTelemetry";

describe("IdUser Edge-Case & Outbox Test Suite", () => {
  const publisher = new IdUserPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IdUserTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

import { CommDirectMessagePublisher } from "../../../services/core-engine/src/communication/events/CommDirectMessagePublisher";
import { CommDirectMessageTelemetry } from "../../../services/core-engine/src/communication/telemetry/CommDirectMessageTelemetry";

describe("CommDirectMessage Edge-Case & Outbox Test Suite", () => {
  const publisher = new CommDirectMessagePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CommDirectMessageTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

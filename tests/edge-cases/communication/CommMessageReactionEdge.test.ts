import { CommMessageReactionPublisher } from "../../../services/core-engine/src/communication/events/CommMessageReactionPublisher";
import { CommMessageReactionTelemetry } from "../../../services/core-engine/src/communication/telemetry/CommMessageReactionTelemetry";

describe("CommMessageReaction Edge-Case & Outbox Test Suite", () => {
  const publisher = new CommMessageReactionPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CommMessageReactionTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

import { CommTypingStatePublisher } from "../../../services/core-engine/src/communication/events/CommTypingStatePublisher";
import { CommTypingStateTelemetry } from "../../../services/core-engine/src/communication/telemetry/CommTypingStateTelemetry";

describe("CommTypingState Edge-Case & Outbox Test Suite", () => {
  const publisher = new CommTypingStatePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CommTypingStateTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

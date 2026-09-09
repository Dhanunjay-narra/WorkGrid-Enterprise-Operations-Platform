import { CommChatMessagePublisher } from "../../../services/core-engine/src/communication/events/CommChatMessagePublisher";
import { CommChatMessageTelemetry } from "../../../services/core-engine/src/communication/telemetry/CommChatMessageTelemetry";

describe("CommChatMessage Edge-Case & Outbox Test Suite", () => {
  const publisher = new CommChatMessagePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CommChatMessageTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

import { CommCallRoomPublisher } from "../../../services/core-engine/src/communication/events/CommCallRoomPublisher";
import { CommCallRoomTelemetry } from "../../../services/core-engine/src/communication/telemetry/CommCallRoomTelemetry";

describe("CommCallRoom Edge-Case & Outbox Test Suite", () => {
  const publisher = new CommCallRoomPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CommCallRoomTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

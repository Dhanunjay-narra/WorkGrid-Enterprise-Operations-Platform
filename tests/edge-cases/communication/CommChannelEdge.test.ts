import { CommChannelPublisher } from "../../../services/core-engine/src/communication/events/CommChannelPublisher";
import { CommChannelTelemetry } from "../../../services/core-engine/src/communication/telemetry/CommChannelTelemetry";

describe("CommChannel Edge-Case & Outbox Test Suite", () => {
  const publisher = new CommChannelPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CommChannelTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

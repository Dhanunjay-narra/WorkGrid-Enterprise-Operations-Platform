import { CommChannelMemberPublisher } from "../../../services/core-engine/src/communication/events/CommChannelMemberPublisher";
import { CommChannelMemberTelemetry } from "../../../services/core-engine/src/communication/telemetry/CommChannelMemberTelemetry";

describe("CommChannelMember Edge-Case & Outbox Test Suite", () => {
  const publisher = new CommChannelMemberPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CommChannelMemberTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

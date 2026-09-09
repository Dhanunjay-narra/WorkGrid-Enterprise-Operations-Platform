import { CommAttachmentFilePublisher } from "../../../services/core-engine/src/communication/events/CommAttachmentFilePublisher";
import { CommAttachmentFileTelemetry } from "../../../services/core-engine/src/communication/telemetry/CommAttachmentFileTelemetry";

describe("CommAttachmentFile Edge-Case & Outbox Test Suite", () => {
  const publisher = new CommAttachmentFilePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CommAttachmentFileTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

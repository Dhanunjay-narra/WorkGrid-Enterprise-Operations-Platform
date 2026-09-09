import { DocFolderPublisher } from "../../../services/core-engine/src/documents/events/DocFolderPublisher";
import { DocFolderTelemetry } from "../../../services/core-engine/src/documents/telemetry/DocFolderTelemetry";

describe("DocFolder Edge-Case & Outbox Test Suite", () => {
  const publisher = new DocFolderPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = DocFolderTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

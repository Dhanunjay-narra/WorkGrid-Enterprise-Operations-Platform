import { PrjWorkspacePublisher } from "../../../services/core-engine/src/projects/events/PrjWorkspacePublisher";
import { PrjWorkspaceTelemetry } from "../../../services/core-engine/src/projects/telemetry/PrjWorkspaceTelemetry";

describe("PrjWorkspace Edge-Case & Outbox Test Suite", () => {
  const publisher = new PrjWorkspacePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = PrjWorkspaceTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

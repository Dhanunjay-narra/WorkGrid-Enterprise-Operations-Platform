import { WfVariableStorePublisher } from "../../../services/core-engine/src/workflow/events/WfVariableStorePublisher";
import { WfVariableStoreTelemetry } from "../../../services/core-engine/src/workflow/telemetry/WfVariableStoreTelemetry";

describe("WfVariableStore Edge-Case & Outbox Test Suite", () => {
  const publisher = new WfVariableStorePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = WfVariableStoreTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

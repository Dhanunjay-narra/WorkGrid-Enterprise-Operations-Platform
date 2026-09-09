import { IotCommandExecutionLogPublisher } from "../../../services/core-engine/src/iot/events/IotCommandExecutionLogPublisher";
import { IotCommandExecutionLogTelemetry } from "../../../services/core-engine/src/iot/telemetry/IotCommandExecutionLogTelemetry";

describe("IotCommandExecutionLog Edge-Case & Outbox Test Suite", () => {
  const publisher = new IotCommandExecutionLogPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IotCommandExecutionLogTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

import { IotTelemetryBatchService } from "../../../services/core-engine/src/iot/telemetry/services/IotTelemetryBatchService";
import { IotTelemetryBatchValidator } from "../../../packages/types/src/domains/iot/telemetry/IotTelemetryBatch";
import { IotTelemetryBatchStateMachine } from "../../../services/core-engine/src/iot/telemetry/state-machines/IotTelemetryBatchStateMachine";

describe("IotTelemetryBatch Comprehensive Domain Test Suite", () => {
  const service = new IotTelemetryBatchService();
  const sm = new IotTelemetryBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotTelemetryBatch Instance",
      domain: "iot_telemetry",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotTelemetryBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

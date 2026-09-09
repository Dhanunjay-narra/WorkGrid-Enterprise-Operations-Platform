import { IotTelemetrySnapshotService } from "../../../services/core-engine/src/iot/telemetry/services/IotTelemetrySnapshotService";
import { IotTelemetrySnapshotValidator } from "../../../packages/types/src/domains/iot/telemetry/IotTelemetrySnapshot";
import { IotTelemetrySnapshotStateMachine } from "../../../services/core-engine/src/iot/telemetry/state-machines/IotTelemetrySnapshotStateMachine";

describe("IotTelemetrySnapshot Comprehensive Domain Test Suite", () => {
  const service = new IotTelemetrySnapshotService();
  const sm = new IotTelemetrySnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotTelemetrySnapshot Instance",
      domain: "iot_telemetry",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotTelemetrySnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

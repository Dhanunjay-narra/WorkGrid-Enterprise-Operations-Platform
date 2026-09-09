import { IotTelemetryStateService } from "../../../services/core-engine/src/iot/telemetry/services/IotTelemetryStateService";
import { IotTelemetryStateValidator } from "../../../packages/types/src/domains/iot/telemetry/IotTelemetryState";
import { IotTelemetryStateStateMachine } from "../../../services/core-engine/src/iot/telemetry/state-machines/IotTelemetryStateStateMachine";

describe("IotTelemetryState Comprehensive Domain Test Suite", () => {
  const service = new IotTelemetryStateService();
  const sm = new IotTelemetryStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotTelemetryState Instance",
      domain: "iot_telemetry",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotTelemetryStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

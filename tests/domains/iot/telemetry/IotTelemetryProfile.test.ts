import { IotTelemetryProfileService } from "../../../services/core-engine/src/iot/telemetry/services/IotTelemetryProfileService";
import { IotTelemetryProfileValidator } from "../../../packages/types/src/domains/iot/telemetry/IotTelemetryProfile";
import { IotTelemetryProfileStateMachine } from "../../../services/core-engine/src/iot/telemetry/state-machines/IotTelemetryProfileStateMachine";

describe("IotTelemetryProfile Comprehensive Domain Test Suite", () => {
  const service = new IotTelemetryProfileService();
  const sm = new IotTelemetryProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotTelemetryProfile Instance",
      domain: "iot_telemetry",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotTelemetryProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

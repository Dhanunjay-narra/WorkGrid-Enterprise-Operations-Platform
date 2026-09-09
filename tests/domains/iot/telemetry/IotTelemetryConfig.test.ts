import { IotTelemetryConfigService } from "../../../services/core-engine/src/iot/telemetry/services/IotTelemetryConfigService";
import { IotTelemetryConfigValidator } from "../../../packages/types/src/domains/iot/telemetry/IotTelemetryConfig";
import { IotTelemetryConfigStateMachine } from "../../../services/core-engine/src/iot/telemetry/state-machines/IotTelemetryConfigStateMachine";

describe("IotTelemetryConfig Comprehensive Domain Test Suite", () => {
  const service = new IotTelemetryConfigService();
  const sm = new IotTelemetryConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotTelemetryConfig Instance",
      domain: "iot_telemetry",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotTelemetryConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

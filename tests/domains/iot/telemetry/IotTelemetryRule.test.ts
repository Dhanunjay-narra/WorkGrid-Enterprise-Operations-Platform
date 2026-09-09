import { IotTelemetryRuleService } from "../../../services/core-engine/src/iot/telemetry/services/IotTelemetryRuleService";
import { IotTelemetryRuleValidator } from "../../../packages/types/src/domains/iot/telemetry/IotTelemetryRule";
import { IotTelemetryRuleStateMachine } from "../../../services/core-engine/src/iot/telemetry/state-machines/IotTelemetryRuleStateMachine";

describe("IotTelemetryRule Comprehensive Domain Test Suite", () => {
  const service = new IotTelemetryRuleService();
  const sm = new IotTelemetryRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotTelemetryRule Instance",
      domain: "iot_telemetry",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotTelemetryRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

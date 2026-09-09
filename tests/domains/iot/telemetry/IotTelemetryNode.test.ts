import { IotTelemetryNodeService } from "../../../services/core-engine/src/iot/telemetry/services/IotTelemetryNodeService";
import { IotTelemetryNodeValidator } from "../../../packages/types/src/domains/iot/telemetry/IotTelemetryNode";
import { IotTelemetryNodeStateMachine } from "../../../services/core-engine/src/iot/telemetry/state-machines/IotTelemetryNodeStateMachine";

describe("IotTelemetryNode Comprehensive Domain Test Suite", () => {
  const service = new IotTelemetryNodeService();
  const sm = new IotTelemetryNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotTelemetryNode Instance",
      domain: "iot_telemetry",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotTelemetryNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

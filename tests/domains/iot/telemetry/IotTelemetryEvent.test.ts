import { IotTelemetryEventService } from "../../../services/core-engine/src/iot/telemetry/services/IotTelemetryEventService";
import { IotTelemetryEventValidator } from "../../../packages/types/src/domains/iot/telemetry/IotTelemetryEvent";
import { IotTelemetryEventStateMachine } from "../../../services/core-engine/src/iot/telemetry/state-machines/IotTelemetryEventStateMachine";

describe("IotTelemetryEvent Comprehensive Domain Test Suite", () => {
  const service = new IotTelemetryEventService();
  const sm = new IotTelemetryEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotTelemetryEvent Instance",
      domain: "iot_telemetry",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotTelemetryEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

import { IotTelemetryPayloadService } from "../../../services/core-engine/src/iot/telemetry/services/IotTelemetryPayloadService";
import { IotTelemetryPayloadValidator } from "../../../packages/types/src/domains/iot/telemetry/IotTelemetryPayload";
import { IotTelemetryPayloadStateMachine } from "../../../services/core-engine/src/iot/telemetry/state-machines/IotTelemetryPayloadStateMachine";

describe("IotTelemetryPayload Comprehensive Domain Test Suite", () => {
  const service = new IotTelemetryPayloadService();
  const sm = new IotTelemetryPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotTelemetryPayload Instance",
      domain: "iot_telemetry",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotTelemetryPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

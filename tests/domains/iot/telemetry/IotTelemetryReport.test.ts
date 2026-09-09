import { IotTelemetryReportService } from "../../../services/core-engine/src/iot/telemetry/services/IotTelemetryReportService";
import { IotTelemetryReportValidator } from "../../../packages/types/src/domains/iot/telemetry/IotTelemetryReport";
import { IotTelemetryReportStateMachine } from "../../../services/core-engine/src/iot/telemetry/state-machines/IotTelemetryReportStateMachine";

describe("IotTelemetryReport Comprehensive Domain Test Suite", () => {
  const service = new IotTelemetryReportService();
  const sm = new IotTelemetryReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotTelemetryReport Instance",
      domain: "iot_telemetry",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotTelemetryReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

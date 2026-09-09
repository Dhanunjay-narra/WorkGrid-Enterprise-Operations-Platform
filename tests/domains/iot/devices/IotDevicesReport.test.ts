import { IotDevicesReportService } from "../../../services/core-engine/src/iot/devices/services/IotDevicesReportService";
import { IotDevicesReportValidator } from "../../../packages/types/src/domains/iot/devices/IotDevicesReport";
import { IotDevicesReportStateMachine } from "../../../services/core-engine/src/iot/devices/state-machines/IotDevicesReportStateMachine";

describe("IotDevicesReport Comprehensive Domain Test Suite", () => {
  const service = new IotDevicesReportService();
  const sm = new IotDevicesReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotDevicesReport Instance",
      domain: "iot_devices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotDevicesReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

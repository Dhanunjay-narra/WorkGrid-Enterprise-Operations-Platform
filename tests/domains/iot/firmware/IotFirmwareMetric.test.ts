import { IotFirmwareMetricService } from "../../../services/core-engine/src/iot/firmware/services/IotFirmwareMetricService";
import { IotFirmwareMetricValidator } from "../../../packages/types/src/domains/iot/firmware/IotFirmwareMetric";
import { IotFirmwareMetricStateMachine } from "../../../services/core-engine/src/iot/firmware/state-machines/IotFirmwareMetricStateMachine";

describe("IotFirmwareMetric Comprehensive Domain Test Suite", () => {
  const service = new IotFirmwareMetricService();
  const sm = new IotFirmwareMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFirmwareMetric Instance",
      domain: "iot_firmware",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFirmwareMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

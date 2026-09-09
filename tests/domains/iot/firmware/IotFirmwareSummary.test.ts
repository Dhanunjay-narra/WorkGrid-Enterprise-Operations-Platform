import { IotFirmwareSummaryService } from "../../../services/core-engine/src/iot/firmware/services/IotFirmwareSummaryService";
import { IotFirmwareSummaryValidator } from "../../../packages/types/src/domains/iot/firmware/IotFirmwareSummary";
import { IotFirmwareSummaryStateMachine } from "../../../services/core-engine/src/iot/firmware/state-machines/IotFirmwareSummaryStateMachine";

describe("IotFirmwareSummary Comprehensive Domain Test Suite", () => {
  const service = new IotFirmwareSummaryService();
  const sm = new IotFirmwareSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFirmwareSummary Instance",
      domain: "iot_firmware",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFirmwareSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

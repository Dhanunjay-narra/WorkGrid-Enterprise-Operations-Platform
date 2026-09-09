import { IotThresholdsRecordService } from "../../../services/core-engine/src/iot/thresholds/services/IotThresholdsRecordService";
import { IotThresholdsRecordValidator } from "../../../packages/types/src/domains/iot/thresholds/IotThresholdsRecord";
import { IotThresholdsRecordStateMachine } from "../../../services/core-engine/src/iot/thresholds/state-machines/IotThresholdsRecordStateMachine";

describe("IotThresholdsRecord Comprehensive Domain Test Suite", () => {
  const service = new IotThresholdsRecordService();
  const sm = new IotThresholdsRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotThresholdsRecord Instance",
      domain: "iot_thresholds",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotThresholdsRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

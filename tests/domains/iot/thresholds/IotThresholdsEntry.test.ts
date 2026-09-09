import { IotThresholdsEntryService } from "../../../services/core-engine/src/iot/thresholds/services/IotThresholdsEntryService";
import { IotThresholdsEntryValidator } from "../../../packages/types/src/domains/iot/thresholds/IotThresholdsEntry";
import { IotThresholdsEntryStateMachine } from "../../../services/core-engine/src/iot/thresholds/state-machines/IotThresholdsEntryStateMachine";

describe("IotThresholdsEntry Comprehensive Domain Test Suite", () => {
  const service = new IotThresholdsEntryService();
  const sm = new IotThresholdsEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotThresholdsEntry Instance",
      domain: "iot_thresholds",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotThresholdsEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

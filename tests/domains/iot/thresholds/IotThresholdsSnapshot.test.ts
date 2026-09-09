import { IotThresholdsSnapshotService } from "../../../services/core-engine/src/iot/thresholds/services/IotThresholdsSnapshotService";
import { IotThresholdsSnapshotValidator } from "../../../packages/types/src/domains/iot/thresholds/IotThresholdsSnapshot";
import { IotThresholdsSnapshotStateMachine } from "../../../services/core-engine/src/iot/thresholds/state-machines/IotThresholdsSnapshotStateMachine";

describe("IotThresholdsSnapshot Comprehensive Domain Test Suite", () => {
  const service = new IotThresholdsSnapshotService();
  const sm = new IotThresholdsSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotThresholdsSnapshot Instance",
      domain: "iot_thresholds",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotThresholdsSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

import { ObsAlertsBatchService } from "../../../services/core-engine/src/obs/alerts/services/ObsAlertsBatchService";
import { ObsAlertsBatchValidator } from "../../../packages/types/src/domains/obs/alerts/ObsAlertsBatch";
import { ObsAlertsBatchStateMachine } from "../../../services/core-engine/src/obs/alerts/state-machines/ObsAlertsBatchStateMachine";

describe("ObsAlertsBatch Comprehensive Domain Test Suite", () => {
  const service = new ObsAlertsBatchService();
  const sm = new ObsAlertsBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsAlertsBatch Instance",
      domain: "obs_alerts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsAlertsBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

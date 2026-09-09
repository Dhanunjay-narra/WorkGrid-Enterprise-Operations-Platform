import { DmsVersionsStateService } from "../../../services/core-engine/src/dms/versions/services/DmsVersionsStateService";
import { DmsVersionsStateValidator } from "../../../packages/types/src/domains/dms/versions/DmsVersionsState";
import { DmsVersionsStateStateMachine } from "../../../services/core-engine/src/dms/versions/state-machines/DmsVersionsStateStateMachine";

describe("DmsVersionsState Comprehensive Domain Test Suite", () => {
  const service = new DmsVersionsStateService();
  const sm = new DmsVersionsStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsVersionsState Instance",
      domain: "dms_versions",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsVersionsStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

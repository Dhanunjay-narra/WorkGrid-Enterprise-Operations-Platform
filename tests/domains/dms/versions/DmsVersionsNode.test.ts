import { DmsVersionsNodeService } from "../../../services/core-engine/src/dms/versions/services/DmsVersionsNodeService";
import { DmsVersionsNodeValidator } from "../../../packages/types/src/domains/dms/versions/DmsVersionsNode";
import { DmsVersionsNodeStateMachine } from "../../../services/core-engine/src/dms/versions/state-machines/DmsVersionsNodeStateMachine";

describe("DmsVersionsNode Comprehensive Domain Test Suite", () => {
  const service = new DmsVersionsNodeService();
  const sm = new DmsVersionsNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsVersionsNode Instance",
      domain: "dms_versions",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsVersionsNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

import { DmsVersionsTaskService } from "../../../services/core-engine/src/dms/versions/services/DmsVersionsTaskService";
import { DmsVersionsTaskValidator } from "../../../packages/types/src/domains/dms/versions/DmsVersionsTask";
import { DmsVersionsTaskStateMachine } from "../../../services/core-engine/src/dms/versions/state-machines/DmsVersionsTaskStateMachine";

describe("DmsVersionsTask Comprehensive Domain Test Suite", () => {
  const service = new DmsVersionsTaskService();
  const sm = new DmsVersionsTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsVersionsTask Instance",
      domain: "dms_versions",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsVersionsTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

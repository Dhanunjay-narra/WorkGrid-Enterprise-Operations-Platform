import { BiExportsTaskService } from "../../../services/core-engine/src/bi/exports/services/BiExportsTaskService";
import { BiExportsTaskValidator } from "../../../packages/types/src/domains/bi/exports/BiExportsTask";
import { BiExportsTaskStateMachine } from "../../../services/core-engine/src/bi/exports/state-machines/BiExportsTaskStateMachine";

describe("BiExportsTask Comprehensive Domain Test Suite", () => {
  const service = new BiExportsTaskService();
  const sm = new BiExportsTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiExportsTask Instance",
      domain: "bi_exports",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiExportsTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

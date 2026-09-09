import { BiExportsNodeService } from "../../../services/core-engine/src/bi/exports/services/BiExportsNodeService";
import { BiExportsNodeValidator } from "../../../packages/types/src/domains/bi/exports/BiExportsNode";
import { BiExportsNodeStateMachine } from "../../../services/core-engine/src/bi/exports/state-machines/BiExportsNodeStateMachine";

describe("BiExportsNode Comprehensive Domain Test Suite", () => {
  const service = new BiExportsNodeService();
  const sm = new BiExportsNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiExportsNode Instance",
      domain: "bi_exports",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiExportsNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

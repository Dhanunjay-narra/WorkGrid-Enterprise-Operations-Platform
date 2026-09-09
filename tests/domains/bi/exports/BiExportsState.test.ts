import { BiExportsStateService } from "../../../services/core-engine/src/bi/exports/services/BiExportsStateService";
import { BiExportsStateValidator } from "../../../packages/types/src/domains/bi/exports/BiExportsState";
import { BiExportsStateStateMachine } from "../../../services/core-engine/src/bi/exports/state-machines/BiExportsStateStateMachine";

describe("BiExportsState Comprehensive Domain Test Suite", () => {
  const service = new BiExportsStateService();
  const sm = new BiExportsStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiExportsState Instance",
      domain: "bi_exports",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiExportsStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

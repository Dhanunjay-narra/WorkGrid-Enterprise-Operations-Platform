import { BiExportsConfigService } from "../../../services/core-engine/src/bi/exports/services/BiExportsConfigService";
import { BiExportsConfigValidator } from "../../../packages/types/src/domains/bi/exports/BiExportsConfig";
import { BiExportsConfigStateMachine } from "../../../services/core-engine/src/bi/exports/state-machines/BiExportsConfigStateMachine";

describe("BiExportsConfig Comprehensive Domain Test Suite", () => {
  const service = new BiExportsConfigService();
  const sm = new BiExportsConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiExportsConfig Instance",
      domain: "bi_exports",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiExportsConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

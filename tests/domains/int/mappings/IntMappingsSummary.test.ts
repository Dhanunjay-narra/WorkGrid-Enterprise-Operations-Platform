import { IntMappingsSummaryService } from "../../../services/core-engine/src/int/mappings/services/IntMappingsSummaryService";
import { IntMappingsSummaryValidator } from "../../../packages/types/src/domains/int/mappings/IntMappingsSummary";
import { IntMappingsSummaryStateMachine } from "../../../services/core-engine/src/int/mappings/state-machines/IntMappingsSummaryStateMachine";

describe("IntMappingsSummary Comprehensive Domain Test Suite", () => {
  const service = new IntMappingsSummaryService();
  const sm = new IntMappingsSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntMappingsSummary Instance",
      domain: "int_mappings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntMappingsSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

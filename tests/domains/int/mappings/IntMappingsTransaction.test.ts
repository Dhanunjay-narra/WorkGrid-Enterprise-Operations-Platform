import { IntMappingsTransactionService } from "../../../services/core-engine/src/int/mappings/services/IntMappingsTransactionService";
import { IntMappingsTransactionValidator } from "../../../packages/types/src/domains/int/mappings/IntMappingsTransaction";
import { IntMappingsTransactionStateMachine } from "../../../services/core-engine/src/int/mappings/state-machines/IntMappingsTransactionStateMachine";

describe("IntMappingsTransaction Comprehensive Domain Test Suite", () => {
  const service = new IntMappingsTransactionService();
  const sm = new IntMappingsTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntMappingsTransaction Instance",
      domain: "int_mappings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntMappingsTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

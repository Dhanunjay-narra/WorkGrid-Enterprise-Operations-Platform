import { IntMappingsBatchService } from "../../../services/core-engine/src/int/mappings/services/IntMappingsBatchService";
import { IntMappingsBatchValidator } from "../../../packages/types/src/domains/int/mappings/IntMappingsBatch";
import { IntMappingsBatchStateMachine } from "../../../services/core-engine/src/int/mappings/state-machines/IntMappingsBatchStateMachine";

describe("IntMappingsBatch Comprehensive Domain Test Suite", () => {
  const service = new IntMappingsBatchService();
  const sm = new IntMappingsBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntMappingsBatch Instance",
      domain: "int_mappings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntMappingsBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

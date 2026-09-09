import { IntMappingsMappingService } from "../../../services/core-engine/src/int/mappings/services/IntMappingsMappingService";
import { IntMappingsMappingValidator } from "../../../packages/types/src/domains/int/mappings/IntMappingsMapping";
import { IntMappingsMappingStateMachine } from "../../../services/core-engine/src/int/mappings/state-machines/IntMappingsMappingStateMachine";

describe("IntMappingsMapping Comprehensive Domain Test Suite", () => {
  const service = new IntMappingsMappingService();
  const sm = new IntMappingsMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntMappingsMapping Instance",
      domain: "int_mappings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntMappingsMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

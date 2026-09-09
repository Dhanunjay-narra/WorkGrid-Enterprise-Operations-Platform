import { IntMappingsNodeService } from "../../../services/core-engine/src/int/mappings/services/IntMappingsNodeService";
import { IntMappingsNodeValidator } from "../../../packages/types/src/domains/int/mappings/IntMappingsNode";
import { IntMappingsNodeStateMachine } from "../../../services/core-engine/src/int/mappings/state-machines/IntMappingsNodeStateMachine";

describe("IntMappingsNode Comprehensive Domain Test Suite", () => {
  const service = new IntMappingsNodeService();
  const sm = new IntMappingsNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntMappingsNode Instance",
      domain: "int_mappings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntMappingsNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

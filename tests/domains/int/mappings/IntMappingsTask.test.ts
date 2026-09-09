import { IntMappingsTaskService } from "../../../services/core-engine/src/int/mappings/services/IntMappingsTaskService";
import { IntMappingsTaskValidator } from "../../../packages/types/src/domains/int/mappings/IntMappingsTask";
import { IntMappingsTaskStateMachine } from "../../../services/core-engine/src/int/mappings/state-machines/IntMappingsTaskStateMachine";

describe("IntMappingsTask Comprehensive Domain Test Suite", () => {
  const service = new IntMappingsTaskService();
  const sm = new IntMappingsTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntMappingsTask Instance",
      domain: "int_mappings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntMappingsTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

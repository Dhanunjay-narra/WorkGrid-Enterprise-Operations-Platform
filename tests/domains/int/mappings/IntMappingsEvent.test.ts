import { IntMappingsEventService } from "../../../services/core-engine/src/int/mappings/services/IntMappingsEventService";
import { IntMappingsEventValidator } from "../../../packages/types/src/domains/int/mappings/IntMappingsEvent";
import { IntMappingsEventStateMachine } from "../../../services/core-engine/src/int/mappings/state-machines/IntMappingsEventStateMachine";

describe("IntMappingsEvent Comprehensive Domain Test Suite", () => {
  const service = new IntMappingsEventService();
  const sm = new IntMappingsEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntMappingsEvent Instance",
      domain: "int_mappings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntMappingsEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

import { IntMappingsStateService } from "../../../services/core-engine/src/int/mappings/services/IntMappingsStateService";
import { IntMappingsStateValidator } from "../../../packages/types/src/domains/int/mappings/IntMappingsState";
import { IntMappingsStateStateMachine } from "../../../services/core-engine/src/int/mappings/state-machines/IntMappingsStateStateMachine";

describe("IntMappingsState Comprehensive Domain Test Suite", () => {
  const service = new IntMappingsStateService();
  const sm = new IntMappingsStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntMappingsState Instance",
      domain: "int_mappings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntMappingsStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

import { IntMappingsThresholdService } from "../../../services/core-engine/src/int/mappings/services/IntMappingsThresholdService";
import { IntMappingsThresholdValidator } from "../../../packages/types/src/domains/int/mappings/IntMappingsThreshold";
import { IntMappingsThresholdStateMachine } from "../../../services/core-engine/src/int/mappings/state-machines/IntMappingsThresholdStateMachine";

describe("IntMappingsThreshold Comprehensive Domain Test Suite", () => {
  const service = new IntMappingsThresholdService();
  const sm = new IntMappingsThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntMappingsThreshold Instance",
      domain: "int_mappings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntMappingsThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

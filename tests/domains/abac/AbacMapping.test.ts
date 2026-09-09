import { AbacMappingService } from "../../../services/core-engine/src/abac/services/AbacMappingService";
import { AbacMappingValidator } from "../../../packages/types/src/domains/abac/AbacMapping";
import { AbacMappingStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacMappingStateMachine";

describe("AbacMapping Comprehensive Domain Test Suite", () => {
  const service = new AbacMappingService();
  const sm = new AbacMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacMapping Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

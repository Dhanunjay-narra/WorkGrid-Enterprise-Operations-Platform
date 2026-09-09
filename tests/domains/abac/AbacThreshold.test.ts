import { AbacThresholdService } from "../../../services/core-engine/src/abac/services/AbacThresholdService";
import { AbacThresholdValidator } from "../../../packages/types/src/domains/abac/AbacThreshold";
import { AbacThresholdStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacThresholdStateMachine";

describe("AbacThreshold Comprehensive Domain Test Suite", () => {
  const service = new AbacThresholdService();
  const sm = new AbacThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacThreshold Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

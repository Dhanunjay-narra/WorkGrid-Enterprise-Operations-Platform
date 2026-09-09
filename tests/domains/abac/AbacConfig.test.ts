import { AbacConfigService } from "../../../services/core-engine/src/abac/services/AbacConfigService";
import { AbacConfigValidator } from "../../../packages/types/src/domains/abac/AbacConfig";
import { AbacConfigStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacConfigStateMachine";

describe("AbacConfig Comprehensive Domain Test Suite", () => {
  const service = new AbacConfigService();
  const sm = new AbacConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacConfig Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

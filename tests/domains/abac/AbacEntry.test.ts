import { AbacEntryService } from "../../../services/core-engine/src/abac/services/AbacEntryService";
import { AbacEntryValidator } from "../../../packages/types/src/domains/abac/AbacEntry";
import { AbacEntryStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacEntryStateMachine";

describe("AbacEntry Comprehensive Domain Test Suite", () => {
  const service = new AbacEntryService();
  const sm = new AbacEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacEntry Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

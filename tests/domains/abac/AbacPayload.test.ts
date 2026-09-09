import { AbacPayloadService } from "../../../services/core-engine/src/abac/services/AbacPayloadService";
import { AbacPayloadValidator } from "../../../packages/types/src/domains/abac/AbacPayload";
import { AbacPayloadStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacPayloadStateMachine";

describe("AbacPayload Comprehensive Domain Test Suite", () => {
  const service = new AbacPayloadService();
  const sm = new AbacPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacPayload Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

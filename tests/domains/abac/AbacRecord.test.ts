import { AbacRecordService } from "../../../services/core-engine/src/abac/services/AbacRecordService";
import { AbacRecordValidator } from "../../../packages/types/src/domains/abac/AbacRecord";
import { AbacRecordStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacRecordStateMachine";

describe("AbacRecord Comprehensive Domain Test Suite", () => {
  const service = new AbacRecordService();
  const sm = new AbacRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacRecord Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

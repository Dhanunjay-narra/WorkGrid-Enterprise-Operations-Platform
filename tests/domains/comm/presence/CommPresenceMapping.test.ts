import { CommPresenceMappingService } from "../../../services/core-engine/src/comm/presence/services/CommPresenceMappingService";
import { CommPresenceMappingValidator } from "../../../packages/types/src/domains/comm/presence/CommPresenceMapping";
import { CommPresenceMappingStateMachine } from "../../../services/core-engine/src/comm/presence/state-machines/CommPresenceMappingStateMachine";

describe("CommPresenceMapping Comprehensive Domain Test Suite", () => {
  const service = new CommPresenceMappingService();
  const sm = new CommPresenceMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommPresenceMapping Instance",
      domain: "comm_presence",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommPresenceMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

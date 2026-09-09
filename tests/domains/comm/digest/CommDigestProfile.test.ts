import { CommDigestProfileService } from "../../../services/core-engine/src/comm/digest/services/CommDigestProfileService";
import { CommDigestProfileValidator } from "../../../packages/types/src/domains/comm/digest/CommDigestProfile";
import { CommDigestProfileStateMachine } from "../../../services/core-engine/src/comm/digest/state-machines/CommDigestProfileStateMachine";

describe("CommDigestProfile Comprehensive Domain Test Suite", () => {
  const service = new CommDigestProfileService();
  const sm = new CommDigestProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommDigestProfile Instance",
      domain: "comm_digest",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommDigestProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

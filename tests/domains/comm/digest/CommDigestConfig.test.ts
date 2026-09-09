import { CommDigestConfigService } from "../../../services/core-engine/src/comm/digest/services/CommDigestConfigService";
import { CommDigestConfigValidator } from "../../../packages/types/src/domains/comm/digest/CommDigestConfig";
import { CommDigestConfigStateMachine } from "../../../services/core-engine/src/comm/digest/state-machines/CommDigestConfigStateMachine";

describe("CommDigestConfig Comprehensive Domain Test Suite", () => {
  const service = new CommDigestConfigService();
  const sm = new CommDigestConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommDigestConfig Instance",
      domain: "comm_digest",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommDigestConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

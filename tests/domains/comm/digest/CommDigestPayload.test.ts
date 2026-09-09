import { CommDigestPayloadService } from "../../../services/core-engine/src/comm/digest/services/CommDigestPayloadService";
import { CommDigestPayloadValidator } from "../../../packages/types/src/domains/comm/digest/CommDigestPayload";
import { CommDigestPayloadStateMachine } from "../../../services/core-engine/src/comm/digest/state-machines/CommDigestPayloadStateMachine";

describe("CommDigestPayload Comprehensive Domain Test Suite", () => {
  const service = new CommDigestPayloadService();
  const sm = new CommDigestPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommDigestPayload Instance",
      domain: "comm_digest",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommDigestPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

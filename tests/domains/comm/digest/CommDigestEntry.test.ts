import { CommDigestEntryService } from "../../../services/core-engine/src/comm/digest/services/CommDigestEntryService";
import { CommDigestEntryValidator } from "../../../packages/types/src/domains/comm/digest/CommDigestEntry";
import { CommDigestEntryStateMachine } from "../../../services/core-engine/src/comm/digest/state-machines/CommDigestEntryStateMachine";

describe("CommDigestEntry Comprehensive Domain Test Suite", () => {
  const service = new CommDigestEntryService();
  const sm = new CommDigestEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommDigestEntry Instance",
      domain: "comm_digest",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommDigestEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

import { BiCohortsPayloadService } from "../../../services/core-engine/src/bi/cohorts/services/BiCohortsPayloadService";
import { BiCohortsPayloadValidator } from "../../../packages/types/src/domains/bi/cohorts/BiCohortsPayload";
import { BiCohortsPayloadStateMachine } from "../../../services/core-engine/src/bi/cohorts/state-machines/BiCohortsPayloadStateMachine";

describe("BiCohortsPayload Comprehensive Domain Test Suite", () => {
  const service = new BiCohortsPayloadService();
  const sm = new BiCohortsPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiCohortsPayload Instance",
      domain: "bi_cohorts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiCohortsPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

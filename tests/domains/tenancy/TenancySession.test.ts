import { TenancySessionService } from "../../../services/core-engine/src/tenancy/services/TenancySessionService";
import { TenancySessionValidator } from "../../../packages/types/src/domains/tenancy/TenancySession";
import { TenancySessionStateMachine } from "../../../services/core-engine/src/tenancy/state-machines/TenancySessionStateMachine";

describe("TenancySession Comprehensive Domain Test Suite", () => {
  const service = new TenancySessionService();
  const sm = new TenancySessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "TenancySession Instance",
      domain: "tenancy",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = TenancySessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

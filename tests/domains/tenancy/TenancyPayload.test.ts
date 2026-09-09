import { TenancyPayloadService } from "../../../services/core-engine/src/tenancy/services/TenancyPayloadService";
import { TenancyPayloadValidator } from "../../../packages/types/src/domains/tenancy/TenancyPayload";
import { TenancyPayloadStateMachine } from "../../../services/core-engine/src/tenancy/state-machines/TenancyPayloadStateMachine";

describe("TenancyPayload Comprehensive Domain Test Suite", () => {
  const service = new TenancyPayloadService();
  const sm = new TenancyPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "TenancyPayload Instance",
      domain: "tenancy",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = TenancyPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

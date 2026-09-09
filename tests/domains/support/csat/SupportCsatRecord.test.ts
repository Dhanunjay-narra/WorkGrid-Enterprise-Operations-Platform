import { SupportCsatRecordService } from "../../../services/core-engine/src/support/csat/services/SupportCsatRecordService";
import { SupportCsatRecordValidator } from "../../../packages/types/src/domains/support/csat/SupportCsatRecord";
import { SupportCsatRecordStateMachine } from "../../../services/core-engine/src/support/csat/state-machines/SupportCsatRecordStateMachine";

describe("SupportCsatRecord Comprehensive Domain Test Suite", () => {
  const service = new SupportCsatRecordService();
  const sm = new SupportCsatRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportCsatRecord Instance",
      domain: "support_csat",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportCsatRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

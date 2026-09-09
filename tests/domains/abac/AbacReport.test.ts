import { AbacReportService } from "../../../services/core-engine/src/abac/services/AbacReportService";
import { AbacReportValidator } from "../../../packages/types/src/domains/abac/AbacReport";
import { AbacReportStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacReportStateMachine";

describe("AbacReport Comprehensive Domain Test Suite", () => {
  const service = new AbacReportService();
  const sm = new AbacReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacReport Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

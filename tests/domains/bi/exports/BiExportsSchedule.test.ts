import { BiExportsScheduleService } from "../../../services/core-engine/src/bi/exports/services/BiExportsScheduleService";
import { BiExportsScheduleValidator } from "../../../packages/types/src/domains/bi/exports/BiExportsSchedule";
import { BiExportsScheduleStateMachine } from "../../../services/core-engine/src/bi/exports/state-machines/BiExportsScheduleStateMachine";

describe("BiExportsSchedule Comprehensive Domain Test Suite", () => {
  const service = new BiExportsScheduleService();
  const sm = new BiExportsScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiExportsSchedule Instance",
      domain: "bi_exports",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiExportsScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

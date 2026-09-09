import { BiExportsRecordService } from "../../../services/core-engine/src/bi/exports/services/BiExportsRecordService";
import { BiExportsRecordValidator } from "../../../packages/types/src/domains/bi/exports/BiExportsRecord";
import { BiExportsRecordStateMachine } from "../../../services/core-engine/src/bi/exports/state-machines/BiExportsRecordStateMachine";

describe("BiExportsRecord Comprehensive Domain Test Suite", () => {
  const service = new BiExportsRecordService();
  const sm = new BiExportsRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiExportsRecord Instance",
      domain: "bi_exports",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiExportsRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

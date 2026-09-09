import { BiExportsPayloadService } from "../../../services/core-engine/src/bi/exports/services/BiExportsPayloadService";
import { BiExportsPayloadValidator } from "../../../packages/types/src/domains/bi/exports/BiExportsPayload";
import { BiExportsPayloadStateMachine } from "../../../services/core-engine/src/bi/exports/state-machines/BiExportsPayloadStateMachine";

describe("BiExportsPayload Comprehensive Domain Test Suite", () => {
  const service = new BiExportsPayloadService();
  const sm = new BiExportsPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiExportsPayload Instance",
      domain: "bi_exports",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiExportsPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

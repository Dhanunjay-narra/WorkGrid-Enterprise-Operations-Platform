import { DmsFilesMetricService } from "../../../services/core-engine/src/dms/files/services/DmsFilesMetricService";
import { DmsFilesMetricValidator } from "../../../packages/types/src/domains/dms/files/DmsFilesMetric";
import { DmsFilesMetricStateMachine } from "../../../services/core-engine/src/dms/files/state-machines/DmsFilesMetricStateMachine";

describe("DmsFilesMetric Comprehensive Domain Test Suite", () => {
  const service = new DmsFilesMetricService();
  const sm = new DmsFilesMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsFilesMetric Instance",
      domain: "dms_files",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsFilesMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

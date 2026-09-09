import { ProjectCapacityRecordService } from "../../../services/core-engine/src/project/capacity/services/ProjectCapacityRecordService";
import { ProjectCapacityRecordValidator } from "../../../packages/types/src/domains/project/capacity/ProjectCapacityRecord";
import { ProjectCapacityRecordStateMachine } from "../../../services/core-engine/src/project/capacity/state-machines/ProjectCapacityRecordStateMachine";

describe("ProjectCapacityRecord Comprehensive Domain Test Suite", () => {
  const service = new ProjectCapacityRecordService();
  const sm = new ProjectCapacityRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectCapacityRecord Instance",
      domain: "project_capacity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectCapacityRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

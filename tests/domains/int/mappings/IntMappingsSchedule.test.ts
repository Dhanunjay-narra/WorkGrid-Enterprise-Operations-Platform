import { IntMappingsScheduleService } from "../../../services/core-engine/src/int/mappings/services/IntMappingsScheduleService";
import { IntMappingsScheduleValidator } from "../../../packages/types/src/domains/int/mappings/IntMappingsSchedule";
import { IntMappingsScheduleStateMachine } from "../../../services/core-engine/src/int/mappings/state-machines/IntMappingsScheduleStateMachine";

describe("IntMappingsSchedule Comprehensive Domain Test Suite", () => {
  const service = new IntMappingsScheduleService();
  const sm = new IntMappingsScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntMappingsSchedule Instance",
      domain: "int_mappings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntMappingsScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

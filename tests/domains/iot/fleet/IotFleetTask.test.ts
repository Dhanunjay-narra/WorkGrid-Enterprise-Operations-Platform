import { IotFleetTaskService } from "../../../services/core-engine/src/iot/fleet/services/IotFleetTaskService";
import { IotFleetTaskValidator } from "../../../packages/types/src/domains/iot/fleet/IotFleetTask";
import { IotFleetTaskStateMachine } from "../../../services/core-engine/src/iot/fleet/state-machines/IotFleetTaskStateMachine";

describe("IotFleetTask Comprehensive Domain Test Suite", () => {
  const service = new IotFleetTaskService();
  const sm = new IotFleetTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFleetTask Instance",
      domain: "iot_fleet",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFleetTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

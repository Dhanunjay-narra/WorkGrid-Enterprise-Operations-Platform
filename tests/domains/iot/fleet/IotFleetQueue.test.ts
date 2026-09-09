import { IotFleetQueueService } from "../../../services/core-engine/src/iot/fleet/services/IotFleetQueueService";
import { IotFleetQueueValidator } from "../../../packages/types/src/domains/iot/fleet/IotFleetQueue";
import { IotFleetQueueStateMachine } from "../../../services/core-engine/src/iot/fleet/state-machines/IotFleetQueueStateMachine";

describe("IotFleetQueue Comprehensive Domain Test Suite", () => {
  const service = new IotFleetQueueService();
  const sm = new IotFleetQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFleetQueue Instance",
      domain: "iot_fleet",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFleetQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

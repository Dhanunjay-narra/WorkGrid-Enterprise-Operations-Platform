import { IotFleetNodeService } from "../../../services/core-engine/src/iot/fleet/services/IotFleetNodeService";
import { IotFleetNodeValidator } from "../../../packages/types/src/domains/iot/fleet/IotFleetNode";
import { IotFleetNodeStateMachine } from "../../../services/core-engine/src/iot/fleet/state-machines/IotFleetNodeStateMachine";

describe("IotFleetNode Comprehensive Domain Test Suite", () => {
  const service = new IotFleetNodeService();
  const sm = new IotFleetNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFleetNode Instance",
      domain: "iot_fleet",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFleetNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

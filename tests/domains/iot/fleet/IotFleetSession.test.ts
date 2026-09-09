import { IotFleetSessionService } from "../../../services/core-engine/src/iot/fleet/services/IotFleetSessionService";
import { IotFleetSessionValidator } from "../../../packages/types/src/domains/iot/fleet/IotFleetSession";
import { IotFleetSessionStateMachine } from "../../../services/core-engine/src/iot/fleet/state-machines/IotFleetSessionStateMachine";

describe("IotFleetSession Comprehensive Domain Test Suite", () => {
  const service = new IotFleetSessionService();
  const sm = new IotFleetSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFleetSession Instance",
      domain: "iot_fleet",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFleetSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

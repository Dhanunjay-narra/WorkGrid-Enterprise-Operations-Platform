import { IotLocationsProfileService } from "../../../services/core-engine/src/iot/locations/services/IotLocationsProfileService";
import { IotLocationsProfileValidator } from "../../../packages/types/src/domains/iot/locations/IotLocationsProfile";
import { IotLocationsProfileStateMachine } from "../../../services/core-engine/src/iot/locations/state-machines/IotLocationsProfileStateMachine";

describe("IotLocationsProfile Comprehensive Domain Test Suite", () => {
  const service = new IotLocationsProfileService();
  const sm = new IotLocationsProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotLocationsProfile Instance",
      domain: "iot_locations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotLocationsProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

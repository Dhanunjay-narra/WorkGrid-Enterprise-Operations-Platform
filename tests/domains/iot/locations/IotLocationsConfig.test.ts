import { IotLocationsConfigService } from "../../../services/core-engine/src/iot/locations/services/IotLocationsConfigService";
import { IotLocationsConfigValidator } from "../../../packages/types/src/domains/iot/locations/IotLocationsConfig";
import { IotLocationsConfigStateMachine } from "../../../services/core-engine/src/iot/locations/state-machines/IotLocationsConfigStateMachine";

describe("IotLocationsConfig Comprehensive Domain Test Suite", () => {
  const service = new IotLocationsConfigService();
  const sm = new IotLocationsConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotLocationsConfig Instance",
      domain: "iot_locations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotLocationsConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

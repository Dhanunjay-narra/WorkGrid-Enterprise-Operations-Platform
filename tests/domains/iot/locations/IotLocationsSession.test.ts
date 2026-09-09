import { IotLocationsSessionService } from "../../../services/core-engine/src/iot/locations/services/IotLocationsSessionService";
import { IotLocationsSessionValidator } from "../../../packages/types/src/domains/iot/locations/IotLocationsSession";
import { IotLocationsSessionStateMachine } from "../../../services/core-engine/src/iot/locations/state-machines/IotLocationsSessionStateMachine";

describe("IotLocationsSession Comprehensive Domain Test Suite", () => {
  const service = new IotLocationsSessionService();
  const sm = new IotLocationsSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotLocationsSession Instance",
      domain: "iot_locations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotLocationsSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

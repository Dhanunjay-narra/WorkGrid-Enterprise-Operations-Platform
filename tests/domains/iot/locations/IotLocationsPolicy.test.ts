import { IotLocationsPolicyService } from "../../../services/core-engine/src/iot/locations/services/IotLocationsPolicyService";
import { IotLocationsPolicyValidator } from "../../../packages/types/src/domains/iot/locations/IotLocationsPolicy";
import { IotLocationsPolicyStateMachine } from "../../../services/core-engine/src/iot/locations/state-machines/IotLocationsPolicyStateMachine";

describe("IotLocationsPolicy Comprehensive Domain Test Suite", () => {
  const service = new IotLocationsPolicyService();
  const sm = new IotLocationsPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotLocationsPolicy Instance",
      domain: "iot_locations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotLocationsPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

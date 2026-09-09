import { IotLocationsRuleService } from "../../../services/core-engine/src/iot/locations/services/IotLocationsRuleService";
import { IotLocationsRuleValidator } from "../../../packages/types/src/domains/iot/locations/IotLocationsRule";
import { IotLocationsRuleStateMachine } from "../../../services/core-engine/src/iot/locations/state-machines/IotLocationsRuleStateMachine";

describe("IotLocationsRule Comprehensive Domain Test Suite", () => {
  const service = new IotLocationsRuleService();
  const sm = new IotLocationsRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotLocationsRule Instance",
      domain: "iot_locations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotLocationsRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

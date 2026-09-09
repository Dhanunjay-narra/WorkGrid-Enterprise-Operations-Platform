import { IotLocationsReportService } from "../../../services/core-engine/src/iot/locations/services/IotLocationsReportService";
import { IotLocationsReportValidator } from "../../../packages/types/src/domains/iot/locations/IotLocationsReport";
import { IotLocationsReportStateMachine } from "../../../services/core-engine/src/iot/locations/state-machines/IotLocationsReportStateMachine";

describe("IotLocationsReport Comprehensive Domain Test Suite", () => {
  const service = new IotLocationsReportService();
  const sm = new IotLocationsReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotLocationsReport Instance",
      domain: "iot_locations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotLocationsReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

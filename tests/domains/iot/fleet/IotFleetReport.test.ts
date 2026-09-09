import { IotFleetReportService } from "../../../services/core-engine/src/iot/fleet/services/IotFleetReportService";
import { IotFleetReportValidator } from "../../../packages/types/src/domains/iot/fleet/IotFleetReport";
import { IotFleetReportStateMachine } from "../../../services/core-engine/src/iot/fleet/state-machines/IotFleetReportStateMachine";

describe("IotFleetReport Comprehensive Domain Test Suite", () => {
  const service = new IotFleetReportService();
  const sm = new IotFleetReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFleetReport Instance",
      domain: "iot_fleet",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFleetReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

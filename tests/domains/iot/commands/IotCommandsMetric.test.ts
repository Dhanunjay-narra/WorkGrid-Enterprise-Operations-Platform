import { IotCommandsMetricService } from "../../../services/core-engine/src/iot/commands/services/IotCommandsMetricService";
import { IotCommandsMetricValidator } from "../../../packages/types/src/domains/iot/commands/IotCommandsMetric";
import { IotCommandsMetricStateMachine } from "../../../services/core-engine/src/iot/commands/state-machines/IotCommandsMetricStateMachine";

describe("IotCommandsMetric Comprehensive Domain Test Suite", () => {
  const service = new IotCommandsMetricService();
  const sm = new IotCommandsMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotCommandsMetric Instance",
      domain: "iot_commands",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotCommandsMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

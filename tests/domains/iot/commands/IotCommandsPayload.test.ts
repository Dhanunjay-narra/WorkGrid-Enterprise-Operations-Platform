import { IotCommandsPayloadService } from "../../../services/core-engine/src/iot/commands/services/IotCommandsPayloadService";
import { IotCommandsPayloadValidator } from "../../../packages/types/src/domains/iot/commands/IotCommandsPayload";
import { IotCommandsPayloadStateMachine } from "../../../services/core-engine/src/iot/commands/state-machines/IotCommandsPayloadStateMachine";

describe("IotCommandsPayload Comprehensive Domain Test Suite", () => {
  const service = new IotCommandsPayloadService();
  const sm = new IotCommandsPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotCommandsPayload Instance",
      domain: "iot_commands",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotCommandsPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

import { IotCommandExecutionLogService } from "../../../services/core-engine/src/iot/services/IotCommandExecutionLogService";
import { IotCommandExecutionLogValidator } from "../../../packages/types/src/domains/iot/IotCommandExecutionLog";

describe("IotCommandExecutionLog Service & Validation Suite", () => {
  const service = new IotCommandExecutionLogService();

  test("creates a valid IotCommandExecutionLog record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IotCommandExecutionLog",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IotCommandExecutionLogValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

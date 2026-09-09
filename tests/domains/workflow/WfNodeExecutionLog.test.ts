import { WfNodeExecutionLogService } from "../../../services/core-engine/src/workflow/services/WfNodeExecutionLogService";
import { WfNodeExecutionLogValidator } from "../../../packages/types/src/domains/workflow/WfNodeExecutionLog";

describe("WfNodeExecutionLog Service & Validation Suite", () => {
  const service = new WfNodeExecutionLogService();

  test("creates a valid WfNodeExecutionLog record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample WfNodeExecutionLog",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = WfNodeExecutionLogValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

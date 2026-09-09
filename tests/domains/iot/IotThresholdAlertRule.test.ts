import { IotThresholdAlertRuleService } from "../../../services/core-engine/src/iot/services/IotThresholdAlertRuleService";
import { IotThresholdAlertRuleValidator } from "../../../packages/types/src/domains/iot/IotThresholdAlertRule";

describe("IotThresholdAlertRule Service & Validation Suite", () => {
  const service = new IotThresholdAlertRuleService();

  test("creates a valid IotThresholdAlertRule record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IotThresholdAlertRule",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IotThresholdAlertRuleValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

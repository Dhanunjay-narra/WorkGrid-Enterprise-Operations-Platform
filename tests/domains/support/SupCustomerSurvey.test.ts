import { SupCustomerSurveyService } from "../../../services/core-engine/src/support/services/SupCustomerSurveyService";
import { SupCustomerSurveyValidator } from "../../../packages/types/src/domains/support/SupCustomerSurvey";

describe("SupCustomerSurvey Service & Validation Suite", () => {
  const service = new SupCustomerSurveyService();

  test("creates a valid SupCustomerSurvey record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SupCustomerSurvey",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SupCustomerSurveyValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

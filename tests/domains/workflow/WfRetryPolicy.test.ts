import { WfRetryPolicyService } from "../../../services/core-engine/src/workflow/services/WfRetryPolicyService";
import { WfRetryPolicyValidator } from "../../../packages/types/src/domains/workflow/WfRetryPolicy";

describe("WfRetryPolicy Service & Validation Suite", () => {
  const service = new WfRetryPolicyService();

  test("creates a valid WfRetryPolicy record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample WfRetryPolicy",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = WfRetryPolicyValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

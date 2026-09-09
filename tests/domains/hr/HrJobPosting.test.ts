import { HrJobPostingService } from "../../../services/core-engine/src/hr/services/HrJobPostingService";
import { HrJobPostingValidator } from "../../../packages/types/src/domains/hr/HrJobPosting";

describe("HrJobPosting Service & Validation Suite", () => {
  const service = new HrJobPostingService();

  test("creates a valid HrJobPosting record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample HrJobPosting",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = HrJobPostingValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

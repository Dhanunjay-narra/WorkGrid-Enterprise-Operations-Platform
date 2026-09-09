import { BiCohortGroupService } from "../../../services/core-engine/src/analytics/services/BiCohortGroupService";
import { BiCohortGroupValidator } from "../../../packages/types/src/domains/analytics/BiCohortGroup";

describe("BiCohortGroup Service & Validation Suite", () => {
  const service = new BiCohortGroupService();

  test("creates a valid BiCohortGroup record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample BiCohortGroup",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = BiCohortGroupValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

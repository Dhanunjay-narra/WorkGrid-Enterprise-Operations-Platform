import { PrjSprintRetrospectiveService } from "../../../services/core-engine/src/projects/services/PrjSprintRetrospectiveService";
import { PrjSprintRetrospectiveValidator } from "../../../packages/types/src/domains/projects/PrjSprintRetrospective";

describe("PrjSprintRetrospective Service & Validation Suite", () => {
  const service = new PrjSprintRetrospectiveService();

  test("creates a valid PrjSprintRetrospective record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample PrjSprintRetrospective",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = PrjSprintRetrospectiveValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

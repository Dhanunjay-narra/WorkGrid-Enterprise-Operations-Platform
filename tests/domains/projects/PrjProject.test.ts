import { PrjProjectService } from "../../../services/core-engine/src/projects/services/PrjProjectService";
import { PrjProjectValidator } from "../../../packages/types/src/domains/projects/PrjProject";

describe("PrjProject Service & Validation Suite", () => {
  const service = new PrjProjectService();

  test("creates a valid PrjProject record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample PrjProject",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = PrjProjectValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

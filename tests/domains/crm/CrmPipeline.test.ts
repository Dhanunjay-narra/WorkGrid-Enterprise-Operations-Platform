import { CrmPipelineService } from "../../../services/core-engine/src/crm/services/CrmPipelineService";
import { CrmPipelineValidator } from "../../../packages/types/src/domains/crm/CrmPipeline";

describe("CrmPipeline Service & Validation Suite", () => {
  const service = new CrmPipelineService();

  test("creates a valid CrmPipeline record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CrmPipeline",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CrmPipelineValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

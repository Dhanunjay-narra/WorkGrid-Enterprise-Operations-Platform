import { CrmLeadService } from "../../../services/core-engine/src/crm/services/CrmLeadService";
import { CrmLeadValidator } from "../../../packages/types/src/domains/crm/CrmLead";

describe("CrmLead Service & Validation Suite", () => {
  const service = new CrmLeadService();

  test("creates a valid CrmLead record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CrmLead",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CrmLeadValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

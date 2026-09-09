import { CrmContactService } from "../../../services/core-engine/src/crm/services/CrmContactService";
import { CrmContactValidator } from "../../../packages/types/src/domains/crm/CrmContact";

describe("CrmContact Service & Validation Suite", () => {
  const service = new CrmContactService();

  test("creates a valid CrmContact record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CrmContact",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CrmContactValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

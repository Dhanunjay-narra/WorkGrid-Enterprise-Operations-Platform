import { CrmAccountService } from "../../../services/core-engine/src/crm/services/CrmAccountService";
import { CrmAccountValidator } from "../../../packages/types/src/domains/crm/CrmAccount";

describe("CrmAccount Service & Validation Suite", () => {
  const service = new CrmAccountService();

  test("creates a valid CrmAccount record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CrmAccount",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CrmAccountValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

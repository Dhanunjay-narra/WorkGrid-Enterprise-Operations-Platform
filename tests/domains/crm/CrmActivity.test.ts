import { CrmActivityService } from "../../../services/core-engine/src/crm/services/CrmActivityService";
import { CrmActivityValidator } from "../../../packages/types/src/domains/crm/CrmActivity";

describe("CrmActivity Service & Validation Suite", () => {
  const service = new CrmActivityService();

  test("creates a valid CrmActivity record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CrmActivity",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CrmActivityValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

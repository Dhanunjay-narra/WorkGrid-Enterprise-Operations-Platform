import { CrmNoteService } from "../../../services/core-engine/src/crm/services/CrmNoteService";
import { CrmNoteValidator } from "../../../packages/types/src/domains/crm/CrmNote";

describe("CrmNote Service & Validation Suite", () => {
  const service = new CrmNoteService();

  test("creates a valid CrmNote record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CrmNote",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CrmNoteValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

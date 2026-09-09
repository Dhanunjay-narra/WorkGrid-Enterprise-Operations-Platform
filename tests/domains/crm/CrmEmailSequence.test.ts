import { CrmEmailSequenceService } from "../../../services/core-engine/src/crm/services/CrmEmailSequenceService";
import { CrmEmailSequenceValidator } from "../../../packages/types/src/domains/crm/CrmEmailSequence";

describe("CrmEmailSequence Service & Validation Suite", () => {
  const service = new CrmEmailSequenceService();

  test("creates a valid CrmEmailSequence record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CrmEmailSequence",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CrmEmailSequenceValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

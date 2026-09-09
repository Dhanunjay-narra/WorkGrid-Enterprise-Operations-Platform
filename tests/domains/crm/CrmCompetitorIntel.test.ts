import { CrmCompetitorIntelService } from "../../../services/core-engine/src/crm/services/CrmCompetitorIntelService";
import { CrmCompetitorIntelValidator } from "../../../packages/types/src/domains/crm/CrmCompetitorIntel";

describe("CrmCompetitorIntel Service & Validation Suite", () => {
  const service = new CrmCompetitorIntelService();

  test("creates a valid CrmCompetitorIntel record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CrmCompetitorIntel",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CrmCompetitorIntelValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

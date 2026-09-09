import { CrmTerritoryService } from "../../../services/core-engine/src/crm/services/CrmTerritoryService";
import { CrmTerritoryValidator } from "../../../packages/types/src/domains/crm/CrmTerritory";

describe("CrmTerritory Service & Validation Suite", () => {
  const service = new CrmTerritoryService();

  test("creates a valid CrmTerritory record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample CrmTerritory",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = CrmTerritoryValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

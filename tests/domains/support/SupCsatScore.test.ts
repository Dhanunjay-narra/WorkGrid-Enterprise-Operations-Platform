import { SupCsatScoreService } from "../../../services/core-engine/src/support/services/SupCsatScoreService";
import { SupCsatScoreValidator } from "../../../packages/types/src/domains/support/SupCsatScore";

describe("SupCsatScore Service & Validation Suite", () => {
  const service = new SupCsatScoreService();

  test("creates a valid SupCsatScore record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SupCsatScore",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SupCsatScoreValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

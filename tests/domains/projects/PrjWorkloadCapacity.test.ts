import { PrjWorkloadCapacityService } from "../../../services/core-engine/src/projects/services/PrjWorkloadCapacityService";
import { PrjWorkloadCapacityValidator } from "../../../packages/types/src/domains/projects/PrjWorkloadCapacity";

describe("PrjWorkloadCapacity Service & Validation Suite", () => {
  const service = new PrjWorkloadCapacityService();

  test("creates a valid PrjWorkloadCapacity record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample PrjWorkloadCapacity",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = PrjWorkloadCapacityValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

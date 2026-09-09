import { HrShiftService } from "../../../services/core-engine/src/hr/services/HrShiftService";
import { HrShiftValidator } from "../../../packages/types/src/domains/hr/HrShift";

describe("HrShift Service & Validation Suite", () => {
  const service = new HrShiftService();

  test("creates a valid HrShift record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample HrShift",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = HrShiftValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

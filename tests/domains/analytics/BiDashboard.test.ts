import { BiDashboardService } from "../../../services/core-engine/src/analytics/services/BiDashboardService";
import { BiDashboardValidator } from "../../../packages/types/src/domains/analytics/BiDashboard";

describe("BiDashboard Service & Validation Suite", () => {
  const service = new BiDashboardService();

  test("creates a valid BiDashboard record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample BiDashboard",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = BiDashboardValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

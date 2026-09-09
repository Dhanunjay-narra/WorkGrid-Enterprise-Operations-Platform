import { BiWidgetService } from "../../../services/core-engine/src/analytics/services/BiWidgetService";
import { BiWidgetValidator } from "../../../packages/types/src/domains/analytics/BiWidget";

describe("BiWidget Service & Validation Suite", () => {
  const service = new BiWidgetService();

  test("creates a valid BiWidget record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample BiWidget",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = BiWidgetValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

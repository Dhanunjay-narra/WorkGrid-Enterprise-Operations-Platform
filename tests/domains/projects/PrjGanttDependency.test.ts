import { PrjGanttDependencyService } from "../../../services/core-engine/src/projects/services/PrjGanttDependencyService";
import { PrjGanttDependencyValidator } from "../../../packages/types/src/domains/projects/PrjGanttDependency";

describe("PrjGanttDependency Service & Validation Suite", () => {
  const service = new PrjGanttDependencyService();

  test("creates a valid PrjGanttDependency record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample PrjGanttDependency",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = PrjGanttDependencyValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

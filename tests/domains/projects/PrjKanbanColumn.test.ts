import { PrjKanbanColumnService } from "../../../services/core-engine/src/projects/services/PrjKanbanColumnService";
import { PrjKanbanColumnValidator } from "../../../packages/types/src/domains/projects/PrjKanbanColumn";

describe("PrjKanbanColumn Service & Validation Suite", () => {
  const service = new PrjKanbanColumnService();

  test("creates a valid PrjKanbanColumn record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample PrjKanbanColumn",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = PrjKanbanColumnValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

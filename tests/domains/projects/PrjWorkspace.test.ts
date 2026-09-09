import { PrjWorkspaceService } from "../../../services/core-engine/src/projects/services/PrjWorkspaceService";
import { PrjWorkspaceValidator } from "../../../packages/types/src/domains/projects/PrjWorkspace";

describe("PrjWorkspace Service & Validation Suite", () => {
  const service = new PrjWorkspaceService();

  test("creates a valid PrjWorkspace record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample PrjWorkspace",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = PrjWorkspaceValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

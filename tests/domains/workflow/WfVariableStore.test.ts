import { WfVariableStoreService } from "../../../services/core-engine/src/workflow/services/WfVariableStoreService";
import { WfVariableStoreValidator } from "../../../packages/types/src/domains/workflow/WfVariableStore";

describe("WfVariableStore Service & Validation Suite", () => {
  const service = new WfVariableStoreService();

  test("creates a valid WfVariableStore record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample WfVariableStore",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = WfVariableStoreValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

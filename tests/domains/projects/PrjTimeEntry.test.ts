import { PrjTimeEntryService } from "../../../services/core-engine/src/projects/services/PrjTimeEntryService";
import { PrjTimeEntryValidator } from "../../../packages/types/src/domains/projects/PrjTimeEntry";

describe("PrjTimeEntry Service & Validation Suite", () => {
  const service = new PrjTimeEntryService();

  test("creates a valid PrjTimeEntry record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample PrjTimeEntry",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = PrjTimeEntryValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

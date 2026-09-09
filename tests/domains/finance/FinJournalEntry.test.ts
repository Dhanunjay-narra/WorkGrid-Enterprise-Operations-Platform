import { FinJournalEntryService } from "../../../services/core-engine/src/finance/services/FinJournalEntryService";
import { FinJournalEntryValidator } from "../../../packages/types/src/domains/finance/FinJournalEntry";

describe("FinJournalEntry Service & Validation Suite", () => {
  const service = new FinJournalEntryService();

  test("creates a valid FinJournalEntry record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample FinJournalEntry",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = FinJournalEntryValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

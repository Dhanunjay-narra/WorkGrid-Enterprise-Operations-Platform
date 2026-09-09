import { FinGeneralLedgerService } from "../../../services/core-engine/src/finance/services/FinGeneralLedgerService";
import { FinGeneralLedgerValidator } from "../../../packages/types/src/domains/finance/FinGeneralLedger";

describe("FinGeneralLedger Service & Validation Suite", () => {
  const service = new FinGeneralLedgerService();

  test("creates a valid FinGeneralLedger record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample FinGeneralLedger",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = FinGeneralLedgerValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

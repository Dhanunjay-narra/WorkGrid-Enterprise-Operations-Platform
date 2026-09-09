import { FinLedgerAccountService } from "../../../services/core-engine/src/finance/services/FinLedgerAccountService";
import { FinLedgerAccountValidator } from "../../../packages/types/src/domains/finance/FinLedgerAccount";

describe("FinLedgerAccount Service & Validation Suite", () => {
  const service = new FinLedgerAccountService();

  test("creates a valid FinLedgerAccount record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample FinLedgerAccount",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = FinLedgerAccountValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

import { EvtAckReceiptService } from "../../../services/core-engine/src/events/services/EvtAckReceiptService";
import { EvtAckReceiptValidator } from "../../../packages/types/src/domains/events/EvtAckReceipt";

describe("EvtAckReceipt Service & Validation Suite", () => {
  const service = new EvtAckReceiptService();

  test("creates a valid EvtAckReceipt record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample EvtAckReceipt",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = EvtAckReceiptValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

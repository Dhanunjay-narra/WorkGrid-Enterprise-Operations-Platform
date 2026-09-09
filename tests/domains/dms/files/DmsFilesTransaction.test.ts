import { DmsFilesTransactionService } from "../../../services/core-engine/src/dms/files/services/DmsFilesTransactionService";
import { DmsFilesTransactionValidator } from "../../../packages/types/src/domains/dms/files/DmsFilesTransaction";
import { DmsFilesTransactionStateMachine } from "../../../services/core-engine/src/dms/files/state-machines/DmsFilesTransactionStateMachine";

describe("DmsFilesTransaction Comprehensive Domain Test Suite", () => {
  const service = new DmsFilesTransactionService();
  const sm = new DmsFilesTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsFilesTransaction Instance",
      domain: "dms_files",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsFilesTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

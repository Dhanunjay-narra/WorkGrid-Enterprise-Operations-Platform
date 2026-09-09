import { WfApprovalDecisionService } from "../../../services/core-engine/src/workflow/services/WfApprovalDecisionService";
import { WfApprovalDecisionValidator } from "../../../packages/types/src/domains/workflow/WfApprovalDecision";

describe("WfApprovalDecision Service & Validation Suite", () => {
  const service = new WfApprovalDecisionService();

  test("creates a valid WfApprovalDecision record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample WfApprovalDecision",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = WfApprovalDecisionValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

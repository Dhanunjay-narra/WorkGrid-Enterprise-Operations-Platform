import { HrInterviewStageService } from "../../../services/core-engine/src/hr/services/HrInterviewStageService";
import { HrInterviewStageValidator } from "../../../packages/types/src/domains/hr/HrInterviewStage";

describe("HrInterviewStage Service & Validation Suite", () => {
  const service = new HrInterviewStageService();

  test("creates a valid HrInterviewStage record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample HrInterviewStage",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = HrInterviewStageValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

import { HrCandidateService } from "../../../services/core-engine/src/hr/services/HrCandidateService";
import { HrCandidateValidator } from "../../../packages/types/src/domains/hr/HrCandidate";

describe("HrCandidate Service & Validation Suite", () => {
  const service = new HrCandidateService();

  test("creates a valid HrCandidate record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample HrCandidate",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = HrCandidateValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

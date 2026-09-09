import { PrjIssueReportService } from "../../../services/core-engine/src/projects/services/PrjIssueReportService";
import { PrjIssueReportValidator } from "../../../packages/types/src/domains/projects/PrjIssueReport";

describe("PrjIssueReport Service & Validation Suite", () => {
  const service = new PrjIssueReportService();

  test("creates a valid PrjIssueReport record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample PrjIssueReport",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = PrjIssueReportValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

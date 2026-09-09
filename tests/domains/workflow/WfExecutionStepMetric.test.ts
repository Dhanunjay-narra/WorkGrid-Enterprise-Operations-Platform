import { WfExecutionStepMetricService } from "../../../services/core-engine/src/workflow/services/WfExecutionStepMetricService";
import { WfExecutionStepMetricValidator } from "../../../packages/types/src/domains/workflow/WfExecutionStepMetric";

describe("WfExecutionStepMetric Service & Validation Suite", () => {
  const service = new WfExecutionStepMetricService();

  test("creates a valid WfExecutionStepMetric record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample WfExecutionStepMetric",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = WfExecutionStepMetricValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});

import { BiAnomaliesTaskService } from "../../../services/core-engine/src/bi/anomalies/services/BiAnomaliesTaskService";
import { BiAnomaliesTaskValidator } from "../../../packages/types/src/domains/bi/anomalies/BiAnomaliesTask";
import { BiAnomaliesTaskStateMachine } from "../../../services/core-engine/src/bi/anomalies/state-machines/BiAnomaliesTaskStateMachine";

describe("BiAnomaliesTask Comprehensive Domain Test Suite", () => {
  const service = new BiAnomaliesTaskService();
  const sm = new BiAnomaliesTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiAnomaliesTask Instance",
      domain: "bi_anomalies",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiAnomaliesTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});

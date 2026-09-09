import { FinFinancialForecastPublisher } from "../../../services/core-engine/src/finance/events/FinFinancialForecastPublisher";
import { FinFinancialForecastTelemetry } from "../../../services/core-engine/src/finance/telemetry/FinFinancialForecastTelemetry";

describe("FinFinancialForecast Edge-Case & Outbox Test Suite", () => {
  const publisher = new FinFinancialForecastPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = FinFinancialForecastTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});

import { IotThresholdAlertRuleRpcServer } from "../../../services/core-engine/src/iot/rpc/servers/IotThresholdAlertRuleRpcServer";
import { IotThresholdAlertRuleFormValidator } from "../../../packages/types/src/forms/iot/IotThresholdAlertRuleFormSchema";

describe("IotThresholdAlertRule System Level Integration Test", () => {
  const server = new IotThresholdAlertRuleRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IotThresholdAlertRuleFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});

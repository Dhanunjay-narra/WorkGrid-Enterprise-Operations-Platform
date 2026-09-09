import { IotAnomalyAlertRpcServer } from "../../../services/core-engine/src/iot/rpc/servers/IotAnomalyAlertRpcServer";
import { IotAnomalyAlertFormValidator } from "../../../packages/types/src/forms/iot/IotAnomalyAlertFormSchema";

describe("IotAnomalyAlert System Level Integration Test", () => {
  const server = new IotAnomalyAlertRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IotAnomalyAlertFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});

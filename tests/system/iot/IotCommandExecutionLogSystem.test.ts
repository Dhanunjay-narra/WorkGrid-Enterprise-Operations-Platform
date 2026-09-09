import { IotCommandExecutionLogRpcServer } from "../../../services/core-engine/src/iot/rpc/servers/IotCommandExecutionLogRpcServer";
import { IotCommandExecutionLogFormValidator } from "../../../packages/types/src/forms/iot/IotCommandExecutionLogFormSchema";

describe("IotCommandExecutionLog System Level Integration Test", () => {
  const server = new IotCommandExecutionLogRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IotCommandExecutionLogFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});

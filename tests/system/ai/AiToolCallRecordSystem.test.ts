import { AiToolCallRecordRpcServer } from "../../../services/core-engine/src/ai/rpc/servers/AiToolCallRecordRpcServer";
import { AiToolCallRecordFormValidator } from "../../../packages/types/src/forms/ai/AiToolCallRecordFormSchema";

describe("AiToolCallRecord System Level Integration Test", () => {
  const server = new AiToolCallRecordRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = AiToolCallRecordFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});

import { AiTokenUsageRecordRpcServer } from "../../../services/core-engine/src/ai/rpc/servers/AiTokenUsageRecordRpcServer";
import { AiTokenUsageRecordFormValidator } from "../../../packages/types/src/forms/ai/AiTokenUsageRecordFormSchema";

describe("AiTokenUsageRecord System Level Integration Test", () => {
  const server = new AiTokenUsageRecordRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = AiTokenUsageRecordFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});

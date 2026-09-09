import { AiAgentMemoryEntryRpcServer } from "../../../services/core-engine/src/ai/rpc/servers/AiAgentMemoryEntryRpcServer";
import { AiAgentMemoryEntryFormValidator } from "../../../packages/types/src/forms/ai/AiAgentMemoryEntryFormSchema";

describe("AiAgentMemoryEntry System Level Integration Test", () => {
  const server = new AiAgentMemoryEntryRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = AiAgentMemoryEntryFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});

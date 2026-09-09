import { AiDocumentChunkRpcServer } from "../../../services/core-engine/src/ai/rpc/servers/AiDocumentChunkRpcServer";
import { AiDocumentChunkFormValidator } from "../../../packages/types/src/forms/ai/AiDocumentChunkFormSchema";

describe("AiDocumentChunk System Level Integration Test", () => {
  const server = new AiDocumentChunkRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = AiDocumentChunkFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});

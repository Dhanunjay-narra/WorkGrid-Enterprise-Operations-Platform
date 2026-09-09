import { AiVectorEmbeddingRpcServer } from "../../../services/core-engine/src/ai/rpc/servers/AiVectorEmbeddingRpcServer";
import { AiVectorEmbeddingFormValidator } from "../../../packages/types/src/forms/ai/AiVectorEmbeddingFormSchema";

describe("AiVectorEmbedding System Level Integration Test", () => {
  const server = new AiVectorEmbeddingRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = AiVectorEmbeddingFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});

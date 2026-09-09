import { SupKnowledgeArticleRpcServer } from "../../../services/core-engine/src/support/rpc/servers/SupKnowledgeArticleRpcServer";
import { SupKnowledgeArticleFormValidator } from "../../../packages/types/src/forms/support/SupKnowledgeArticleFormSchema";

describe("SupKnowledgeArticle System Level Integration Test", () => {
  const server = new SupKnowledgeArticleRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = SupKnowledgeArticleFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});

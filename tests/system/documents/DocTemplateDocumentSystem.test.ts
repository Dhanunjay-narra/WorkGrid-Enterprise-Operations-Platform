import { DocTemplateDocumentRpcServer } from "../../../services/core-engine/src/documents/rpc/servers/DocTemplateDocumentRpcServer";
import { DocTemplateDocumentFormValidator } from "../../../packages/types/src/forms/documents/DocTemplateDocumentFormSchema";

describe("DocTemplateDocument System Level Integration Test", () => {
  const server = new DocTemplateDocumentRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = DocTemplateDocumentFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});

import { DocDocumentSignatureRpcServer } from "../../../services/core-engine/src/documents/rpc/servers/DocDocumentSignatureRpcServer";
import { DocDocumentSignatureFormValidator } from "../../../packages/types/src/forms/documents/DocDocumentSignatureFormSchema";

describe("DocDocumentSignature System Level Integration Test", () => {
  const server = new DocDocumentSignatureRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = DocDocumentSignatureFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});

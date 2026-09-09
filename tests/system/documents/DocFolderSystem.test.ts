import { DocFolderRpcServer } from "../../../services/core-engine/src/documents/rpc/servers/DocFolderRpcServer";
import { DocFolderFormValidator } from "../../../packages/types/src/forms/documents/DocFolderFormSchema";

describe("DocFolder System Level Integration Test", () => {
  const server = new DocFolderRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = DocFolderFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});

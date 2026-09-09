import { DocFileExportJobRpcServer } from "../../../services/core-engine/src/documents/rpc/servers/DocFileExportJobRpcServer";
import { DocFileExportJobFormValidator } from "../../../packages/types/src/forms/documents/DocFileExportJobFormSchema";

describe("DocFileExportJob System Level Integration Test", () => {
  const server = new DocFileExportJobRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = DocFileExportJobFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});

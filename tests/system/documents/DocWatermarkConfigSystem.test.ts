import { DocWatermarkConfigRpcServer } from "../../../services/core-engine/src/documents/rpc/servers/DocWatermarkConfigRpcServer";
import { DocWatermarkConfigFormValidator } from "../../../packages/types/src/forms/documents/DocWatermarkConfigFormSchema";

describe("DocWatermarkConfig System Level Integration Test", () => {
  const server = new DocWatermarkConfigRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = DocWatermarkConfigFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});

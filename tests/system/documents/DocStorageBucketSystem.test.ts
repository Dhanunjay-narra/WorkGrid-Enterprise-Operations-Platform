import { DocStorageBucketRpcServer } from "../../../services/core-engine/src/documents/rpc/servers/DocStorageBucketRpcServer";
import { DocStorageBucketFormValidator } from "../../../packages/types/src/forms/documents/DocStorageBucketFormSchema";

describe("DocStorageBucket System Level Integration Test", () => {
  const server = new DocStorageBucketRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = DocStorageBucketFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});

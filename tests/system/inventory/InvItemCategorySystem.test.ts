import { InvItemCategoryRpcServer } from "../../../services/core-engine/src/inventory/rpc/servers/InvItemCategoryRpcServer";
import { InvItemCategoryFormValidator } from "../../../packages/types/src/forms/inventory/InvItemCategoryFormSchema";

describe("InvItemCategory System Level Integration Test", () => {
  const server = new InvItemCategoryRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = InvItemCategoryFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});

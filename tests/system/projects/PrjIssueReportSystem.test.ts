import { PrjIssueReportRpcServer } from "../../../services/core-engine/src/projects/rpc/servers/PrjIssueReportRpcServer";
import { PrjIssueReportFormValidator } from "../../../packages/types/src/forms/projects/PrjIssueReportFormSchema";

describe("PrjIssueReport System Level Integration Test", () => {
  const server = new PrjIssueReportRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = PrjIssueReportFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});

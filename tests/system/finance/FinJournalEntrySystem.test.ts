import { FinJournalEntryRpcServer } from "../../../services/core-engine/src/finance/rpc/servers/FinJournalEntryRpcServer";
import { FinJournalEntryFormValidator } from "../../../packages/types/src/forms/finance/FinJournalEntryFormSchema";

describe("FinJournalEntry System Level Integration Test", () => {
  const server = new FinJournalEntryRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = FinJournalEntryFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});

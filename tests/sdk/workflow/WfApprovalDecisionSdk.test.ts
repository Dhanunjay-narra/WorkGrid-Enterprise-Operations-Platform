import { WfApprovalDecisionClient } from "../../../packages/sdk/src/clients/workflow/WfApprovalDecisionClient";

describe("WfApprovalDecision SDK Client Integration Matrix", () => {
  const client = new WfApprovalDecisionClient("test-api-key");

  test("fetches single WfApprovalDecision via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("workflow");
  });

  test("lists WfApprovalDecision entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

import { WfApprovalTaskClient } from "../../../packages/sdk/src/clients/workflow/WfApprovalTaskClient";

describe("WfApprovalTask SDK Client Integration Matrix", () => {
  const client = new WfApprovalTaskClient("test-api-key");

  test("fetches single WfApprovalTask via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("workflow");
  });

  test("lists WfApprovalTask entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

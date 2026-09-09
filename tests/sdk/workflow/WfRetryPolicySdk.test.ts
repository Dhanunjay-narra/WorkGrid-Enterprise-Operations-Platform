import { WfRetryPolicyClient } from "../../../packages/sdk/src/clients/workflow/WfRetryPolicyClient";

describe("WfRetryPolicy SDK Client Integration Matrix", () => {
  const client = new WfRetryPolicyClient("test-api-key");

  test("fetches single WfRetryPolicy via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("workflow");
  });

  test("lists WfRetryPolicy entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

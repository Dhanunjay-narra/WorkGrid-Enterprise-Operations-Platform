import { HrLeavePolicyClient } from "../../../packages/sdk/src/clients/hr/HrLeavePolicyClient";

describe("HrLeavePolicy SDK Client Integration Matrix", () => {
  const client = new HrLeavePolicyClient("test-api-key");

  test("fetches single HrLeavePolicy via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("hr");
  });

  test("lists HrLeavePolicy entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

import { HrLeaveRequestClient } from "../../../packages/sdk/src/clients/hr/HrLeaveRequestClient";

describe("HrLeaveRequest SDK Client Integration Matrix", () => {
  const client = new HrLeaveRequestClient("test-api-key");

  test("fetches single HrLeaveRequest via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("hr");
  });

  test("lists HrLeaveRequest entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

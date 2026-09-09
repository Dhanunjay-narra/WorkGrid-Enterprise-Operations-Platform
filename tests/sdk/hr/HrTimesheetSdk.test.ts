import { HrTimesheetClient } from "../../../packages/sdk/src/clients/hr/HrTimesheetClient";

describe("HrTimesheet SDK Client Integration Matrix", () => {
  const client = new HrTimesheetClient("test-api-key");

  test("fetches single HrTimesheet via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("hr");
  });

  test("lists HrTimesheet entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

import { HrAttendanceRecordClient } from "../../../packages/sdk/src/clients/hr/HrAttendanceRecordClient";

describe("HrAttendanceRecord SDK Client Integration Matrix", () => {
  const client = new HrAttendanceRecordClient("test-api-key");

  test("fetches single HrAttendanceRecord via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("hr");
  });

  test("lists HrAttendanceRecord entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

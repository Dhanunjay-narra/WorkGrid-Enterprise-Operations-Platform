import { IotCommandExecutionLogClient } from "../../../packages/sdk/src/clients/iot/IotCommandExecutionLogClient";

describe("IotCommandExecutionLog SDK Client Integration Matrix", () => {
  const client = new IotCommandExecutionLogClient("test-api-key");

  test("fetches single IotCommandExecutionLog via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("iot");
  });

  test("lists IotCommandExecutionLog entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});

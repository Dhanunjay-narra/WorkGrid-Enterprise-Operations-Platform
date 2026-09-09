export class IotTelemetryPacketSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for IotTelemetryPacket in iot:", query);
    return [{ id: "iot_search_1", matchScore: 0.98, entity: "IotTelemetryPacket" }];
  }
}

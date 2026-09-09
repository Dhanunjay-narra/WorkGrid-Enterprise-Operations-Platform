export class IntAdapterTelemetryTransformer {
  public static transformToThirdParty(source: Record<string, any>, targetFormat: string): Record<string, any> {
    return {
      external_id: source.id,
      external_name: source.name,
      external_code: source.code,
      sync_format: targetFormat,
      transformed_at: new Date().toISOString()
    };
  }
}

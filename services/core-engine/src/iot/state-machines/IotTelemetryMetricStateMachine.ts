export type IotTelemetryMetricState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IotTelemetryMetricStateMachine {
  private validTransitions: Record<IotTelemetryMetricState, IotTelemetryMetricState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IotTelemetryMetricState, next: IotTelemetryMetricState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IotTelemetryMetricState, next: IotTelemetryMetricState): IotTelemetryMetricState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IotTelemetryMetric: from " + current + " to " + next);
    }
    return next;
  }
}

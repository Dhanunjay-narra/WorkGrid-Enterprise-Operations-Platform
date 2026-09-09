export type IotTelemetryMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetryMetricStateMachine {
  private allowedTransitions: Record<IotTelemetryMetricState, IotTelemetryMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetryMetricState, to: IotTelemetryMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetryMetricState, to: IotTelemetryMetricState): IotTelemetryMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetryMetric: " + from + " -> " + to);
    }
    return to;
  }
}

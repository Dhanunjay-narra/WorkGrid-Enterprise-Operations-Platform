export type IotAnomaliesMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesMetricStateMachine {
  private allowedTransitions: Record<IotAnomaliesMetricState, IotAnomaliesMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesMetricState, to: IotAnomaliesMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesMetricState, to: IotAnomaliesMetricState): IotAnomaliesMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesMetric: " + from + " -> " + to);
    }
    return to;
  }
}

export type IotFleetMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetMetricStateMachine {
  private allowedTransitions: Record<IotFleetMetricState, IotFleetMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetMetricState, to: IotFleetMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetMetricState, to: IotFleetMetricState): IotFleetMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetMetric: " + from + " -> " + to);
    }
    return to;
  }
}

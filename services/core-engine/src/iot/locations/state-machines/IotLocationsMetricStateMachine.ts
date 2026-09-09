export type IotLocationsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotLocationsMetricStateMachine {
  private allowedTransitions: Record<IotLocationsMetricState, IotLocationsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotLocationsMetricState, to: IotLocationsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotLocationsMetricState, to: IotLocationsMetricState): IotLocationsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotLocationsMetric: " + from + " -> " + to);
    }
    return to;
  }
}

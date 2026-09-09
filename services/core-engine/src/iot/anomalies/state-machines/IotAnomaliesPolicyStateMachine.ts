export type IotAnomaliesPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesPolicyStateMachine {
  private allowedTransitions: Record<IotAnomaliesPolicyState, IotAnomaliesPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesPolicyState, to: IotAnomaliesPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesPolicyState, to: IotAnomaliesPolicyState): IotAnomaliesPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesPolicy: " + from + " -> " + to);
    }
    return to;
  }
}

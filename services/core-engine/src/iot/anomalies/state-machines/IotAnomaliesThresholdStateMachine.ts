export type IotAnomaliesThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesThresholdStateMachine {
  private allowedTransitions: Record<IotAnomaliesThresholdState, IotAnomaliesThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesThresholdState, to: IotAnomaliesThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesThresholdState, to: IotAnomaliesThresholdState): IotAnomaliesThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesThreshold: " + from + " -> " + to);
    }
    return to;
  }
}

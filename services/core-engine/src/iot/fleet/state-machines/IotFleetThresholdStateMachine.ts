export type IotFleetThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetThresholdStateMachine {
  private allowedTransitions: Record<IotFleetThresholdState, IotFleetThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetThresholdState, to: IotFleetThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetThresholdState, to: IotFleetThresholdState): IotFleetThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetThreshold: " + from + " -> " + to);
    }
    return to;
  }
}

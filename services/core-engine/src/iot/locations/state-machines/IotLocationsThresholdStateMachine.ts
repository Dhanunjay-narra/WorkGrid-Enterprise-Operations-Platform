export type IotLocationsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotLocationsThresholdStateMachine {
  private allowedTransitions: Record<IotLocationsThresholdState, IotLocationsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotLocationsThresholdState, to: IotLocationsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotLocationsThresholdState, to: IotLocationsThresholdState): IotLocationsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotLocationsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}

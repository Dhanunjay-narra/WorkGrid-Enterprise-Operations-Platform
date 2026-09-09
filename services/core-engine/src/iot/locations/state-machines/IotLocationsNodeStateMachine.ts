export type IotLocationsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotLocationsNodeStateMachine {
  private allowedTransitions: Record<IotLocationsNodeState, IotLocationsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotLocationsNodeState, to: IotLocationsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotLocationsNodeState, to: IotLocationsNodeState): IotLocationsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotLocationsNode: " + from + " -> " + to);
    }
    return to;
  }
}

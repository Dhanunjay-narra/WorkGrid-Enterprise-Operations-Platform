export type IotFleetNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetNodeStateMachine {
  private allowedTransitions: Record<IotFleetNodeState, IotFleetNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetNodeState, to: IotFleetNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetNodeState, to: IotFleetNodeState): IotFleetNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetNode: " + from + " -> " + to);
    }
    return to;
  }
}

export type IotFleetPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetPolicyStateMachine {
  private allowedTransitions: Record<IotFleetPolicyState, IotFleetPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetPolicyState, to: IotFleetPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetPolicyState, to: IotFleetPolicyState): IotFleetPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetPolicy: " + from + " -> " + to);
    }
    return to;
  }
}

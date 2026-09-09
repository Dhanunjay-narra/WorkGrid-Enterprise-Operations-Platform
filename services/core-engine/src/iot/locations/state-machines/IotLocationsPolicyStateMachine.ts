export type IotLocationsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotLocationsPolicyStateMachine {
  private allowedTransitions: Record<IotLocationsPolicyState, IotLocationsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotLocationsPolicyState, to: IotLocationsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotLocationsPolicyState, to: IotLocationsPolicyState): IotLocationsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotLocationsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}

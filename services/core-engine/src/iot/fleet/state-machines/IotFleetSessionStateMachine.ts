export type IotFleetSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetSessionStateMachine {
  private allowedTransitions: Record<IotFleetSessionState, IotFleetSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetSessionState, to: IotFleetSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetSessionState, to: IotFleetSessionState): IotFleetSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetSession: " + from + " -> " + to);
    }
    return to;
  }
}

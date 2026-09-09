export type IotFleetStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetStateStateMachine {
  private allowedTransitions: Record<IotFleetStateState, IotFleetStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetStateState, to: IotFleetStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetStateState, to: IotFleetStateState): IotFleetStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetState: " + from + " -> " + to);
    }
    return to;
  }
}

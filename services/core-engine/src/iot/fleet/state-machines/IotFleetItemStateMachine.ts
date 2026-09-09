export type IotFleetItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetItemStateMachine {
  private allowedTransitions: Record<IotFleetItemState, IotFleetItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetItemState, to: IotFleetItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetItemState, to: IotFleetItemState): IotFleetItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetItem: " + from + " -> " + to);
    }
    return to;
  }
}

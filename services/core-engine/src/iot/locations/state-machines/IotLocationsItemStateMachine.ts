export type IotLocationsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotLocationsItemStateMachine {
  private allowedTransitions: Record<IotLocationsItemState, IotLocationsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotLocationsItemState, to: IotLocationsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotLocationsItemState, to: IotLocationsItemState): IotLocationsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotLocationsItem: " + from + " -> " + to);
    }
    return to;
  }
}

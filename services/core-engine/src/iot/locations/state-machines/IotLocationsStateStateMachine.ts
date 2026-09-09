export type IotLocationsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotLocationsStateStateMachine {
  private allowedTransitions: Record<IotLocationsStateState, IotLocationsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotLocationsStateState, to: IotLocationsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotLocationsStateState, to: IotLocationsStateState): IotLocationsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotLocationsState: " + from + " -> " + to);
    }
    return to;
  }
}

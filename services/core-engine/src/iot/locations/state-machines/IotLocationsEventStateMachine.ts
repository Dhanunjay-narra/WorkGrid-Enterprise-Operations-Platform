export type IotLocationsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotLocationsEventStateMachine {
  private allowedTransitions: Record<IotLocationsEventState, IotLocationsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotLocationsEventState, to: IotLocationsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotLocationsEventState, to: IotLocationsEventState): IotLocationsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotLocationsEvent: " + from + " -> " + to);
    }
    return to;
  }
}

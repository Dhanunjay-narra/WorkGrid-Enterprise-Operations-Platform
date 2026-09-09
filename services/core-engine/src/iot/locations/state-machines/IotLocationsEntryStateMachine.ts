export type IotLocationsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotLocationsEntryStateMachine {
  private allowedTransitions: Record<IotLocationsEntryState, IotLocationsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotLocationsEntryState, to: IotLocationsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotLocationsEntryState, to: IotLocationsEntryState): IotLocationsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotLocationsEntry: " + from + " -> " + to);
    }
    return to;
  }
}

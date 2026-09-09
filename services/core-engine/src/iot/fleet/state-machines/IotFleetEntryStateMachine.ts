export type IotFleetEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetEntryStateMachine {
  private allowedTransitions: Record<IotFleetEntryState, IotFleetEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetEntryState, to: IotFleetEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetEntryState, to: IotFleetEntryState): IotFleetEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetEntry: " + from + " -> " + to);
    }
    return to;
  }
}

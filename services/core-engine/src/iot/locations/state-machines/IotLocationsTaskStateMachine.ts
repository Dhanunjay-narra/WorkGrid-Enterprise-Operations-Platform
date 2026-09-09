export type IotLocationsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotLocationsTaskStateMachine {
  private allowedTransitions: Record<IotLocationsTaskState, IotLocationsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotLocationsTaskState, to: IotLocationsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotLocationsTaskState, to: IotLocationsTaskState): IotLocationsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotLocationsTask: " + from + " -> " + to);
    }
    return to;
  }
}

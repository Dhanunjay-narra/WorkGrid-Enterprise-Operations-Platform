export type IotLocationsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotLocationsSessionStateMachine {
  private allowedTransitions: Record<IotLocationsSessionState, IotLocationsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotLocationsSessionState, to: IotLocationsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotLocationsSessionState, to: IotLocationsSessionState): IotLocationsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotLocationsSession: " + from + " -> " + to);
    }
    return to;
  }
}

export type IotLocationsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotLocationsProfileStateMachine {
  private allowedTransitions: Record<IotLocationsProfileState, IotLocationsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotLocationsProfileState, to: IotLocationsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotLocationsProfileState, to: IotLocationsProfileState): IotLocationsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotLocationsProfile: " + from + " -> " + to);
    }
    return to;
  }
}

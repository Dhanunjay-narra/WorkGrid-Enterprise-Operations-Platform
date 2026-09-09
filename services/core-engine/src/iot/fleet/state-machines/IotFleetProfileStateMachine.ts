export type IotFleetProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetProfileStateMachine {
  private allowedTransitions: Record<IotFleetProfileState, IotFleetProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetProfileState, to: IotFleetProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetProfileState, to: IotFleetProfileState): IotFleetProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetProfile: " + from + " -> " + to);
    }
    return to;
  }
}

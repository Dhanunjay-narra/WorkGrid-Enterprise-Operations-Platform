export type IotFleetConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetConfigStateMachine {
  private allowedTransitions: Record<IotFleetConfigState, IotFleetConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetConfigState, to: IotFleetConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetConfigState, to: IotFleetConfigState): IotFleetConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetConfig: " + from + " -> " + to);
    }
    return to;
  }
}

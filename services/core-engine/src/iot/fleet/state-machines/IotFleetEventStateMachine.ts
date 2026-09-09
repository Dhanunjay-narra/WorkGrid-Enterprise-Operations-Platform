export type IotFleetEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetEventStateMachine {
  private allowedTransitions: Record<IotFleetEventState, IotFleetEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetEventState, to: IotFleetEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetEventState, to: IotFleetEventState): IotFleetEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetEvent: " + from + " -> " + to);
    }
    return to;
  }
}

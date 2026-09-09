export type IotFleetQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetQueueStateMachine {
  private allowedTransitions: Record<IotFleetQueueState, IotFleetQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetQueueState, to: IotFleetQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetQueueState, to: IotFleetQueueState): IotFleetQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetQueue: " + from + " -> " + to);
    }
    return to;
  }
}

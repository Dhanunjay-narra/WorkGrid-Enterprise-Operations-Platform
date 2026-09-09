export type IotAnomaliesQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesQueueStateMachine {
  private allowedTransitions: Record<IotAnomaliesQueueState, IotAnomaliesQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesQueueState, to: IotAnomaliesQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesQueueState, to: IotAnomaliesQueueState): IotAnomaliesQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesQueue: " + from + " -> " + to);
    }
    return to;
  }
}

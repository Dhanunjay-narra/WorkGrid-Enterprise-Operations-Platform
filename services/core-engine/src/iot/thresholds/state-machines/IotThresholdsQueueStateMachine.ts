export type IotThresholdsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsQueueStateMachine {
  private allowedTransitions: Record<IotThresholdsQueueState, IotThresholdsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsQueueState, to: IotThresholdsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsQueueState, to: IotThresholdsQueueState): IotThresholdsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsQueue: " + from + " -> " + to);
    }
    return to;
  }
}

export type IotThresholdsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsBatchStateMachine {
  private allowedTransitions: Record<IotThresholdsBatchState, IotThresholdsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsBatchState, to: IotThresholdsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsBatchState, to: IotThresholdsBatchState): IotThresholdsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsBatch: " + from + " -> " + to);
    }
    return to;
  }
}

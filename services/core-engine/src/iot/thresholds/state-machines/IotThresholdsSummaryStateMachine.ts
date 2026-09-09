export type IotThresholdsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsSummaryStateMachine {
  private allowedTransitions: Record<IotThresholdsSummaryState, IotThresholdsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsSummaryState, to: IotThresholdsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsSummaryState, to: IotThresholdsSummaryState): IotThresholdsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsSummary: " + from + " -> " + to);
    }
    return to;
  }
}

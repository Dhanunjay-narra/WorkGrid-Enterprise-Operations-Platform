export type IotThresholdsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsPolicyStateMachine {
  private allowedTransitions: Record<IotThresholdsPolicyState, IotThresholdsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsPolicyState, to: IotThresholdsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsPolicyState, to: IotThresholdsPolicyState): IotThresholdsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}

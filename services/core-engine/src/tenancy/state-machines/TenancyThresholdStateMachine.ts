export type TenancyThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class TenancyThresholdStateMachine {
  private allowedTransitions: Record<TenancyThresholdState, TenancyThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: TenancyThresholdState, to: TenancyThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: TenancyThresholdState, to: TenancyThresholdState): TenancyThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for TenancyThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
